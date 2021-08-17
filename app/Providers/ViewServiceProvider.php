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
                'frontend.layouts.home',
                'frontend.home',
                'frontend.listing',
                'frontend.listingview',
            ],
            'App\Http\Binds\HomeComposer'
        );
        View::composer(
            [
                'frontend.layouts.dashboard',
                'frontend.ads',
            ],
            'App\Http\Binds\DashboardComposer'
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
