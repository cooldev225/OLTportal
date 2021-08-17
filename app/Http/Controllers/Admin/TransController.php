<?php
namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\LastLogin;
use Illuminate\Support\Facades\Auth;
use App\Models\Announcement;
use App\Models\CreditHistory;
use App\Models\CreditPlan;
class TransController extends Controller
{
    public function __construct()
    {
    }
    public function index(Request $request)
    {
        return view('backend.trans',[
            
        ]);
    }
    public function getTransDataTable(Request $request){
        $histories=CreditHistory::orderBy('userid')->get();
        $credits=array();
        foreach($histories as $history){
            foreach(explode(',',$history['plans']) as $p){
                $s=explode('.',$p);
                $plan=CreditPlan::find($s[0]);
                $st=count($s)>1?explode(':',explode(';',$s[1])[0])[0]:1;
                $st_=count($s)>1?str_replace(';',', ',$s[1]):' - ';

                $st_hours=count($s)>1?str_replace(';',', ',$s[1]):'01:00';
                
                $st1='am';$st2=$st;
                if($st>12){
                    $st1='pm';$st2=$st-12;
                }
                if($st2<10)$st2='0'.$st2;
                
                $status='Active';
                $starr=explode('-',explode(' ',$history['created_at'])[0]);
                $cumk=mktime(date('H'),0,0,date('m'),date('d'),date('Y'));
                $stmk=mktime($st,0,0,$starr[1],$starr[2],$starr[0]);
                $enmk=$stmk+60*60*$plan['times'];
                $cu_stmk=mktime($st,0,0,date('m'),date('d'),date('Y'));
                $cu_enmk=$cu_stmk+60*60*$plan['times'];
                $la_stmk=$stmk+60*60*24*$plan['days'];
                $la_enmk=$la_stmk+60*60*$plan['times'];
                if($la_enmk<$cumk)$status="Expired";
                $credits[]=array(
                    //'history'=>$history,
                    //'plan'=>$plan,
                    'fullName'=>$history->user->fullName(),
                    'username'=>$history->user->username,
                    'email'=>$history->user->email,
                    'country'=>$history->user->Country()->name,
                    'name'=>$plan->name,
                    'times'=>$plan->times,
                    'start_date'=>date("m/d/Y",$stmk),
                    'start_hours'=>$st_hours,
                    'status'=>$status,
                    'amount'=>$plan->credits,
                    'cumk'=>$cumk,//date("Y-m-d H:i:s",$cumk),
                    'stmk'=>$stmk,//date("Y-m-d H:i:s",$stmk),
                    'enmk'=>$enmk,//date("Y-m-d H:i:s",$enmk),
                    'cu_stmk'=>$cu_stmk,//date("Y-m-d H:i:s",$cu_stmk),
                    'cu_enmk'=>$cu_enmk,//date("Y-m-d H:i:s",$cu_enmk),
                    'la_stmk'=>$la_stmk,//date("Y-m-d H:i:s",$la_stmk),
                    'la_enmk'=>$la_enmk,//date("Y-m-d H:i:s",$la_enmk),
                );
            }
        }

        $query=User::select()->where('is_admin',0);
        $rows=$query->get();
        $params['pagination']['total']=count($rows);
        $params['pagination']['page']=$request->input('pagination.page');
        $params['pagination']['perpage']=$request->input('pagination.perpage');
		$params['pagination']['pages']=round($params['pagination']['total']/$params['pagination']['perpage'])+($params['pagination']['total']%$params['pagination']['perpage']<5?1:0);
        $params['sort']['field']=$request->input('sort.field');
        $params['sort']['sort']=$request->input('sort.sort');
        if(
            count($rows)&&isset($params['sort']['field'])&&isset($params['sort']['sort'])&&(
                $params['sort']['field']=='username'||
                $params['sort']['field']=='email'||
                $params['sort']['field']=='created_at'))
        {
            $query=$query->orderBy("{$params['sort']['field']}","{$params['sort']['sort']}");
        }
        $res['data']=$credits;/*$query
            ->skip(($params['pagination']['page']-1)*$params['pagination']['perpage'])
            ->take($params['pagination']['perpage'])
            ->get();*/
        $res['meta']=$params['pagination'];
        return $res;
    }
}
