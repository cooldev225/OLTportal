<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pon extends Model
{
    protected $fillable = ['olt_id','port','admin','status','onu','description','power','created_by','updated_by','created_at','updated_at'];
}