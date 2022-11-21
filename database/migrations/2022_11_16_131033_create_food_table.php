<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('food', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();
            $table->text('description')->nullable();
            $table->integer('price')->nullable();
            $table->string('photo')->nullable();
            $table->string('type')->nullable();
            $table->text('ingredient')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('food');
    }
};
            // $table->id();
            // $table->string('name')->nullable();
            // $table->text('description')->nullable();
            // $table->integer('price')->nullable();
            // $table->string('photo')->nullable();
            // $table->string('type')->nullable();
            // $table->text('ingredient')->nullable();
