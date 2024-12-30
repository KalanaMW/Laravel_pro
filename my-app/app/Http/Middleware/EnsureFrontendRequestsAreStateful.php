<?php

namespace Laravel\Sanctum\Http\Middleware;

use Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse;
use Illuminate\Session\Middleware\StartSession;

class EnsureFrontendRequestsAreStateful
{
    public function handle($request, \Closure $next)
    {
        return $next($request);
    }
}
