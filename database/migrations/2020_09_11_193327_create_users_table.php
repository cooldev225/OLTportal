<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('firstName')->default('')->nullable();
            $table->string('lastName')->default('')->nullable();
            $table->string('username')->nullable();
            $table->string('password')->nullable();
            $table->string('email');
            $table->integer('national')->default(0);
            $table->boolean('sms_allow')->default(false);
            $table->string('phone_office')->nullable();
            $table->string('phone_mobile')->nullable();
            $table->string('avatar');
            $table->integer('logins')->default(0);
            $table->timestamp('email_verified_at')->nullable();
            $table->rememberToken();
            $table->integer('created_by')->nullable();
            $table->integer('updated_by')->nullable();
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
