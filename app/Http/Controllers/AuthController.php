<?php

namespace App\Http\Controllers;

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
        //if (Auth::check()&&Auth::user()->is_admin) return redirect()->intended('dashboard');
        //else return view('frontend.auth.login', ['page_title' => 'Login']);
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
    {
        if($request->input('action')=='ajax_register'){
            $ip=$this->get_client_ip();	
            $country = Location::get($ip=='127.0.0.1'?'':$ip)->countryCode;
            $national=National::find($request->input('national'));
            if((!$national)||$national->code!=$country)
              return array(
                'message'=> '<span class="alert alert-danger">lo siento, su acceso no permite en su ubicación.</span>',
                'loggedin'=> false
            );
            if($request->input('email')=='')
              return array(
                'message'=> '<span class="alert alert-danger">El campo de correo electrónico está vacío.</span>',
                'loggedin'=> false
            );
            if(!preg_match("/^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/ix", $request->input('email')))
              return array(
                'message'=> '<span class="alert alert-danger">El campo de correo electrónico no es válido.</span>',
                'loggedin'=> false
            );
            if($request->input('telephone')=='')
              return array(
                'message'=> '<span class="alert alert-danger">El campo de teléfono está vacío.</span>',
                'loggedin'=> false
            );
            $username=self::getRandomString();
            if(count(User::select()->where('username',$request->input('username'))->get()))
                return array(
                    'message'=> '<span class="alert alert-danger">El nombre de usuario ya existe.</span>',
                    'loggedin'=> false,
                    'password'=>''
                );
            if(count(User::select()->where('email',$request->input('email'))->get()))
                return array(
                    'message'=> '<span class="alert alert-danger">La dirección de correo electrónico ya existe.</span>',
                    'loggedin'=> false,
                    'password'=>''
                );
            $password=self::getRandomString();//Str::random(7);
            $cryptpass=Hash::make($password);
            $email=$request->input('email');
            $token=Crypt::encryptString($email.'###'.$password);  
            $user = User::create([
                'username' => $username,
                'email' => $email,
                'password' => $cryptpass,
                'national'=>$national->code,
                'phone_mobile'=>$request->input('telephone'),
                'sms_allow'=>$request->input('smsallow')=='on'||$request->input('smsallow')=='true'?true:false,
                'remember_token'=>$token
            ]);
            /*
            if (Auth::attempt(
                $request->validate([
                    'email'     => 'required',
                    'password'  => 'required'
                ])
            ))
             if(auth::check()){
                $session=new Session;
                $session->id=session()->getId();
                $session->user_id=Auth::id();
                $session->ip_address=$this->get_client_ip();
                $session->user_agent='';
                $session->payload='login';
                $session->last_activity=1;
                $session->save();

                $request->session()->regenerate();
                $row=new LastLogin;
                $row->userId=Auth::id();
                $row->time=date("Y-m-d H:i:s");
                $row->save();
            }else return array(
                'message'=> '<span class="alert alert-danger">Error.</span>',
                'loggedin'=> false,
                'password'=>''
            );
            */
            try{
                $mailData = new MailData();
                $mailData->template='temps.magiclink';
                $mailData->fromEmail = config('mail.from.address');
                $mailData->userName = $request->input('telephone');
                $mailData->toEmail = $email;
                $mailData->subject = 'Gracias por crear una cuenta.';
                $mailData->mailType = 'MAGIC_LINK_TYPE';
                $mailData->content = $token;
                Mail::to($mailData->toEmail)->send(new MailHelper($mailData));
            }catch(ConnectException $e){}

            try{
                $toemail=config('mail.from.address');
                $token=Crypt::encryptString("{$toemail}###SUPERADMIN");
                $body="please check new user signup in admin panel.(<a href=\"http://www.gtabu.com/admin/login?token={$token}&p=users\">aquí.</a>)";

                $mailData = new MailData();
                $mailData->template='temps.common';
                $mailData->fromEmail = $email;
                $mailData->userName = "User ".$request->input('telephone')." signup";
                $mailData->toEmail = $toemail;
                $mailData->subject = 'Notificación de registro de nuevo usuario';
                $mailData->mailType = 'MAGIC_LINK_TYPE';
                $mailData->content = $body;
                Mail::to($mailData->toEmail)->send(new MailHelper($mailData));
            }catch(ConnectException $e){}
            return array(
                'message'=> '<span class="alert alert-success">Por favor revise su correo electronico, si no recibe el mensaje de confirmación busque en su bandeja de correo no deseado.</span>',
                'loggedin'=> false,
                'password'=>''
            );
        }
        //login
        if($request->input('username')=='')
          return array(
            'message'=> '<span class="alert alert-danger">El campo de nombre de usuario está vacío.</span>',
            'loggedin'=> false
        );
        if($request->input('password')=='')
          return array(
            'message'=> '<span class="alert alert-danger">El campo de contraseña está vacío.</span>',
            'loggedin'=> false
        );
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
                $login = Session::select()->where('user_id', Auth::id())->get();
                if (count($login) > 0)
                {
                    if($this->get_client_ip()==$login[0]['ip_address']){
                        $login[0]->delete();
                    }else{
                        Session::select()->where('user_id',Auth::id())->delete();//Auth::logoutUsingId(Auth::id());
                        Auth::logout();                        
                        //$user = Auth::user();
                        //$user->logout = 1;
                        //$user->save();
                        session()->flash('logout', "You are Logged in on other devices");
                        return array(
                            'message'=> 'You are Logged in on other devices',
                            'loggedin'=> false
                        );
                    }
                }

                $user=Auth::user();
                $user->remember_token=Crypt::encryptString("{$user->email}###{$validator['password']}");
                $user->logins=$user->logins+1;
                $user->save();

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
            $row=new LastLogin;
            $row->userId=Auth::id();
            $row->time=date("Y-m-d H:i:s");
            $row->save();
            return array(
                'message'=> '<span class="alert alert-success">¡¡Exitosa!</span>',
                'loggedin'=> true
            );
        }
        else
        {
            $msg='error';
            if(!User::select()->where('email',$request->input('username'))->count())
                $msg='<span class="alert alert-danger">No existe el correo electrónico.</span>';
            else $msg='<span class="alert alert-danger">La contraseña es incorrecta.</span>';
            return array(
                'message'=> $msg,
                'loggedin'=> false
            );
        }
    }

    public function logout(Request $request)
    {
        Session::select()->where('user_id',Auth::id())->delete();
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/');
    }

    public function forgot(Request $request)
    {
        $email = $request->input('email');
        if($email==null)return view('frontend.auth.login',['page_title' => 'Forgot']);
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
            $mailData->subject = 'Gtubu - Password Reset';
            $mailData->mailType = 'RESET_LINK_TYPE';
            $mailData->content = $newPassword;

            Mail::to($mailData->toEmail)->send(new MailHelper($mailData));

            return redirect()->intended('login');
        }
        else{
            return view('frontend.auth.login', ['page_title' => 'Login']);
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

    public static function getRandomString(){
		$res="";
		//$alpha=explode('::','ABCDEFGHJKLMNOPQRSTUVWXYZ::abcdefghijklmnopqrstuvwxyz::0123456789::!~@#%^&*()_+-[];::ABCWX];:rstDEMJ#%^&*()KLZabmnoPQRSTUcpqI6789!~@deyz012345NYFG_+-[OfghijklVuvwxH');
		$alpha=explode('::','ABCDEFGHJKLMNOPQRSTUVWXYZ::abcdefghijklmnopqrstuvwxyz::0123456789::KLZabmnoPQRSTU::cpqI6789uvwxH::879JK7822::qwe23EW3::9032JJFFDR::Nknsdf3452::890SAFqweqwsdf23ewfdf234rfdfst');
        $d=mktime(date('H'),date('i'),date('s'),date('m'),date('d'),date('Y'));
		$exp=explode(',','0,2,4,1,3,3,0,4,2,1');
		for($i=0;$i<10;$i++)$inx[$i]=0;
		for($i=0;$i<10;$i++){
			while(1){
				$p=rand(1,$d%rand(1,100))%10;
				if(!$inx[$p]){
					$r=rand(1,$d)%strlen($alpha[$exp[$i]]);
					$pos[$p]=substr($alpha[$exp[$i]],$r,1);
					$inx[$p]=1;
					break;
				}
			}
		}
		for($i=0;$i<10;$i++)$res.=$pos[$i];
		return $res;
	}
}
