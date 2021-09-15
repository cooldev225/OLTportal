<?php

namespace App\Http\Binds;

use Illuminate\View\View;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Util\DbUtil;
use Illuminate\Support\Facades\Cookie;

use App\Models\National;
use App\Models\Olt;
use App\Models\Slot;
use App\Models\Page;
use App\Models\Permission;
class HomeComposer
{
    public function __construct()
    {
        // Dependencies automatically resolved by service container...
    }

    /**
     * Bind data to the view.
     *
     * @param  View  $view
     * @return void
     */
    public function compose(View $view)
    {
        $_currentUrl = str_replace(URL::to('/').'/', '', url()->current());
        $currentUrl = ucfirst($_currentUrl);
        $view->with('_currentUrl', $_currentUrl);
        $view->with('currentUrl', $currentUrl);

        if($notification=DbUtil::getDevAlert()!='')$view->with('notification', $notification);
        $view->with('nationals',National::select()->get());
        $view->with('olts',Olt::select()->get());
        $active_olt_id=0;
        $active_olt=Olt::select()->get()->first();
        if(request()->get('active_olt')){
            Cookie::queue(Cookie::make('active_olt', request()->get('active_olt'), 200));
            $active_olt_id=request()->get('active_olt');
        }else if(request()->cookie('active_olt')){
            $active_olt_id=request()->cookie('active_olt');
        }else{
            Cookie::queue(Cookie::make('active_olt', $active_olt['id'], 200));
        }
        if($active_olt_id)$active_olt=Olt::find($active_olt_id);
        $view->with('active_olt',$active_olt);

        $view->with('cnt_waiting',Slot::where('olt_id',$active_olt_id)->count());
        $view->with('cnt_online',0);
        $view->with('cnt_offline',0);
        $view->with('cnt_lowsignal','-');

        if($role=Auth::id()){
            $role=Auth::user()->is_admin;
            $permissions=array();
            foreach(Page::select()->get() as $page){
                $permissions[$page->id][0]=Permission::where('role_id',$role)->where('page_id',$page->id)->where('action',0)->count()?1:0;
                $permissions[$page->id][1]=Permission::where('role_id',$role)->where('page_id',$page->id)->where('action',1)->count()?1:0;
                $permissions[$page->id][2]=Permission::where('role_id',$role)->where('page_id',$page->id)->where('action',2)->count()?1:0;
                $permissions[$page->id][3]=Permission::where('role_id',$role)->where('page_id',$page->id)->where('action',3)->count()?1:0;
            }
            $view->with('current_role',$role);
            $view->with('current_permission',$permissions);
        }

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
