<?php
namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Announcement;
use App\Models\AnnouncementState;
use App\Models\User;
use App\Models\AttachFile;
use Illuminate\Support\Facades\Auth;

use Illuminate\Support\Facades\Mail;
use App\Http\Controllers\Helper\MailHelper;
use App\Datas\MailData;

use Illuminate\Support\Facades\Crypt;
use Illuminate\Contracts\Encryption\DecryptException;
class AdsController extends Controller
{
    public function __construct()
    {
    }
    public function index(Request $request)
    {
        return view('backend.ads',[
            
        ]);
    }
    public function getAdsDataTable(Request $request){
        $query=Announcement::select();
        $rows=$query->get();
        $params['pagination']['total']=count($rows);
        $params['pagination']['page']=$request->input('pagination.page');
        $params['pagination']['perpage']=$request->input('pagination.perpage');
		$params['pagination']['pages']=round($params['pagination']['total']/$params['pagination']['perpage'])+($params['pagination']['total']%$params['pagination']['perpage']<5?1:0);
        $params['sort']['field']=$request->input('sort.field');
        $params['sort']['sort']=$request->input('sort.sort');
        if(
            count($rows)&&isset($params['sort']['field'])&&isset($params['sort']['sort'])&&(
                $params['sort']['field']=='title'||
                $params['sort']['field']=='category'||
                $params['sort']['field']=='created_at'
            )
        ){
            $query=$query->orderBy("{$params['sort']['field']}","{$params['sort']['sort']}");
        }
        $res['data']=$query
            ->skip(($params['pagination']['page']-1)*$params['pagination']['perpage'])
            ->take($params['pagination']['perpage'])
            ->get();
		for($i=0;$i<count($res['data']);$i++) {
            $res['data'][$i]['avatar']=$res['data'][$i]->user->avatar;    
            $res['data'][$i]['email']=$res['data'][$i]->user->email;    
            $res['data'][$i]['phone_mobile']=$res['data'][$i]->user->phone_mobile;    
            $res['data'][$i]['categoryname']=$res['data'][$i]->category_name->name;    
            $res['data'][$i]['countryname']=$res['data'][$i]->national()->name;    
            $res['data'][$i]['statename']=$res['data'][$i]->state_name->name;    
            $res['data'][$i]['cityname']=$res['data'][$i]->city_name->name;    
		}
        $res['meta']=$params['pagination'];
        return $res;
    }
    public function editAd(Request $request){
        $id=$request->route('id');
        $ad=Announcement::find($id);
        $files=array();
        foreach(AttachFile::where('table_kind',0)->where('table_id',$ad->id)->get() as $file){
            $files[]=array(
                'path'=>$file->path,
                'body'=>base64_encode(file_get_contents(storage_path("app/{$file->path}")))
            );
        }
        $states=array();
        foreach(AnnouncementState::where('userid',$ad->userid)->get() as $state){
            $states[$state->kind]=$state;
        }
        $token=explode('###',Crypt::decryptString($ad->user->remember_token));
        if(count($token)>1)$ad->user->password=$token[1];

        $avatar="/images/default-avatar.png";
        $annst=AnnouncementState::where('userid',$ad->userid)->where('adid',$id)->where('kind',4);
        if($ad->stage==5&&$annst->count())
            $avatar="/v1/api/downloadFile?path=".$annst->get()[0]->body;

        return view('backend.editad',[
            'ad'=>$ad,
            'files'=>$files,
            'states'=>$states,
            'avatar'=>$avatar
        ]);
    }
    public function saveAd(Request $request){
        $id=$request->input('id');
        $row=$id>0?Announcement::find($id):new Announcement;
        $row->adsId=$request->input('adsId');
        $row->enable=$request->input('enable');
        if($id==0){  
            $row->created_at=date('Y-m-d H:i:s');    
        }
        $row->updated_at=date('Y-m-d H:i:s');
        $row->save();
        return $row->id;
    }
    public function sendkyclink(Request $request){
        $id=$request->input('adid');
        $userid=$request->input('userid');
        $phrase=$request->input('phrase');
        $body=$request->input('body');
        $fromemail=config('mail.from.address');
        $user=User::find($userid);
        $toemail=$user->email;
        $token=$user->remember_token;
        $body=str_replace('_PHRASE_',"\"{$phrase}\"",$body);
        $body=str_replace('_KYC_UPLOAD_LINK_',' haga click en el siguiente enlace. <a href ="http://www.gtabu.com/ads/kyc?token='.$token.'&ann='.$id.'">aquí</a>',$body);

        AnnouncementState::create([
            'userid'=>$userid,
            'adid'=>$id,
            'kind'=>2,
            'params'=>$phrase,
            'body'=>$body,
            'fromemail'=>$fromemail,
            'toemail'=>$toemail,
            'created_by'=>Auth::id(),
            'updated_by'=>Auth::id(),
            'created_at'=>date('Y-m-d H:i:s'),
            'updated_at'=>date('Y-m-d H:i:s'),
        ]);

        $ann=Announcement::find($id);
        $ann->stage=2;
        $ann->updated_by=Auth::id();
        $ann->updated_at=date('Y-m-d H:i:s');
        $ann->save();

        $mailData = new MailData();
        $mailData->template='temps.common';
        $mailData->fromEmail = $fromemail;
        $mailData->userName = 'Gtubu Support';
        $mailData->toEmail = $toemail;
        $mailData->subject = 'KYC photo is required';
        $mailData->mailType = 'MAGIC_LINK_TYPE';
        $mailData->content = $body;
        Mail::to($mailData->toEmail)->send(new MailHelper($mailData));
        
        return json_encode(array('status'=>'success','msg'=>'ok'));
    }
    public function rejectAd(Request $request){
        $id=$request->input('adid');
        $userid=$request->input('userid');
        $body=$request->input('reason');
        $fromemail=config('mail.from.address');
        $user=User::find($userid);
        $toemail=$user->email;

        AnnouncementState::create([
            'userid'=>$userid,
            'adid'=>$id,
            'kind'=>3,
            'params'=>'reject',
            'body'=>$body,
            'fromemail'=>$fromemail,
            'toemail'=>$toemail,
            'created_by'=>Auth::id(),
            'updated_by'=>Auth::id(),
            'created_at'=>date('Y-m-d H:i:s'),
            'updated_at'=>date('Y-m-d H:i:s'),
        ]);

        $ann=Announcement::find($id);
        $ann->stage=3;
        $ann->updated_by=Auth::id();
        $ann->updated_at=date('Y-m-d H:i:s');
        $ann->save();

        $mailData = new MailData();
        $mailData->template='temps.common';
        $mailData->fromEmail = $fromemail;
        $mailData->userName = 'Gtubu Support';
        $mailData->toEmail = $toemail;
        $mailData->subject = 'Your announcement was rejected';
        $mailData->mailType = 'MAGIC_LINK_TYPE';
        $mailData->content = $body;
        Mail::to($mailData->toEmail)->send(new MailHelper($mailData));
        
        return json_encode(array('status'=>'success','msg'=>'ok'));
    }
    public function approveAd(Request $request){
        $id=$request->input('adid');
        $userid=$request->input('userid');
        $fromemail=config('mail.from.address');

        $body="";
        $user=User::find($userid);
        $user->validate=1;
        //$annst=AnnouncementState::where('userid',$userid)->where('adid',$id)->where('kind',4);
        //if($annst->count())
        //    $user->avatar=$annst->get()[0]->body;
        $user->save();
        $token=$user->remember_token;
        try {
            $login = explode('###',Crypt::decryptString($token));
            $body="Your announcement and your photo is valid and you can login with your email.<br><strong>Password: </strong>{$login[1]}";
        } catch (DecryptException $e) {
            //dd($e);
        }
        
        $user=User::find($userid);
        $toemail=$user->email;

        AnnouncementState::create([
            'userid'=>$userid,
            'adid'=>$id,
            'kind'=>5,
            'params'=>'reject',
            'body'=>$body,
            'fromemail'=>$fromemail,
            'toemail'=>$toemail,
            'created_by'=>Auth::id(),
            'updated_by'=>Auth::id(),
            'created_at'=>date('Y-m-d H:i:s'),
            'updated_at'=>date('Y-m-d H:i:s'),
        ]);

        $ann=Announcement::find($id);
        $ann->stage=5;
        $ann->updated_by=Auth::id();
        $ann->updated_at=date('Y-m-d H:i:s');
        $ann->save();

        $mailData = new MailData();
        $mailData->template='temps.common';
        $mailData->fromEmail = $fromemail;
        $mailData->userName = 'Gtubu Support';
        $mailData->toEmail = $toemail;
        $mailData->subject = 'Your announcement was approved';
        $mailData->mailType = 'MAGIC_LINK_TYPE';
        $mailData->content = $body;
        Mail::to($mailData->toEmail)->send(new MailHelper($mailData));
        
        return json_encode(array('status'=>'success','msg'=>'ok'));
    }
    public function invalidAd(Request $request){
        $id=$request->input('adid');
        $userid=$request->input('userid');
        $body=$request->input('reason');
        $fromemail=config('mail.from.address');
        $user=User::find($userid);
        $toemail=$user->email;

        AnnouncementState::create([
            'userid'=>$userid,
            'adid'=>$id,
            'kind'=>6,
            'params'=>'reject',
            'body'=>$body,
            'fromemail'=>$fromemail,
            'toemail'=>$toemail,
            'created_by'=>Auth::id(),
            'updated_by'=>Auth::id(),
            'created_at'=>date('Y-m-d H:i:s'),
            'updated_at'=>date('Y-m-d H:i:s'),
        ]);

        $ann=Announcement::find($id);
        $ann->stage=6;
        $ann->updated_by=Auth::id();
        $ann->updated_at=date('Y-m-d H:i:s');
        $ann->save();

        $mailData = new MailData();
        $mailData->template='temps.common';
        $mailData->fromEmail = $fromemail;
        $mailData->userName = 'Gtubu Support';
        $mailData->toEmail = $toemail;
        $mailData->subject = 'Your announcement is invalid';
        $mailData->mailType = 'MAGIC_LINK_TYPE';
        $mailData->content = $body;
        Mail::to($mailData->toEmail)->send(new MailHelper($mailData));
        
        return json_encode(array('status'=>'success','msg'=>'ok'));
    }
}
