<?php
namespace App\Http\Controllers\Util;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use DB;
use App\Models\CreditHistory;
use App\Models\CreditPlan;
class CreditUtil{    
    public static function getCredits($userid=0){
        $histories=CreditHistory::where('userid',$userid)->orderBy('created_at')->get();
        $credits=array();
        foreach($histories as $history){
            foreach(explode(',',$history['plans']) as $p){
                $s=explode('.',$p);
                $plan=CreditPlan::find($s[0]);
                $st=count($s)>1?explode(':',explode(';',$s[1])[0])[0]:1;
                $st_=count($s)>1?str_replace(';',', ',$s[1]):' - ';
                
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
                    'history'=>$history,
                    'plan'=>$plan,
                    'start_at'=>$st_,
                    'start_at_text'=>$st_,
                    'status'=>$status,
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
        return $credits;
    }
    public static function getTotalCreditCount(){
        $histories=CreditHistory::select()->get();
        $credits=0;
        foreach($histories as $history){
            $credits+=count(explode(',',$history['plans']));
        }
        return $credits;
    }
    public static function getTotalCreditAmount(){
        $histories=CreditHistory::select()->get();
        $credits=0;
        foreach($histories as $history){
            $credits+=$history['amount'];
        }
        return $credits;
    }
}
