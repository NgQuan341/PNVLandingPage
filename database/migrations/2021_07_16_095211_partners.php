<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Partners extends Migration
{
    public function up()
    {
        Schema::create('partners', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->text('description');
            $table->text('img');
            $table->text('link');
            $table->timestamps();
        });
    }

 
    public function down()
    {
        Schema::dropIfExists('partners');
    }
}
