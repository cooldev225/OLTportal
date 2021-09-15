<?php

namespace App\Models;
use App\Models\Billing;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;
class Olt extends Model
{
    protected $fillable = ['name','description','created_by','updated_by','created_at','updated_at'];
    public function Expire()
    {
        if(Auth::id()){
            $query=Billing::select()->where('userid',Auth::id())->where('olt_id',$this->id)->orderBy('created_at','asc');
            if(!$query->count())return 0;
            $t=0;
            foreach($query->get() as $res) {
                $d=explode('-',explode(' ',explode('T',$res['updated_at'])[0])[0]);
                $ct=mktime(0,0,0,intval($d[1]),intval($d[2]),$d[0]);
                $t=($ct>$t?$ct:$t)+($res['days']-1)*86400;
            }
            $n=mktime(0,0,0,date('n'),date('j'),date('Y'));
            return ($t-$n)/86400;
        }
        return 0;
    }
}