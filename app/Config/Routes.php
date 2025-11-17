<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->setDefaultNamespace('App\Controllers');
$routes->setDefaultController('Home');
$routes->setDefaultMethod('index');
$routes->setTranslateURIDashes(false);
$routes->set404Override();

// Redirect root to frontend
$routes->get('/', function () {
    return redirect()->to(base_url('frontend/index.html'));
});

// API routes
$routes->group('api', function ($routes) {
    $routes->resource('notes');
});
