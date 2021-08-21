<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Onu extends Model
{
    protected $fillable = ['name','status','onu','type','signal1','signal2','ppp1','ppp2','vlan','created_by','updated_by','created_at','updated_at'];
}
