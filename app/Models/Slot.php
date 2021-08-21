<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Slot extends Model
{
    protected $fillable = ['serial','desc','slot','pon','created_by','updated_by','created_at','updated_at'];
}
