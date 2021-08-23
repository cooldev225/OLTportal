<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUplinkTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('uplinks', function (Blueprint $table) {
            $table->id();
            $table->integer('olt_id')->default(0)->nullable();
            $table->string('port')->default('')->nullable();
            $table->string('admin')->default('')->nullable();
            $table->integer('status')->default(0)->nullable();
            $table->string('mtu')->default('')->nullable();
            $table->string('description')->default('')->nullable();
            $table->string('pvid')->default('')->nullable();
            $table->string('vlan')->default('')->nullable();
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
        Schema::dropIfExists('uplinks');
    }
}
