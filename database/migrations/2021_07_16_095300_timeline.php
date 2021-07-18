<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Timeline extends Migration
{
    public function up()
    {
        Schema::create('timeline', function (Blueprint $table) {
            $table->increments('id');
            $table->string('year');
            $table->text('content');
            $table->string('img');
            $table->timestamps();
        });
    }

 
    public function down()
    {
        Schema::dropIfExists('timeline');
    }
}
