<?php

use Illuminate\Support\Facades\Route;
use App\Http\Middleware\Authenticate;
use App\Http\Middleware\AdminAuthenticate;

Auth::routes();
Route::get('/login', 'AuthController')->name('login');
Route::post('/login', 'AuthController@login');
Route::get('/register', 'AuthController@register')->name('register');
Route::post('/register', 'AuthController@register');
Route::post('/logout', 'AuthController@logout');
Route::get('/forgot', 'AuthController@forgot')->name('forgot');
Route::post('/forgot', 'AuthController@forgot');
Route::get('/logout', 'AuthController@logout')->name('logout');

Route::get('/admin/login', 'Admin\\AuthController@login')->name('admin_login');
Route::post('/admin/login', 'Admin\\AuthController@login');
Route::post('/admin/logout', 'Admin\\AuthController@logout');
Route::get('/admin/forgot', 'Admin\\AuthController@forgot')->name('admin_forgot');
Route::post('/admin/forgot', 'Admin\\AuthController@forgot');
Route::get('/admin/logout', 'Admin\\AuthController@logout')->name('admin_logout');

Route::group(['middleware' => ['login']], function () {
    Route::get('/', 'HomeController@index');
    Route::get('/home', 'HomeController@index')->name('home');
    Route::get('/waiting', 'WaitingController@index');
    Route::post('/waiting/getDataTable', 'WaitingController@getDataTable');
    Route::post('/waiting/saveSlot', 'WaitingController@saveSlot');
    Route::post('/waiting/deleteSlot', 'WaitingController@deleteSlot');
    Route::get('/onu', 'OnuController@index');
    Route::post('/onu/getDataTable', 'OnuController@getDataTable');
    Route::get('/onu/editOnu/{id}', 'OnuController@editOnu'); 
    Route::get('/chart', 'ChartController@index');
    Route::get('/log', 'LogController@index');
    Route::post('/log/getDataTable', 'LogController@getDataTable');
    Route::get('/setting', 'SettingController@index');
    Route::post('/setting/getCardDataTable', 'SettingController@getCardDataTable');
    Route::post('/setting/getPonDataTable', 'SettingController@getPonDataTable');
    Route::post('/setting/getUplinkDataTable', 'SettingController@getUplinkDataTable');
    Route::post('/setting/getVlanDataTable', 'SettingController@getVlanDataTable');
    Route::post('/setting/getOnutypeDataTable', 'SettingController@getOnutypeDataTable');
    Route::post('/setting/saveOnutype', 'SettingController@saveOnutype');
    Route::post('/setting/deleteOnutype', 'SettingController@deleteOnutype');
    Route::post('/setting/getBillingDataTable', 'SettingController@getBillingDataTable');
    Route::post('/setting/saveBilling', 'SettingController@saveBilling');
    Route::post('/setting/deleteBilling', 'SettingController@deleteBilling');
    Route::post('/setting/getOltDataTable', 'SettingController@getOltDataTable');
    Route::post('/setting/saveCard', 'SettingController@saveCard');
    Route::post('/setting/deleteCard', 'SettingController@deleteCard');
    Route::post('/setting/actionCard', 'SettingController@actionCard');
    Route::post('/setting/savePon', 'SettingController@savePon');
    Route::post('/setting/deletePon', 'SettingController@deletePon');
    Route::post('/setting/actionPon', 'SettingController@actionPon');
    Route::post('/setting/saveUplink', 'SettingController@saveUplink');
    Route::post('/setting/deleteUplink', 'SettingController@deleteUplink');
    Route::post('/setting/actionUplink', 'SettingController@actionUplink');
    Route::post('/setting/saveVlan', 'SettingController@saveVlan');
    Route::post('/setting/deleteVlan', 'SettingController@deleteVlan');
    Route::post('/setting/saveOlt', 'SettingController@saveOlt');
    Route::post('/setting/deleteOlt', 'SettingController@deleteOlt');
    Route::get('/user', 'UserController@index');
    Route::post('/user/getDataTable', 'UserController@getDataTable');
    Route::get('/user/editUser/{id}', 'UserController@editUser');
});

Route::group(['middleware' => ['admin']], function () {
    Route::get('/admin', 'Admin\\HomeController@index');
    Route::get('/admin/home', 'Admin\\HomeController@index')->name('dashboard');

    Route::get('/admin/users', 'Admin\\UsersController@index')->name('admin_users');
    Route::post('/admin/users/getUsersDataTable', 'Admin\\UsersController@getUsersDataTable');
    Route::get('/admin/users/{id}', 'Admin\\UsersController@editUser');
    Route::post('/admin/users/saveUser', 'Admin\\UsersController@saveUser');
    Route::post('/admin/users/deleteUser', 'Admin\\UsersController@deleteUser');
    Route::post('/admin/users/getLastLoginByMonth', 'Admin\\UsersController@getLastLoginByMonth');
});
Route::post('/developer', 'Util\\DbUtil@developer');

Route::post('/v1/api/uploadFile', 'Util\\FileUtil@uploadFile');
Route::get('/v1/api/downloadFile', 'Util\\FileUtil@downloadFile');