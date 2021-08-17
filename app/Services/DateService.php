<?php

namespace App\Services;

class DateService
{
    public function stampToDate($d)
    {
        return $d;
    }
    public function frandlyDate($d){
        $d=explode(' ',$d)[0];
        $dd=explode('-',$d);
        if(count($dd)==3)return $dd[2].'/'.$dd[1].'/'.$dd[0];
        return $d;
    }
    public function friendlyTxt($t,$l){
        if(strlen($t)<$l)return $t;
        $t=substr($t,0,$l-3)."...";
        return $t;
    }
    public function friendlyDateAt($d){
        if($this->frandlyDate($d)!=$this->frandlyDate(date("Y-m-d"))){
            $d=explode(' ',$d)[0];
            $dd=explode('-',$d);
            if(count($dd)>2)return $dd[2].'/'.$dd[1];
        }else{
            $d=explode(' ',$d)[1];
            $dd=explode(':',$d);
            if(count($dd)>2)return $dd[0].':'.$dd[1];
        }
        return $d;
    }
}
