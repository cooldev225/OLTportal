<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OnuType extends Model
{
    protected $table = 'onu_types';
    protected $fillable = ['olt_id','name','value','description','created_by','updated_by','created_at','updated_at'];
}