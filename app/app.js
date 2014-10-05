'use strict';

// App invocation
angular.module('thaw', ['ngRoute', 'ngCookies', 'firebase']);

// Configuration settings for Restangular
angular.module('thaw').config(function($locationProvider, $routeProvider) {

    // Turn on HTML5 mode
    $locationProvider.html5Mode(true);

    // Setup routes
    $routeProvider
        .when('/', {
            templateUrl: 'html/home.html'
        })
        .when('/task', {
            templateUrl: 'html/task.html'
        })
        .when('/survey', {
            templateUrl: 'html/survey.html'
        })
        .when('/complete', {
            templateUrl: 'html/complete.html'
        })
        .when('/tips', {
            templateUrl: 'html/tips.html'
        })
        .when('/signup', {
            templateUrl: 'html/signup.html'
        })
        .when('/profile', {
            templateUrl: 'html/profile.html'
        })
        .otherwise({
            redirectTo: '/',
        });
});
