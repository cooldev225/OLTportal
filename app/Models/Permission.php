<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Permission extends Model
{
    protected $fillable = ['role_id','page_id','action','created_by','updated_by','created_at','updated_at'];
}
