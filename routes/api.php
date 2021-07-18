<?php

use App\Http\Controllers\ActivitiesController;
use App\Http\Controllers\CampaignsController;
use App\Http\Controllers\ContentController;
use App\Http\Controllers\DonationsController;
use App\Http\Controllers\DonorsController;
use App\Http\Controllers\FollowersController;
use App\Http\Controllers\NotificationsController;
use App\Http\Controllers\PartnersController;
use App\Http\Controllers\SharingController;
use App\Http\Controllers\TimelineController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::resource('content',ContentController::class);
Route::resource('partners',PartnersController::class);
Route::resource('activities',ActivitiesController::class);
Route::resource('campaigns',CampaignsController::class);
Route::resource('donations',DonationsController::class);
Route::resource('donors',DonorsController::class);
Route::resource('followers',FollowersController::class);
Route::resource('notifications',NotificationsController::class);
Route::resource('sharing',SharingController::class);
Route::resource('timeline',TimelineController::class);

