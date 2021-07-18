<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Typeofnotifications extends Migration
{
    public function up()
    {
        Schema::create('type_of_notification', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->timestamps();
        });
    }

 
    public function down()
    {
        Schema::dropIfExists('type_of_notification');
    }
}
