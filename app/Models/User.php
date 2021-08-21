<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

use App\Models\RoleUser;
use App\Datas\UserRole;
use App\Models\Country;
use App\Models\State;
use App\Models\City;
class User extends Authenticatable
{
    use Notifiable;
    protected $fillable = ['username','firstName','email','password','national','phone_mobile','sms_allow','remember_token','is_admin'];
    public function roles()
    {
        //return $this->belongsToMany('App\Models\RoleUser','user_id');
    }

    public function fullName()
    {
        return ucfirst($this->firstName).' '.ucfirst($this->lastName);
    }
    public function Country()
    {
        return Country::where('iso_code2',$this->national)->first();
    }
    public function state_name()
    {
        return $this->belongsTo(State::class,'ac_state');
    }
    public function city_name()
    {
        return $this->belongsTo(City::class,'ac_city');
    }
}
