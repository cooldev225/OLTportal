<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Category;
use App\Models\Country;
use App\Models\State;
use App\Models\City;
use App\Models\AttachFile;
use App\Models\AnnouncementView;
class Announcement extends Model
{
    protected $fillable = [
        'id','userid', 'title', 'category', 'state', 'city', 'street', 'description','created_by','updated_by'
    ];
    public function user()
    {
        return $this->belongsTo(User::class,'userid');
    }
    public function category_name()
    {
        return $this->belongsTo(Category::class,'category');
    }
    public function national()
    {
        $code=$this->user->national;
        return Country::where('iso_code2',$code)->first();
    }
    public function state_name()
    {
        return $this->belongsTo(State::class,'state');
    }
    public function city_name()
    {
        return $this->belongsTo(City::class,'city');
    }
    public function address()
    {
        return $this->street.($this->street==''?'':', ').$this->state_name->name." ".$this->city_name->name;
    }
    public function DiscoveryImage()
    {
        $file=AttachFile::where('table_kind',0)->where('table_id',$this->id)->first();
        if($file==null)return '';
        $body=base64_encode(file_get_contents(storage_path("app/{$file->path}")));
        return $body;
    }
    public function Views(){
        return AnnouncementView::where('adid',$this->id)->count();
    }
}
