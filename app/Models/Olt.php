<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Olt extends Model
{
    protected $fillable = ['name','description','created_by','updated_by','created_at','updated_at'];
}