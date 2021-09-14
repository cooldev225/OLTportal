<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateOltTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('olts', function (Blueprint $table) {
            $table->string('ip')->default('')->nullable();
            $table->string('telnet_port')->default('')->nullable();
            $table->string('telnet_username')->default('')->nullable();
            $table->string('telnet_passwrod')->default('')->nullable();
            $table->string('snmp_r_community')->default('')->nullable();
            $table->string('snmp_rw_community')->default('')->nullable();
            $table->string('snmp_udp_port')->default('')->nullable();
            $table->string('manufaturer')->default('')->nullable();
            $table->string('model')->default('')->nullable();
            $table->string('version')->default('')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('olts', function (Blueprint $table) {
            //
        });
    }
}
