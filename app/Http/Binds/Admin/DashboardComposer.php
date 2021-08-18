<?php

namespace App\Http\Binds\Admin;

use Illuminate\View\View;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Util\DbUtil;
use Illuminate\Support\Facades\Cookie;

use App\Models\National;
use App\Models\User;
class DashboardComposer
{
    public function __construct()
    {
        // Dependencies automatically resolved by service container...
    }
    public function compose(View $view)
    {
        $_currentUrl = str_replace(URL::to('/').'/', '', url()->current());
        $currentUrl = ucfirst($_currentUrl);
        $view->with('_currentUrl', $_currentUrl);
        $view->with('currentUrl', $currentUrl);

        if(($notification=DbUtil::getDevAlert())!='')$view->with('notification', $notification);
        $view->with('users_total',User::where('is_admin',0)->count());
        $view->with('users_valid',User::where('is_admin',0)->where('validate','>',0)->count());

        if(request()->get('lang')){
            app()->setLocale(request()->get('lang'));
            Cookie::queue(Cookie::make('lang', request()->get('lang'), 200));
        }else if(request()->cookie('lang')){//Cookie::get('name')
            app()->setLocale(request()->cookie('lang'));
        }else{
            Cookie::queue(Cookie::make('lang', app()->getLocale(), 200));
        }
        $lang=str_replace('_', '-', app()->getLocale());
        $language_lab=explode(",","en,br");
        $language_img=explode(",","226-united-states.svg,011-brazil.svg");
        $language_txt=explode(",","English,Brasil");
        $view->with('lang', $lang);
        $view->with('language_lab', $language_lab);
        $view->with('language_img', $language_img);
        $view->with('language_txt', $language_txt);
    }
}
