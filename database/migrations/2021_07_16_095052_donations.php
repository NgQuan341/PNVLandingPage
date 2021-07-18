<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Donations extends Migration
{
    public function up()
    {
        Schema::create('donations', function (Blueprint $table) {
            $table->increments('id');
            $table->decimal('amout');
            $table->date('date');
            $table->text('note');
            $table->integer('campaign_id')->unsigned();
            $table->integer('donor_id')->unsigned();
            $table->foreign('campaign_id')
            ->references('id')
            ->on('campaigns')
            ->onUpdate('cascade')
            ->onDelete('cascade');
            $table->foreign('donor_id')
            ->references('id')
            ->on('donors')
            ->onUpdate('cascade')
            ->onDelete('cascade');
            $table->timestamps();
        });
    }

 
    public function down()
    {
        Schema::dropIfExists('donations');
    }
}
