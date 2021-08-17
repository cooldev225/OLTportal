<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LastLogin extends Model
{
    protected $table = 'last_login';
    public $timestamps = false;
}
