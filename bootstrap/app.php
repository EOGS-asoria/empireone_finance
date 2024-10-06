<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        api: __DIR__.'/../routes/api.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->web(append: [
            \App\Http\Middleware\HandleInertiaRequests::class,
            \Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets::class,
           
        ]);
        $middleware->appendToGroup('redirectBasedOnRole', [
            \App\Http\Middleware\RedirectBasedOnRole::class,
        ]);
        $middleware->appendToGroup('administrator', [
            \App\Http\Middleware\Administrator::class,
        ]);
        $middleware->appendToGroup('instructor', [
            \App\Http\Middleware\Instructor::class,
        ]);
        $middleware->appendToGroup('student', [
            \App\Http\Middleware\Student::class,
        ]);
        $middleware->api(append: [
            \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();
