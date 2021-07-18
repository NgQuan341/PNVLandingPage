<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Typeofactivities extends Migration
{
    public function up()
    {
        Schema::create('type_of_activities', function (Blueprint $table) {
            $table->increments('id');
            $table->date('date');
            $table->string('type');
            $table->timestamps();
        });
    }

 
    public function down()
    {
        Schema::dropIfExists('type_of_activities');
    }
}
