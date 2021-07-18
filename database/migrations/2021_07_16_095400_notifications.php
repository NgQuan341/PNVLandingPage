<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Notifications extends Migration
{
    public function up()
    {
        Schema::create('notifications', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->text('description');
            $table->integer('type_id')->unsigned();
            $table->foreign('type_id')
            ->references('id')
            ->on('type_of_notification')
            ->onUpdate('cascade')
            ->onDelete('cascade');
            $table->timestamps();
        });
    }

 
    public function down()
    {
        Schema::dropIfExists('notifications');
    }
}
