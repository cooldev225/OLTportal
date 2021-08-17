<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\National;
class InsertNational extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('nationals', function (Blueprint $table) {
            //
        });
        National::Create(['name'=>'Mexico','code'=>'MX']);
        National::Create(['name'=>'Colombia','code'=>'CO']);
        National::Create(['name'=>'Brazil','code'=>'BR']);
        National::Create(['name'=>'Spain','code'=>'ES']);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('nationals', function (Blueprint $table) {
            //
        });
    }
}
