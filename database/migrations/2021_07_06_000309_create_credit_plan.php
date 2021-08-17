<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\CreditPlan;
class CreateCreditPlan extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('credit_plans', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable()->default('');
            $table->integer('groups')->default(0);
            $table->integer('days')->default(1);
            $table->integer('times')->default(0);
            $table->integer('credits')->default(0);
            $table->double('amount')->default(0);
            $table->integer('created_by')->nullable();
            $table->integer('updated_by')->nullable();
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent();
        });
        CreditPlan::firstOrCreate(array('groups'=>0,'name'=>'CARGA SIMPLE','days'=>1,'times'=>1,'credits'=>40,'amount'=>40));
        CreditPlan::firstOrCreate(array('groups'=>0,'name'=>'CARGA SIMPLE','days'=>1,'times'=>8,'credits'=>55,'amount'=>55));
        CreditPlan::firstOrCreate(array('groups'=>0,'name'=>'CARGA SIMPLE','days'=>1,'times'=>12,'credits'=>70,'amount'=>70));
        CreditPlan::firstOrCreate(array('groups'=>0,'name'=>'CARGA SIMPLE','days'=>1,'times'=>16,'credits'=>85,'amount'=>85));
        CreditPlan::firstOrCreate(array('groups'=>0,'name'=>'CARGA SIMPLE','days'=>1,'times'=>24,'credits'=>100,'amount'=>100));
        CreditPlan::firstOrCreate(array('groups'=>1,'name'=>'PLAN 7 DÍAS','days'=>7,'times'=>8,'credits'=>200,'amount'=>200));
        CreditPlan::firstOrCreate(array('groups'=>1,'name'=>'PLAN 7 DÍAS','days'=>7,'times'=>12,'credits'=>255,'amount'=>255));
        CreditPlan::firstOrCreate(array('groups'=>1,'name'=>'PLAN 7 DÍAS','days'=>7,'times'=>16,'credits'=>300,'amount'=>300));
        CreditPlan::firstOrCreate(array('groups'=>1,'name'=>'PLAN 7 DÍAS','days'=>7,'times'=>24,'credits'=>350,'amount'=>350));
        CreditPlan::firstOrCreate(array('groups'=>2,'name'=>'PLAN 15 DÍAS','days'=>15,'times'=>8,'credits'=>300,'amount'=>300));
        CreditPlan::firstOrCreate(array('groups'=>2,'name'=>'PLAN 15 DÍAS','days'=>15,'times'=>12,'credits'=>400,'amount'=>400));
        CreditPlan::firstOrCreate(array('groups'=>2,'name'=>'PLAN 15 DÍAS','days'=>15,'times'=>16,'credits'=>500,'amount'=>500));
        CreditPlan::firstOrCreate(array('groups'=>2,'name'=>'PLAN 15 DÍAS','days'=>15,'times'=>24,'credits'=>600,'amount'=>600));
        CreditPlan::firstOrCreate(array('groups'=>3,'name'=>'PLAN 30 DÍAS','days'=>30,'times'=>8,'credits'=>500,'amount'=>500));
        CreditPlan::firstOrCreate(array('groups'=>3,'name'=>'PLAN 30 DÍAS','days'=>30,'times'=>12,'credits'=>650,'amount'=>650));
        CreditPlan::firstOrCreate(array('groups'=>3,'name'=>'PLAN 30 DÍAS','days'=>30,'times'=>16,'credits'=>800,'amount'=>800));
        CreditPlan::firstOrCreate(array('groups'=>3,'name'=>'PLAN 30 DÍAS','days'=>30,'times'=>24,'credits'=>1200,'amount'=>1200));
        CreditPlan::firstOrCreate(array('groups'=>4,'name'=>'Destacado AD','days'=>15,'times'=>24,'credits'=>100,'amount'=>100));
        CreditPlan::firstOrCreate(array('groups'=>4,'name'=>'Destacado AD','days'=>30,'times'=>24,'credits'=>150,'amount'=>150));
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('credit_plans');
    }
}
