<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AnnouncementView extends Model
{
    protected $fillable = [
        'id', 'adid', 'views','created_by','updated_by','created_at','updated_at'
    ];
}