<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('firstName')->default('')->nullable()->change();
            $table->string('lastName')->default('')->nullable()->change();
            $table->string('phone_office')->nullable()->change();
            $table->string('phone_mobile')->nullable()->change();
            $table->string('avatar')->nullable()->change();
            $table->integer('logins')->default(0)->change();
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
