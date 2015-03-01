// script.js

    // create the module and name it scotchApp
        // also include ngRoute for all our routing needs
    var lbsApp = angular.module('lbsApp', ['ngRoute']);

    // configure our routes
    lbsApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'main.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/games', {
                templateUrl : 'games.html',
                controller  : 'gamesController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'software.html',
                controller  : 'softwareController'
            });
    });

    // create the controller and inject Angular's $scope
    lbsApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });

    lbsApp.controller('gamesController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    lbsApp.controller('softwareController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });