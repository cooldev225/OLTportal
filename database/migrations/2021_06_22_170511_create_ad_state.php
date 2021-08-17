<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdState extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('announcement_states', function (Blueprint $table) {
            $table->id();
            $table->integer('userid');
            $table->integer('adid');
            $table->string('fromemail')->nullable();
            $table->string('toemail')->nullable();
            $table->integer('kind')->default(0);
            $table->string('params')->nullable();
            $table->binary('body',4294967295)->nullable();
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
        Schema::dropIfExists('Announcement_States');
    }
}
