<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Contracts\Encryption\DecryptException;
use Illuminate\Support\Facades\Crypt;
use Stevebauman\Location\Facades\Location;
use Illuminate\Support\Facades\Auth;

use App\Models\Page;
use App\Models\Permission;
class RoleController extends Controller
{
    public function __construct()
    {
        if (!Auth::check()) return view('frontend.auth.login', ['page_title' => 'Login']);
    }
    public function index(Request $request)
    {
        return view('frontend.role',[
//            'announcements'=>$anns
        ]);
    }
    public function getDataTable(Request $request){
        $query=Page::select();
        $res=array();
        $res['recordsTotal']=$query->count();
        $res['start']=$request->input('start');
        $res['length']=$request->input('length');
        
        $res['recordsFiltered']=$query->count();
        $res['data']=$query
            ->skip($res['start'])
            ->take($res['length'])
            ->get();
		for($i=0;$i<count($res['data']);$i++) {
            $res['data'][$i]['num']=$res['data'][$i]['id'];
            $res['data'][$i]['read']=Permission::where('role_id',$request->input('role'))->where('page_id',$res['data'][$i]['id'])->where('action',0)->count()?1:0;
            $res['data'][$i]['write']=Permission::where('role_id',$request->input('role'))->where('page_id',$res['data'][$i]['id'])->where('action',1)->count()?1:0;
            $res['data'][$i]['create']=Permission::where('role_id',$request->input('role'))->where('page_id',$res['data'][$i]['id'])->where('action',2)->count()?1:0;
            $res['data'][$i]['delete']=Permission::where('role_id',$request->input('role'))->where('page_id',$res['data'][$i]['id'])->where('action',3)->count()?1:0;
		}
        return $res;
    }
    public function savePermission(Request $request){
        $row=Permission::where('page_id',$request->input('page_id'))
                ->where('role_id',$request->input('role_id'))
                ->where('action',$request->input('action_id'))->delete();
        if($request->input('action_val')){
            $row=new Permission;
            $row->page_id=$request->input('page_id');
            $row->role_id=$request->input('role_id');
            $row->action=$request->input('action_id');
            $row->save();
        }
        return 'ok';
    }
}
