<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Content extends Migration
{
    public function up()
    {
        Schema::create('contents', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->text('content');
            $table->string('img');
            $table->boolean('display');
            $table->timestamps();
        });
    }

 
    public function down()
    {
        Schema::dropIfExists('contents');
    }
}
