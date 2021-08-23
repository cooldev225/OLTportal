<?php

namespace App\Providers;

use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;

class ViewServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        View::composer(
            [
                'frontend.layouts.dashboard',
                'frontend.home',
                'frontend.auth.login',
                'frontend.auth.forgot',
                'frontend.auth.register',
                'frontend.home',
                'frontend.waiting',
                'frontend.chart',
                'frontend.log',
                'frontend.onu',
                'frontend.onu_edit',
                'frontend.setting',
                'frontend.user',
                'frontend.user_edit',
            ],
            'App\Http\Binds\HomeComposer'
        );
        View::composer(
            [
                'backend.layouts.dashboard',
                'backend.home',
                'backend.users',
                'backend.ads',
            ],
            'App\Http\Binds\Admin\DashboardComposer'
        );
    }
}
