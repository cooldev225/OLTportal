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
use App\Models\Slot;
use App\Models\Onu;
class OnuController extends Controller
{
    public function __construct()
    {
        if (!Auth::check()) return view('frontend.auth.login', ['page_title' => 'Login']);
    }
    public function index(Request $request)
    {
        return view('frontend.onu',[
//            'announcements'=>$anns
        ]);
    }
    public function getDataTable(Request $request){
        $query=Onu::select('onus.*','slots.serial','slots.serial','slots.pon','slots.slot as slots','slots.created_at as slot_created_at')
        ->leftJoin('slots','slots.id','=','onus.slot');
        if($request->input('status')!=null&&$request->input('status')!=''){
            $query=$query->where('status',$request->input('status'));
        }
        $res=array();
        $res['recordsTotal']=$query->get()->count();
        $res['start']=$request->input('start');
        $res['length']=$request->input('length');
        
        $res['search']['value']=$request->input('search.value');
        $res['search']['regex']=$request->input('search.regex');
        if($res['search']['value']!=''){
            $query=$query->whereRaw("
                name like '%".$res['search']['value']."%' or 
                type like '%".$res['search']['value']."%' or 
                vlan like '%".$res['search']['value']."%'");
        }
        if($request->input('order.0.column')){
            $query=$query->orderBy($request->input('columns.'.$request->input('order.0.column').'.data'),$request->input('order.0.dir')=='asc'?'asc':'desc');
        }
        $res['recordsFiltered']=$query->get()->count();
        $res['data']=$query
            ->skip($res['start'])
            ->take($res['length'])
            ->get();
		for($i=0;$i<count($res['data']);$i++) {
            //$res['data'][$i]['slot']='columns.'.$request->input('order.0.column').'data';
		}
        return $res;
    }
    public function editOnu(Request $request)
    {
        $id=$request->route('id');
        return view('frontend.onu_edit',[
            'onu'=>Onu::find($id),
            'slot'=>Slot::find(Onu::find($id)->slot),
        ]);
    }
}
