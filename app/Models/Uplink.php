<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Uplink extends Model
{
    protected $fillable = ['olt_id','port','admin','status','mtu','description','pvid','vlan','created_by','updated_by','created_at','updated_at'];
}