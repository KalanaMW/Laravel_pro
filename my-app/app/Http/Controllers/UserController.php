<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function register(Request $request)
    {
        // Handle user registration logic
        return response()->json(['message' => 'User registered successfully']);
    }

    public function login(Request $request)
    {
        // Handle user login logic
        return response()->json(['message' => 'User logged in successfully']);
    }

    public function user()
    {
        // Return authenticated user details

        $user = auth::user();
        if (!$user) {
            return response()->json(['message' => 'user not authenticated'], 401);
        }
        return response()->json(['user' => $user], 200);
    }
}
