// script.js
games = [
            {'name':'game','description':'this is an example game','image':'thumbs/johncena.png'},
            {'name':'not a game','description':'  this is another example game. it has more text, and also indentation! swag swag swagggg.','image':'thumbs/johncena.png'},

        ];

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
            .when('/software', {
                templateUrl : 'software.html',
                controller  : 'softwareController'
            })

            .when('/games/:game_id',{
                templateUrl: 'gamePage.html',
                controller: 'gamePageController'

            });
    });

    // create the controller and inject Angular's $scope
    lbsApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });

    lbsApp.controller('gamesController', function($scope) {
        $scope.games = games;
    });

    lbsApp.controller('softwareController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });

    lbsApp.controller('gamePageController',function($scope,$routeParams){
        $scope.game = $routeParams.game_id;

        $scope.gameObject = games[$scope.game];
    });