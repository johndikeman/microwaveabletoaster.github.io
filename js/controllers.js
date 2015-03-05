// script.js
games = [
            {'name':'not a game','description':'this is an example game','image':'thumbs/johncena.png'},
            {'name':'game','description':'  this is another example game. it has more text, and also indentation! swag swag swagggg.','image':'thumbs/johncena.png'},
        ];
software = [
            {'name':'software1','description':'this is the description for software1'},
            {'name':'software2','description':'this is the description for software2'},
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

            .when('/about', {
                templateUrl : 'about.html'
                // controller  : 'gamesController'
            })

            // route for the contact page
            .when('/software', {
                templateUrl : 'software.html',
                controller  : 'softwareController'
            })

            .when('/software/:soft_id', {
                templateUrl : 'softwarePage.html',
                controller  : 'softwarePageController'
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
        $scope.software = software;
    });

    lbsApp.controller('softwarePageController',function($scope,$routeParams){
        $scope.sw = $routeParams.soft_id;

        for(a=0;a<software.length;a++){
            if(software[a].name==$scope.sw)
                $scope.softObject = software[a];
        }
    });

    lbsApp.controller('gamePageController',function($scope,$routeParams){
        $scope.game = $routeParams.game_id;

        for(a=0;a<games.length;a++){
            if(games[a].name==$scope.game)
                $scope.gameObject = games[a];
        }
    });