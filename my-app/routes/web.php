<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\AdminController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\Game;
use App\Models\News;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Downloads');
})->middleware(['auth', 'verified'])->name('downloads');

// Entertainment Theme Pages
Route::get('/GameNews', function () {
    return Inertia::render('GameNews', [
        'news' => News::all()
    ]);
})->name('GameNews');

Route::get('/upcoming', function () {
    return Inertia::render('Upcoming', [
        'games' => Game::where('status', 'upcoming')->get()
    ]);
})->name('upcoming');

// Admin Routes
Route::middleware('auth')->group(function () {
    Route::get('/admin/dashboard', [AdminController::class, 'dashboard'])
        ->middleware('admin')
        ->name('admin.dashboard');
    
    // Game Routes
    Route::post('/admin/games/create', [AdminController::class, 'createGame']);
    Route::post('/admin/games/update/{game}', [AdminController::class, 'updateGame']);
    Route::delete('/admin/games/delete/{game}', [AdminController::class, 'deleteGame']);
    
    // News Routes
    Route::post('/admin/news/create', [AdminController::class, 'createNews']);
    Route::post('/admin/news/update/{news}', [AdminController::class, 'updateNews']);
    Route::delete('/admin/news/delete/{news}', [AdminController::class, 'deleteNews']);
});

// Profile Routes
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
