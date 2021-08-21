<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOnuTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('onus', function (Blueprint $table) {
            $table->id();
            $table->integer('status')->default(0)->nullable();
            $table->string('name')->default('')->nullable();
            $table->integer('slot')->default(0)->nullable();
            $table->integer('onu')->default(0)->nullable();
            $table->string('type')->default('')->nullable();
            $table->double('signal1')->default(0)->nullable();
            $table->double('signal2')->default(0)->nullable();
            $table->integer('vlan')->default(0)->nullable();
            $table->string('ppp1')->default('')->nullable();
            $table->string('ppp2')->default('')->nullable();
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
        Schema::dropIfExists('onus');
    }
}
