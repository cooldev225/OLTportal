<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\CreditPlan;
class UpdateCreditPlanOrder extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('credit_plans', function (Blueprint $table) {
            
        });
        foreach(CreditPlan::where('groups','=',0)->get() as $credit){
            $credit->groups=-1;
            $credit->save();
        }
        foreach(CreditPlan::where('groups','=',4)->get() as $credit){
            $credit->groups=0;
            $credit->save();
        }
        foreach(CreditPlan::where('groups','=',-1)->get() as $credit){
            $credit->groups=4;
            $credit->save();
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('credit_plans', function (Blueprint $table) {
            //
        });
    }
}
