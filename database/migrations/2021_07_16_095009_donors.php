<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Donors extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('donors', function (Blueprint $table) {
            $table->increments('id');
            $table->boolean('organization');
            $table->string('organization_name');
            $table->string('firstname');
            $table->string('lastname');
            $table->string('email');
            $table->string('phone');
            $table->date('date_of_birth');
            $table->string('address');
            $table->string('city');
            $table->string('zip');
            $table->integer('country_id')->unsigned();
            $table->foreign('country_id')
            ->references('id')
            ->on('countries')
            ->onUpdate('cascade')
            ->onDelete('cascade');
            $table->timestamps();
        });
    }

 
    public function down()
    {
        Schema::dropIfExists('donors');
    }
}
