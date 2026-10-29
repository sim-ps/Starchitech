<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

Route::inertia('/', 'Home')->name('home');
Route::inertia('/about', 'AboutUs')->name('about');
Route::inertia('/explore', 'ExploreRooms')->name('explore');
Route::inertia('/contact', 'ContactUs')->name('contact');
Route::inertia('/loginpage', 'LoginPage')->name('login');
Route::inertia('/signup', 'Signup')->name('signup');

Route::post('/loginpage', [AuthController::class, 'login'])->name('login.store');
Route::post('/signup', [AuthController::class, 'register'])->name('signup.store');
Route::post('/logout', [AuthController::class, 'logout'])
    ->middleware('auth')
    ->name('logout');