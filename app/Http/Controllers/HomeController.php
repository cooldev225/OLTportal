<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Contracts\Encryption\DecryptException;
use Illuminate\Support\Facades\Crypt;
use Stevebauman\Location\Facades\Location;
use Illuminate\Support\Facades\Auth;

use App\Models\Country;
use App\Models\State;
use App\Models\City;
use App\Models\Announcement;
use App\Models\AnnouncementView;
use App\Models\CreditPlan;
use App\Http\Controllers\Util\CreditUtil;
class HomeController extends Controller
{
    public function __construct()
    {
    }
    public function index(Request $request)
    {
        $anns=Announcement::where('stage',5)->get();
        return view('frontend.home',[
            'announcements'=>$anns
        ]);
    }
    public function listing(Request $request)
    {
        $category=$request->input('cat');
        $sort=$request->input('sort');
        $anns=Announcement::where('stage',5);
        if($category!=null&&$category!='')$anns=$anns->where('category',$category);
        else $category=0;//dd($sort);
        if($sort!=null&&$sort!=''){
            if($sort=='views')$anns=$anns->orderBy('views');
        }else $sort='';
        $anns=$anns->get();
        return view('frontend.listing',[
            'announcements'=>$anns,
            'category'=>$category,
            'sort'=>$sort,
        ]);
    }
    public function adview(Request $request)
    {
        $id=$request->route('id');
        //AnnouncementView::firstOrCreate(array('adid'=>$id,'views'=>));
        $ann=Announcement::find($id);
        $ann->views=$ann->views+1;
        $ann->save();
        return view('frontend.listingview',[
            'announcement'=>$ann,
        ]);
    }
    public function ads(Request $request)
    {
        if(!Auth::check()){
            $token=$request->input('token');
            $login="";
            try {
                $login = Crypt::decryptString($token);
            } catch (DecryptException $e) {
                //
            }
            $login=explode('###',$login);
            if(count($login)<2) return redirect()->guest(route('home'));
            $request['email']=$login[0];
            $request['password']=$login[1];
            $logined=false;
            if (Auth::attempt($request->validate([
                'email'     => 'required',
                'password'  => 'required'
            ])))
                if(Auth::check()){
                    $logined=true;
                }

            if(!$logined)return redirect()->guest(route('home'));
        }
        $user=Auth::user();
        $country=Country::where('iso_code2',$user->national)->first();
        //Announcement::where('stage',0)->where('userid',$user->id)->delete();
        $ad_id=$request->input('a');
        return view('frontend.ads',[
            'states'=>State::where('country_id',$country->id)->where('name','!=',$country->name)->orderBy('id')->get(),
            'announcements'=>Announcement::where('userid',$user->id)->get(),
            'user'=>$user,
            'actived_ad'=>$ad_id?Announcement::find($ad_id):null
        ]);
    }
    public function kycupload(Request $request)
    {
        if(!Auth::check()){
            $token=$request->input('token');
            $login="";
            try {
                $login = Crypt::decryptString($token);
            } catch (DecryptException $e) {
                //
            }
            $login=explode('###',$login);
            if(count($login)<2) return redirect()->guest(route('home'));
            $request['email']=$login[0];
            $request['password']=$login[1];
            $logined=false;
            if (Auth::attempt($request->validate([
                'email'     => 'required',
                'password'  => 'required'
            ])))
                if(Auth::check()){
                    $logined=true;
                }

            if(!$logined)return redirect()->guest(route('home'));
        }
        $user=Auth::user();
        return view('frontend.kycupload',[
            'ann'=>$request->input('ann')
        ]);
    }
    public function credit(Request $request){
        if(!Auth::check())
            return redirect()->guest(route('home'));
        $credits=array();
        foreach(CreditPlan::orderBy('groups')->orderBy('credits')->get() as $credit){
            $credits[$credit['groups']][]=$credit;
        }
        return view('frontend.credit',[
            'announcements'=>Announcement::where('userid',Auth::id())->where('stage','=',5)->get(),
            'creditplans'=>$credits,
            'credits'=>CreditUtil::getCredits(Auth::id())
        ]);
    }
    public function profile(Request $request){
        if(!Auth::check())
            return redirect()->guest(route('home'));
        $user=Auth::user();
        $ann=Announcement::where('userid',$user->id);
        if($ann->count()==0)
            return redirect()->guest(route('home'));
        $ann=$ann->get()[0];
        if($user->ac_email==null||$user->ac_email==''){
            $user->ac_email=$user->email;
            $user->save();
        }
        if($user->ac_phone==null||$user->ac_phone==''){
            $user->ac_phone=$user->phone_mobile;
            $user->save();
        }
        if($user->ac_state==0||$user->ac_city==0){
            $user->ac_state=$ann->state;
            $user->ac_city=$ann->city;
            $user->save();
        }
        return view('frontend.profile',[
            'user'=>$user,
        ]);
    }
}
