<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Sharing extends Migration
{
    public function up()
    {
        Schema::create('sharing', function (Blueprint $table) {
            $table->increments('id');
            $table->text('content');
            $table->text('description');
            $table->string('img');
            $table->string('name');
            $table->timestamps();
        });
    }

 
    public function down()
    {
        Schema::dropIfExists('sharing');
    }
}
