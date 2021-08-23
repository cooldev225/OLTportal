<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Vlan extends Model
{
    protected $fillable = ['olt_id','vlan_id','description','created_by','updated_by','created_at','updated_at'];
}