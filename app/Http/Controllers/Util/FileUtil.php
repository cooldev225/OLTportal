<?php

namespace App\Http\Controllers\Util;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Models\AttachFile;
use Illuminate\Support\Facades\File;
class FileUtil extends Controller{
    public function uploadFile(Request $request){
        $res="error";
        if($request->hasfile('file')){
            $path='upload/tinymce';
            //@mkdir($path, 0777, true);
            $path=$request->file('file')->store($path);
            $res="ok";
        }
        $res=array('msg'=>$res,'location'=>'/v1/api/downloadFile?path='.$path);
		exit(json_encode($res));
    }
    public function downloadFile(Request $request){
        return response()->download(storage_path("app/".$request->input('path')));
    }
    
    public function arrayToJson(Request $request){
        $curl = curl_init();

        curl_setopt_array($curl, array(
          CURLOPT_URL => 'http://upsite.design/upsite_essential_files/api/debtor/debtor.show.php',
          CURLOPT_RETURNTRANSFER => true,
          CURLOPT_ENCODING => '',
          CURLOPT_MAXREDIRS => 10,
          CURLOPT_TIMEOUT => 0,
          CURLOPT_FOLLOWLOCATION => true,
          CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
          CURLOPT_CUSTOMREQUEST => 'GET',
        ));
        
        $response = curl_exec($curl);
        curl_close($curl);
        $response=str_replace(" ","",str_replace("<pre>","",str_replace("</pre>","",$response)));
        $res="";
        foreach(explode("\n",$response) as $line){
            if($line=='')continue;
            $arr=explode('=>',$line);
            if(count($arr)>1)$line="\"".substr($arr[0],1,strlen($arr[0])-2)."\":".($arr[1]=='Array'?'':"\"".$arr[1]."\",");
            if($line=='(')$line='{';
            if($line==')')$line='},';
            $res.=$line;
        }
        $response=str_replace(",}","}",str_replace("Array","",str_replace("\n","",substr($res,0,strlen($res)-1))));
        header("Content-type: application/json");
        exit ($response);
    }

    public static function attachFile($file,$kind,$id){
        $path='upload/attach_business';
        //@mkdir($path, 0777, true);
        $path=$file->store($path);
        $row=new AttachFile;
        $row->table_kind=$kind;
        $row->table_id=$id;
        $row->filename=$file->getClientOriginalName();
        $row->path=$path;
        $row->body='';
        $row->flag=AttachFile::where('table_kind',$kind)->where('table_id',$id)->count()>0?0:1;
        $row->created_by=Auth::id();
        $row->updated_by=Auth::id();
        $row->save();
        return json_encode(array('msg'=>'ok','id'=>$row->id,'flag'=>$row->flag));

    }
    public static function attachRemoveFile($id){
        $row=AttachFile::find($id);
        if($row->flag==0)
            Storage::delete($row->path);
        $row->delete();
    }
    public static function setFlag($id,$v){
        $file=AttachFile::find($id);
        $file->flag=$v;
        $file->save();
        return 'ok';
    }
}
