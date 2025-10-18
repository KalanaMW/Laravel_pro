<?php

namespace App\Http\Controllers;

use App\Models\Game;
use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function dashboard()
    {
        return Inertia::render('Admin/Dashboard', [
            'games' => Game::all(),
            'news' => News::all(),
        ]);
    }

    public function createGame(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'year' => 'required|integer',
            'image' => 'required|url',
            'download_url' => 'required|url',
            'status' => 'required|in:available,upcoming',
            'category' => 'required|string',
        ]);

        Game::create($validated);

        return redirect()->back();
    }

    public function updateGame(Request $request, Game $game)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'year' => 'required|integer',
            'image' => 'required|url',
            'download_url' => 'required|url',
            'status' => 'required|in:available,upcoming',
            'category' => 'required|string',
        ]);

        $game->update($validated);

        return redirect()->back();
    }

    public function deleteGame(Game $game)
    {
        $game->delete();
        return redirect()->back();
    }

    public function createNews(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'image' => 'required|url',
            'status' => 'required|in:published,draft',
        ]);

        News::create($validated);

        return redirect()->back();
    }

    public function updateNews(Request $request, News $news)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'image' => 'required|url',
            'status' => 'required|in:published,draft',
        ]);

        $news->update($validated);

        return redirect()->back();
    }

    public function deleteNews(News $news)
    {
        $news->delete();
        return redirect()->back();
    }
}