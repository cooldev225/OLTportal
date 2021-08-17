<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AnnouncementState extends Model
{
    protected $fillable = [
        'id','userid', 'adid', 'fromemail', 'toemail', 'kind', 'params',
        'body','created_by','updated_by','created_at','updated_at'
    ];
}