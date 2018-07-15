/// <reference path="angular.min.js" />

var app = angular.module('BambuApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: '../Views/home.html',
            controller: 'HomeController'
        })
        .when('/horarios', {
            templateUrl: '../Views/horarios.html',
            controller: 'HorariosController'
        })
        .when('/novedades', {
            templateUrl: '../Views/novedades.html',
            controller: 'NovedadesController'
        })
        .when('/contacto', {
            templateUrl: '../Views/contacto.html',
            controller: 'ContactoController'
        })
        .when('/edicion', {
            templateUrl: '../Views/edicion.html',
            controller: 'EdicionController'
        })
        .when('/login', {
            templateUrl: '../Views/login.html',
            controller: 'LoginController'
        });
});