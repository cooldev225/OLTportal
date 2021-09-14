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
class WaitingController extends Controller
{
    public function __construct()
    {
        if (!Auth::check()) return view('frontend.auth.login', ['page_title' => 'Login']);
    }
    public function index(Request $request)
    {
        return view('frontend.waiting',[
//            'announcements'=>$anns
        ]);
    }
    public function getDataTable(Request $request){
        $query=Slot::select()->where('olt_id',$request->input('olt_id'));
        $res=array();
        $res['recordsTotal']=$query->count();
        $res['start']=$request->input('start');
        $res['length']=$request->input('length');
        
        $res['search']['value']=$request->input('search.value');
        $res['search']['regex']=$request->input('search.regex');
        if($res['search']['value']!=''){
            $query=$query->whereRaw("
                serial like '%".$res['search']['value']."%' or 
                `desc` like '%".$res['search']['value']."%' or 
                slot like '%".$res['search']['value']."%' or
                pon like '%".$res['search']['value']."%'");
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
    public function saveSlot(Request $request){
        $id=$request->input('id');
        $row=$id>0?Slot::find($id):new Slot;
        $row->olt_id=$request->input('olt_id');
        $row->serial=$request->input('serial');
        $row->desc=$request->input('desc');
        $row->slot=$request->input('slot');
        $row->pon=$request->input('pon');
        $row->updated_at=date('Y-m-d H:i:s');
        $row->save();
        return $row->id;
    }
    public function deleteSlot(Request $request){
        $row=Slot::find($request->input('id'));
        $row->delete();
        $res=array('msg'=>'ok');
		exit(json_encode($res));
    }
}
