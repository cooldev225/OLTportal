<?php

namespace App\Models;
use App\Models\Olt;
use DB;
use Illuminate\Database\Eloquent\Model;
class Billing extends Model
{
    protected $fillable = ['name','description','created_by','updated_by','created_at','updated_at'];
    public function Olt()
    {
        return $this->belongsTo(Olt::class,'olt_id');
    }
}