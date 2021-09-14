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
use App\Models\Olt;
use App\Models\OnuType;
use App\Models\Billing;
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
    public function getOnutypeDataTable(Request $request){
        $query=OnuType::select();
        $res=array();
        $res['recordsTotal']=$query->count();
        $res['start']=$request->input('start');
        $res['length']=$request->input('length');
        
        $res['search']['value']=$request->input('search.value');
        $res['search']['regex']=$request->input('search.regex');
        if($res['search']['value']!=''){
            $query=$query->whereRaw("
                name like '%".$res['search']['value']."%' or 
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
    public function getBillingDataTable(Request $request){
        $query=Billing::select()->where('userid',Auth::id())->where('olt_id',$request->input('olt_id'))->orderBy('created_at','asc');
        $res=array();
        $res['recordsTotal']=$query->count();
        $res['start']=$request->input('start');
        $res['length']=$request->input('length');
        
        $res['search']['value']=$request->input('search.value');
        $res['search']['regex']=$request->input('search.regex');
        if($res['search']['value']!=''){
            $query=$query->whereRaw("
                name like '%".$res['search']['value']."%' or 
                description like '%".$res['search']['value']."%'");
        }
        if($request->input('order.0.column')){
            //$query=$query->orderBy($request->input('columns.'.$request->input('order.0.column').'.data'),$request->input('order.0.dir')=='asc'?'asc':'desc');
        }
        $res['recordsFiltered']=$query->count();
        $res['data']=$query
            ->skip($res['start'])
            ->take($res['length'])
            ->get();
        $t=0;
		for($i=0;$i<count($res['data']);$i++) {
            //if($res['data'][$i]['status']==0){$res['data'][$i]['expire']='';continue;}
            $d=explode('-',explode(' ',explode('T',$res['data'][$i]['updated_at'])[0])[0]);
            $ct=mktime(0,0,0,intval($d[1]),intval($d[2]),$d[0]);
            $t=($ct>$t?$ct:$t)+($res['data'][$i]['days']-1)*86400;
            $res['data'][$i]['expire']=date('Y-m-d',$t);
            $res['data'][$i]['createdat']=date('Y-m-d',$ct);
            $res['data'][$i]['olt']=$res['data'][$i]->Olt->name;
		}
        return $res;
    }
    public function getOltDataTable(Request $request){
        $query=Olt::select();
        $res=array();
        $res['recordsTotal']=$query->count();
        $res['start']=$request->input('start');
        $res['length']=$request->input('length');
        
        $res['search']['value']=$request->input('search.value');
        $res['search']['regex']=$request->input('search.regex');
        if($res['search']['value']!=''){
            $query=$query->whereRaw("
                name like '%".$res['search']['value']."%' or 
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

    public function saveOnutype(Request $request){
        $id=$request->input('id');
        $row=$id>0?OnuType::find($id):new OnuType;
        $row->name=$request->input('name');
        $row->updated_at=date('Y-m-d H:i:s');
        $row->save();
        return $row->id;
    }
    public function deleteOnutype(Request $request){
        $row=OnuType::find($request->input('id'));
        $row->delete();
        $res=array('msg'=>'ok');
		exit(json_encode($res));
    }

    public function saveBilling(Request $request){
        $id=$request->input('id');
        $row=$id>0?Billing::find($id):new Billing;
        if($request->input('days')!=null&&$request->input('days')!=''){
            $row->days=$request->input('days');
        }
        if($request->input('status')!=null&&$request->input('status')!=''){
            $row->status=$request->input('status');
        }
        if($request->input('olt_id')!=null&&$request->input('olt_id')!=''){
            $row->olt_id=$request->input('olt_id');
        }
        if($request->input('userid')!=null&&$request->input('userid')!=''){
            $row->userid=$request->input('userid');
        }
        if(!$id&&$row->userid==0){
            $row->userid=Auth::id();
        }
        $row->updated_at=date('Y-m-d H:i:s');
        $row->save();
        return $row->id;
    }
    public function deleteBilling(Request $request){
        $row=Billing::find($request->input('id'));
        $row->delete();
        $res=array('msg'=>'ok');
		exit(json_encode($res));
    }

    public function saveCard(Request $request){
        $id=$request->input('id');
        $row=$id>0?Card::find($id):new Card;
        if($request->input('slot')!=null&&$request->input('slot')!=''){
            $row->slot=$request->input('slot');
        }if($request->input('type')!=null&&$request->input('type')!=''){
            $row->type=$request->input('type');
        }if($request->input('port')!=null&&$request->input('port')!=''){
            $row->port=$request->input('port');
        }if($request->input('olt_id')!=null&&$request->input('olt_id')!=''){
            $row->olt_id=$request->input('olt_id');
        }
        $row->updated_at=date('Y-m-d H:i:s');
        $row->save();
        return $row->id;
    }
    public function deleteCard(Request $request){
        $row=Card::find($request->input('id'));
        $row->delete();
        $res=array('msg'=>'ok');
		exit(json_encode($res));
    }
    public function actionCard(Request $request){
        
    }
    public function savePon(Request $request){
        $id=$request->input('id');
        $row=$id>0?Pon::find($id):new Pon;
        if($request->input('port')!=null&&$request->input('port')!=''){
            $row->port=$request->input('port');
        }if($request->input('admin')!=null&&$request->input('admin')!=''){
            $row->admin=$request->input('admin');
        }if($request->input('status')!=null&&$request->input('status')!=''){
            $row->status=$request->input('status');
        }if($request->input('onu')!=null&&$request->input('onu')!=''){
            $row->onu=$request->input('onu');
        }if($request->input('description')!=null&&$request->input('description')!=''){
            $row->description=$request->input('description');
        }if($request->input('power')!=null&&$request->input('power')!=''){
            $row->power=$request->input('power');
        }if($request->input('olt_id')!=null&&$request->input('olt_id')!=''){
            $row->olt_id=$request->input('olt_id');
        }
        $row->updated_at=date('Y-m-d H:i:s');
        $row->save();
        return $row->id;
    }
    public function deletePon(Request $request){
        $row=Pon::find($request->input('id'));
        $row->delete();
        $res=array('msg'=>'ok');
		exit(json_encode($res));
    }
    public function actionPon(Request $request){
        $row=Pon::find($request->input('id'));
        if($request->input('action')=='Disable')$row->admin='Disabled';
        $row->save();
        $res=array('msg'=>'ok');
		exit(json_encode($res));
    }
    public function saveUplink(Request $request){
        $id=$request->input('id');
        $row=$id>0?Uplink::find($id):new Uplink;
        if($request->input('port')!=null&&$request->input('port')!=''){
            $row->port=$request->input('port');
        }if($request->input('admin')!=null&&$request->input('admin')!=''){
            $row->admin=$request->input('admin');
        }if($request->input('status')!=null&&$request->input('status')!=''){
            $row->status=$request->input('status');
        }if($request->input('mtu')!=null&&$request->input('mtu')!=''){
            $row->mtu=$request->input('mtu');
        }if($request->input('description')!=null&&$request->input('description')!=''){
            $row->description=$request->input('description');
        }if($request->input('pvid')!=null&&$request->input('pvid')!=''){
            $row->pvid=$request->input('pvid');
        }if($request->input('vlan')!=null&&$request->input('vlan')!=''){
            $row->vlan=$request->input('vlan');
        }if($request->input('olt_id')!=null&&$request->input('olt_id')!=''){
            $row->olt_id=$request->input('olt_id');
        }
        $row->updated_at=date('Y-m-d H:i:s');
        $row->save();
        return $row->id;
    }
    public function deleteUplink(Request $request){
        $row=Uplink::find($request->input('id'));
        $row->delete();
        $res=array('msg'=>'ok');
		exit(json_encode($res));
    }
    public function actionUplink(Request $request){
        $row=Uplink::find($request->input('id'));
        if($request->input('action')=='Disable')$row->admin='Disabled';
        $row->save();
        $res=array('msg'=>'ok');
		exit(json_encode($res));
    }
    public function saveVlan(Request $request){
        $id=$request->input('id');
        $row=$id>0?Vlan::find($id):new Vlan;
        if($request->input('vlan_id')!=null&&$request->input('vlan_id')!=''){
            $row->vlan_id=$request->input('vlan_id');
        }if($request->input('description')!=null&&$request->input('description')!=''){
            $row->description=$request->input('description');
        }if($request->input('olt_id')!=null&&$request->input('olt_id')!=''){
            $row->olt_id=$request->input('olt_id');
        }
        $row->updated_at=date('Y-m-d H:i:s');
        $row->save();
        return $row->id;
    }
    public function deleteVlan(Request $request){
        $row=Vlan::find($request->input('id'));
        $row->delete();
        $res=array('msg'=>'ok');
		exit(json_encode($res));
    }

    public function saveOlt(Request $request){
        $id=$request->input('id');
        $row=$id>0?Olt::find($id):new Olt;
        if($request->input('name')!=null&&$request->input('name')!=''){
            $row->name=$request->input('name');
        }if($request->input('ip')!=null&&$request->input('ip')!=''){
            $row->ip=$request->input('ip');
        }if($request->input('telnet_port')!=null&&$request->input('telnet_port')!=''){
            $row->telnet_port=$request->input('telnet_port');
        }if($request->input('telnet_username')!=null&&$request->input('telnet_username')!=''){
            $row->telnet_username=$request->input('telnet_username');
        }if($request->input('telnet_password')!=null&&$request->input('telnet_password')!=''){
            $row->telnet_password=$request->input('telnet_password');
        }if($request->input('snmp_r_community')!=null&&$request->input('snmp_r_community')!=''){
            $row->snmp_r_community=$request->input('snmp_r_community');
        }if($request->input('snmp_rw_community')!=null&&$request->input('snmp_rw_community')!=''){
            $row->snmp_rw_community=$request->input('snmp_rw_community');
        }if($request->input('snmp_udp_port')!=null&&$request->input('snmp_udp_port')!=''){
            $row->snmp_udp_port=$request->input('snmp_udp_port');
        }if($request->input('manufacturer')!=null&&$request->input('manufacturer')!=''){
            $row->manufacturer=$request->input('manufacturer');
        }if($request->input('model')!=null&&$request->input('model')!=''){
            $row->model=$request->input('model');
        }if($request->input('version')!=null&&$request->input('version')!=''){
            $row->version=$request->input('version');
        }
        $row->updated_at=date('Y-m-d H:i:s');
        $row->save();
        return $row->id;
    }
    public function deleteOlt(Request $request){
        $row=Olt::find($request->input('id'));
        $row->delete();
        $res=array('msg'=>'ok');
		exit(json_encode($res));
    }
}
