<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Database\Seeders\CountryCityStateHelper;
use App\Models\Country;
use App\Models\State;
use App\Models\City;
use App\Models\CountryPhoneCode;
class InsertCountryData extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $countries = CountryCityStateHelper::countries();
        foreach ($countries as $country) {
            Country::firstOrCreate($country);
        }

        $states = CountryCityStateHelper::states();
        foreach ($states as $state) {
            State::firstOrCreate($state);
        }

        $cities = CountryCityStateHelper::cities();
        foreach ($cities as $city) {
            City::firstOrCreate($city);
        }
        
        $codes = CountryCityStateHelper::phoneCodes();
        foreach ($codes as $code) {
            CountryPhoneCode::create($code);
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
