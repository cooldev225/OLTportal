<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    protected $fillable = ['name','url','description','created_by','updated_by','created_at','updated_at'];
}
