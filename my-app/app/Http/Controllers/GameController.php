<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class GameController extends Controller
{
    public function index()
    {
        // Return a list of games (dummy data for testing)
        return response()->json([
            'games' => [
                ['id' => 1, 'title' => 'Far Cry 6', 'year' => 2021],
                ['id' => 2, 'title' => 'Assassin\'s Creed Mirage', 'year' => 2023],
                // Add more games here...
            ],
        ]);
    }

    public function update(Request $request, $id)
    {
        // Handle game updates
        return response()->json([
            'message' => 'Game updated successfully',
            'game_id' => $id,
        ]);
    }

    public function destroy($id)
    {
        // Handle game deletion
        return response()->json([
            'message' => 'Game deleted successfully',
            'game_id' => $id,
        ]);
    }
}
