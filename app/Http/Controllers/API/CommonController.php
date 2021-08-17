<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\Util\FileUtil;
use App\Models\Country;
use App\Models\State;
use App\Models\City;
use App\Models\Announcement;
use App\Models\AnnouncementState;
use App\Models\User;
use App\Models\CreditHistory;
use DB;
use Illuminate\Support\Facades\Mail;
use App\Http\Controllers\Helper\MailHelper;
use App\Datas\MailData;


use Illuminate\Support\Facades\Crypt;
use Illuminate\Contracts\Encryption\DecryptException;
class CommonController extends Controller
{
    public function __construct()
    {
        //$this->middleware('auth');
    }
    public function getStatesInCountry(Request $request){
        $country_id=$request->input('country_id');
        if($country_id>0)$country=Country::find($country_id);
        else $country=Country::where('iso_code2',$country_id)->first();
        $q=$request->input('q');
        $query=State::where('country_id',$country->id);//->where('name','!=',$country->name);
        if($q!='')$query=$query->whereRaw("name like '%{$q}%'");
        return $query->orderBy('id')->get();
    }
    public function getCitiesInState(Request $request){
        $state_id=$request->input('state_id');
        $state=State::find($state_id);
        $q=$request->input('q');
        $query=City::where('state_id',$state->id);//->where('name','!=',$state->name);
        if($q!='')$query=$query->whereRaw("name like '%{$q}%'");
        return $query->orderBy('id')->get();
    }
    public function postingAds(Request $request){
        $id=$request->input('id');
        $userid=$request->input('userid');
        $title=$request->input('title');
        $category=$request->input('category');
        $state=$request->input('state');
        $city=$request->input('city');
        $street=$request->input('street');
        $description=$request->input('description');
        $emailable=$request->input('emailable');
        $callable=$request->input('callable');
        $whatsable=$request->input('whatsable');
        //if($id==0){
            if(Announcement::where('title',$title)->where('id','!=',$id)->count())
                return json_encode(array('status'=>'error','msg'=>'double_title','id'=>0));
        //}
        $announcement=$id>0?Announcement::find($id):new Announcement;
        $announcement->updated_by=Auth::id();
        $announcement->updated_at=date("Y-m-d H:i:s");    
        $is_update=$announcement->stage;  
        if($emailable==null){
            $announcement->userid=$userid;
            $announcement->title=$title;
            $announcement->category=$category;
            $announcement->state=$state;
            $announcement->city=$city;
            $announcement->street=$street;
            $announcement->description=$description;
        }else{
            $announcement->stage=1;
            $announcement->emailable=$emailable=='true'?1:0;
            $announcement->callable=$callable=='true'?1:0;
            $announcement->whatsable=$whatsable=='true'?1:0;
        }
        if($id==0){
            $announcement->created_by=$announcement->updated_by;        
            $announcement->created_at=$announcement->updated_at;
        }
        $announcement->save();
        if($id&&!$is_update){
            try{
                $body=$request->input('body');                
                $user=User::find($announcement->userid);
                $fromemail=$user->email;
                $toemail=config('mail.from.address');
                $token=Crypt::encryptString("{$toemail}###SUPERADMIN");
                $body="please check new posting of an ad in admin panel.(<a href=\"http://www.gtabu.com/admin/login?token={$token}\">aquí.</a>)";
                AnnouncementState::create([
                    'userid'=>$announcement->userid,
                    'adid'=>$id,
                    'kind'=>1,
                    'params'=>$announcement->title,
                    'body'=>$body,
                    'fromemail'=>$fromemail,
                    'toemail'=>$toemail,
                    'created_by'=>$announcement->userid,
                    'updated_by'=>$announcement->userid,
                    'created_at'=>date('Y-m-d H:i:s'),
                    'updated_at'=>date('Y-m-d H:i:s'),
                ]);

                $mailData = new MailData();
                $mailData->template='temps.common';
                $mailData->fromEmail = $fromemail;
                $mailData->userName = 'Gtubu Support';
                $mailData->toEmail = $toemail;
                $mailData->subject = $announcement->title;
                $mailData->mailType = 'MAGIC_LINK_TYPE';
                $mailData->content = $body;
                Mail::to($mailData->toEmail)->send(new MailHelper($mailData));
            }catch(ConnectException $e){}
        }
        return json_encode(array('status'=>'success','msg'=>'ok','id'=>$announcement->id,'is_update'=>$is_update));
    }
    public function uploadkyc(Request $request){
        $id=$request->input('id');
        $userid=$request->input('userid');
        //$file=str_replace('data:image/png;base64,','',$request->input('file'));
        $file=$request->file('file')->store('upload/avatar/kyc');
        $toemail=config('mail.from.address');
        $user=User::find($userid);
        $fromemail=$user->email;
        $token=Crypt::encryptString("{$toemail}###SUPERADMIN");
        $body="The User sent a KYC photo.<br>Please check admin panel(<a href=\"http://www.gtabu.com/admin/login?token={$token}\">aquí</a>).";
        AnnouncementState::create([
            'userid'=>$userid,
            'adid'=>$id,
            'kind'=>4,
            'params'=>'',
            'body'=>$file,
            'fromemail'=>$fromemail,
            'toemail'=>$toemail,
            'created_by'=>Auth::id(),
            'updated_by'=>Auth::id(),
            'created_at'=>date('Y-m-d H:i:s'),
            'updated_at'=>date('Y-m-d H:i:s'),
        ]);

        $ann=Announcement::find($id);
        $ann->stage=4;
        $ann->updated_by=Auth::id();
        $ann->updated_at=date('Y-m-d H:i:s');
        $ann->save();

        $mailData = new MailData();
        $mailData->template='temps.common';
        $mailData->fromEmail = $fromemail;
        $mailData->userName = 'Gtubu Support';
        $mailData->toEmail = $toemail;
        $mailData->subject = 'KYC photo arrived';
        $mailData->mailType = 'MAGIC_LINK_TYPE';
        $mailData->content = $body;
        Mail::to($mailData->toEmail)->send(new MailHelper($mailData));

        $mailData = new MailData();
        $mailData->template='temps.common';
        $mailData->fromEmail = $toemail;
        $mailData->userName = 'Gtubu Support';
        $mailData->toEmail = $fromemail;
        $mailData->subject = 'KYC photo uploaded';
        $mailData->mailType = 'MAGIC_LINK_TYPE';
        $mailData->content = 'Su fotografía se encuentra en revisión, espere nuestra respuesta de confirmación, si no le llega el correo no olvide buscar en su bandeja de correo no deseado.';
        Mail::to($mailData->toEmail)->send(new MailHelper($mailData));
        
        return json_encode(array('status'=>'success','msg'=>'ok'));
    }
    public function activeAd(Request $request){
        $ann=Announcement::find($request->input('id'));
        $ann->active=$request->input('active')=='true'?1:0;
        $ann->save();
        return json_encode(array('status'=>'success','msg'=>'ok'));
    }
    public function deleteAd(Request $request){
        Announcement::find($request->input('id'))->delete();
        //delete related uploading files here later!!!
        return json_encode(array('status'=>'success','msg'=>'ok'));
    }
    public function validateAdsTitle(Request $request){
        $res=true;
        if(Announcement::where('title',$request->input('title'))->count())$res=false;
        //delete related uploading files here later!!!
        return json_encode(array('status'=>'success','valid'=>$res));
    }
    public function attachFile(Request $request){
        $res=json_encode(array('msg'=>'error'));
        if($request->hasfile('file') && $request->input('id')){
            $res=FileUtil::attachFile($request->file('file'),$request->input('kind'),$request->input('id'));
        }
		exit($res);
    }
    public function download(Request $request)
    {
        //return response()->download(storage_path("app/{$request->route('path1')}/{$request->route('path2')}/{$request->route('filename')}"));
        $filename=$request->route('filename');
        $path = "{$request->route('path1')}/{$request->route('path2')}/{$filename}";
        //$ext = pathinfo($filename, PATHINFO_EXTENSION);
        $type = Storage::mimeType($path);
        return response()->make(file_get_contents(storage_path("app/{$path}")), 200, [
            'Content-Type' => $type,
            'Content-Disposition' => 'inline; filename="' . $filename . '"'
        ]);
    }
    public function setAvatar(Request $request){
        $user=User::find($request->input('id'));
        $path=$request->file('avatar')->store('upload/avatar');
        $user->avatar=$path;
        $user->save();
        exit(json_encode(array('msg'=>'ok')));
    }
    public function updateProfile(Request $request){
        $user=User::find($request->input('id'));
        $user->firstName=$request->input('firstName');
        //$user->lastName=$request->input('lastName');
        $user->ac_email=$request->input('ac_email');
        $user->ac_phone=$request->input('ac_phone');
        $user->ac_address01=$request->input('ac_address01');
        //$user->ac_address02=$request->input('ac_address02');
        //$user->ac_zipcode=$request->input('ac_zipcode');
        $user->ac_about=$request->input('ac_about');
        $user->ac_fb=$request->input('ac_fb');
        $user->ac_tw=$request->input('ac_tw');
        $user->ac_lk=$request->input('ac_lk');
        $user->ac_in=$request->input('ac_in');
        //$user->ac_pt=$request->input('ac_pt');
        $user->low_price=$request->input('low_price')>$request->input('high_price')?$request->input('high_price'):$request->input('low_price');
        $user->high_price=$request->input('low_price')>$request->input('high_price')?$request->input('low_price'):$request->input('high_price');
        $user->save();
        exit(json_encode(array('msg'=>'ok')));
    }
    public function updatePassword(Request $request){
        $user=User::find($request->input('id'));
        $user->password=Hash::make($request->input('password'));
        $user->remember_token=Crypt::encryptString($user->email.'###'.$request->input('password'));  ;
        $user->save();

        $mailData = new MailData();
        $mailData->template='temps.common';
        $mailData->fromEmail = config('mail.from.address');
        $mailData->userName = 'Gtubu Support';
        $mailData->toEmail = $user->email;
        $mailData->subject = 'Password reset';
        $mailData->mailType = 'MAGIC_LINK_TYPE';
        $mailData->content = "new password is: ".$request->input('password');
        Mail::to($mailData->toEmail)->send(new MailHelper($mailData));

        exit(json_encode(array('msg'=>'ok')));
    }
    public function saveCreditPlanPayment(Request $request){
        $userid=$request->input('userid');
        $plans=$request->input('plans');
        $amount=$request->input('amount');
        $method=$request->input('method');
        $adid=$request->input('adid');
        $id=CreditHistory::firstOrCreate(array(
            'adid'=>$adid,
            'userid'=>$userid,
            'plans'=>$plans,
            'amount'=>$amount,
            'method'=>$method,
            'created_at'=>date('Y-m-d H:i:s'),
            'updated_at'=>date('Y-m-d H:i:s'),
        ));
        exit(json_encode(array('msg'=>'ok','id'=>$id)));
    }
    public function setDiscoveryImage(Request $request){
        FileUtil::setFlag($request->input('id'),1);
        return json_encode(array('status'=>'success','msg'=>'ok'));
    }
}
