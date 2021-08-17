<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddAddressUsers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('ac_email')->nullable()->default('');
            $table->string('ac_phone')->nullable()->default('');
            $table->string('ac_address01')->nullable()->default('');
            $table->string('ac_address02')->nullable()->default('');
            $table->string('ac_about')->nullable()->default('');
            $table->string('ac_fb')->nullable()->default('');
            $table->string('ac_tw')->nullable()->default('');
            $table->string('ac_lk')->nullable()->default('');
            $table->string('ac_in')->nullable()->default('');
            $table->string('ac_pt')->nullable()->default('');
            $table->integer('ac_state')->nullable()->default(0);
            $table->integer('ac_city')->nullable()->default(0);
            $table->string('ac_zipcode')->nullable()->default('');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            //
        });
    }
}
