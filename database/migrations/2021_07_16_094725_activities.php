<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Activities extends Migration
{
    public function up()
    {
        Schema::create('activities', function (Blueprint $table) {
            $table->increments('id');
            $table->string('img');
            $table->text('description');
            $table->integer('type_id')->unsigned();
            $table->foreign('type_id')
            ->references('id')
            ->on('type_of_activities')
            ->onUpdate('cascade')
            ->onDelete('cascade');
            $table->timestamps();
        });
    }

 
    public function down()
    {
        Schema::dropIfExists('activities');
    }
}
