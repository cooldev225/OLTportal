<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Card extends Model
{
    protected $fillable = ['olt_id','slot','type','port','status','created_by','updated_by','created_at','updated_at'];
}
