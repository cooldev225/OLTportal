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
use App\Models\User;
use App\Models\LastLogin;
class UserController extends Controller
{
    public function __construct()
    {
        if (!Auth::check()) return view('frontend.auth.login', ['page_title' => 'Login']);
    }
    public function index(Request $request)
    {
        return view('frontend.user',[
//            'announcements'=>$anns
        ]);
    }
    public function getDataTable(Request $request){
        $query=User::select();
        $res=array();
        $res['recordsTotal']=$query->count();
        $res['start']=$request->input('start');
        $res['length']=$request->input('length');
        
        $res['search']['value']=$request->input('search.value');
        $res['search']['regex']=$request->input('search.regex');
        if($res['search']['value']!=''){
            $query=$query->whereRaw("
                username like '%".$res['search']['value']."%' or 
                email like '%".$res['search']['value']."%' or 
                firstName like '%".$res['search']['value']."%'");
        }
        if($request->input('order.0.column')){
            $query=$query->orderBy($request->input('columns.'.$request->input('order.0.column').'.data'),$request->input('order.0.dir')=='asc'?'asc':'desc');
        }
        $res['recordsFiltered']=$query->count();
        $res['data']=$query
            ->skip($res['start'])
            ->take($res['length'])
            ->get();
		for($i=0;$i<count($res['data']);$i++) {
            $res['data'][$i]['last_login']=LastLogin::where('userid',$res['data'][$i]['id'])->count()?LastLogin::where('userid',$res['data'][$i]['id'])->orderBy('time','desc')->get()[0]['time']:'';
		}
        return $res;
    }
    public function editUser(Request $request)
    {
        $id=$request->route('id');
        return view('frontend.user_edit',[
            'user'=>User::find($id),
        ]);
    }
    public function saveUser(Request $request){
        $id=$request->input('id');
        $row=$id>0?User::find($id):new User;
        $row->email=$request->input('email');
        $row->username=$request->input('username');
        $row->firstName=$request->input('firstName');
        $row->validate=$request->input('validate');
        $row->is_admin=$request->input('is_admin');
        $row->ac_about=$request->input('ac_about');
        if($request->file('avatar')!=null){
            $path=$request->file('avatar')->store('upload/avatar');
            $row->avatar=$path;
        }
        $row->updated_at=date('Y-m-d H:i:s');
        $row->save();
        return $row->id;
    }
}
