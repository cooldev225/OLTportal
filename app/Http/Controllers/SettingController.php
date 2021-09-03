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
use App\Models\Card;
use App\Models\Pon;
use App\Models\Uplink;
use App\Models\Vlan;
class SettingController extends Controller
{
    public function __construct()
    {
        if (!Auth::check()) return view('frontend.auth.login', ['page_title' => 'Login']);
    }
    public function index(Request $request)
    {
        $a=$request->input('a');
        if($a==null||$a=='')$a=0;
        return view('frontend.setting',[
            'active'=>$a
        ]);
    }
    public function getCardDataTable(Request $request){
        $query=Card::select();
        $res=array();
        $res['recordsTotal']=$query->count();
        $res['start']=$request->input('start');
        $res['length']=$request->input('length');
        
        $res['search']['value']=$request->input('search.value');
        $res['search']['regex']=$request->input('search.regex');
        if($res['search']['value']!=''){
            $query=$query->whereRaw("
                type like '%".$res['search']['value']."%' or 
                port like '%".$res['search']['value']."%'");
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
            //$res['data'][$i]['slot']='columns.'.$request->input('order.0.column').'data';
		}
        return $res;
    }
    public function getPonDataTable(Request $request){
        $query=Pon::select();
        $res=array();
        $res['recordsTotal']=$query->count();
        $res['start']=$request->input('start');
        $res['length']=$request->input('length');
        
        $res['search']['value']=$request->input('search.value');
        $res['search']['regex']=$request->input('search.regex');
        if($res['search']['value']!=''){
            $query=$query->whereRaw("
                admin like '%".$res['search']['value']."%' or 
                onu like '%".$res['search']['value']."%'");
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
            //$res['data'][$i]['slot']='columns.'.$request->input('order.0.column').'data';
		}
        return $res;
    }
    public function getUplinkDataTable(Request $request){
        $query=Uplink::select();
        $res=array();
        $res['recordsTotal']=$query->count();
        $res['start']=$request->input('start');
        $res['length']=$request->input('length');
        
        $res['search']['value']=$request->input('search.value');
        $res['search']['regex']=$request->input('search.regex');
        if($res['search']['value']!=''){
            $query=$query->whereRaw("
                admin like '%".$res['search']['value']."%' or 
                mtu like '%".$res['search']['value']."%'");
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
            //$res['data'][$i]['slot']='columns.'.$request->input('order.0.column').'data';
		}
        return $res;
    }
    public function getVlanDataTable(Request $request){
        $query=Vlan::select();
        $res=array();
        $res['recordsTotal']=$query->count();
        $res['start']=$request->input('start');
        $res['length']=$request->input('length');
        
        $res['search']['value']=$request->input('search.value');
        $res['search']['regex']=$request->input('search.regex');
        if($res['search']['value']!=''){
            $query=$query->whereRaw("
                vlan_id like '%".$res['search']['value']."%' or 
                description like '%".$res['search']['value']."%'");
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
            //$res['data'][$i]['slot']='columns.'.$request->input('order.0.column').'data';
		}
        return $res;
    }
}
