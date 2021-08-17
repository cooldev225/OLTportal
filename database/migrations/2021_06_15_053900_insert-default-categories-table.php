<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Category;
class InsertDefaultCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('categories', function (Blueprint $table) {
            //
        });
        Category::Create(['name'=>'Escorts','sort'=>0]);
        Category::Create(['name'=>'Escorts Gay','sort'=>1]);
        Category::Create(['name'=>'Travestis','sort'=>2]);
        Category::Create(['name'=>'Masajes Eroticos','sort'=>3]);
        Category::Create(['name'=>'Sex Shops','sort'=>4]);
        Category::Create(['name'=>'Hoteles/Moteles','sort'=>5]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('categories', function (Blueprint $table) {
            //
        });
    }
}
