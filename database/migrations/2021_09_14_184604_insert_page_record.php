<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Page;
class InsertPageRecord extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('pages', function (Blueprint $table) {
            //
        });
        Page::Create(['name'=>'Users','url'=>'/user','description'=>'']);
        Page::Create(['name'=>'OLTs','url'=>'/setting?a=7','description'=>'']);
        Page::Create(['name'=>'OLT Cards','url'=>'/setting?a=1','description'=>'']);
        Page::Create(['name'=>'OLT PONs','url'=>'/setting?a=2','description'=>'']);
        Page::Create(['name'=>'OLT Uplinks','url'=>'/setting?a=3','description'=>'']);
        Page::Create(['name'=>'OLT Vlans','url'=>'/setting?a=4','description'=>'']);
        Page::Create(['name'=>'Billing','url'=>'/setting?a=6','description'=>'']);
        Page::Create(['name'=>'Onu List','url'=>'/onu','description'=>'']);
        Page::Create(['name'=>'Onu Type','url'=>'/setting?a=5','description'=>'']);
        Page::Create(['name'=>'Waiting Authorization','url'=>'/waiting','description'=>'']);
        Page::Create(['name'=>'Chart','url'=>'/chart','description'=>'']);
        Page::Create(['name'=>'LOGs','url'=>'/log','description'=>'']);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('pages', function (Blueprint $table) {
            //
        });
    }
}
