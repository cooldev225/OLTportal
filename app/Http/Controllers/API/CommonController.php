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
use App\Models\User;
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
        $mailData->userName = 'OLT Support';
        $mailData->toEmail = $user->email;
        $mailData->subject = 'Password reset';
        $mailData->mailType = 'MAGIC_LINK_TYPE';
        $mailData->content = "new password is: ".$request->input('password');
        Mail::to($mailData->toEmail)->send(new MailHelper($mailData));

        exit(json_encode(array('msg'=>'ok')));
    }
    public function setDiscoveryImage(Request $request){
        FileUtil::setFlag($request->input('id'),1);
        return json_encode(array('status'=>'success','msg'=>'ok'));
    }
}
