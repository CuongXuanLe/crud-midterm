<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\APIController;
use App\Http\Controllers\FoodController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::get('/food', [APIController::class, 'index']);
// Route::post('/add_product', [APIController::class, 'add_product']);

Route::post('/add_product', [FoodController::class, 'add_product']);
Route::get('/get_all_product', [FoodController::class, 'get_all_product']);
Route::get('/get_edit_product/{id}', [FoodController::class, 'get_edit_product']);
Route::post('/update_product/{id}', [FoodController::class, 'update_product']);
Route::get('/delete_product/{id}', [FoodController::class, 'delete_product']);

