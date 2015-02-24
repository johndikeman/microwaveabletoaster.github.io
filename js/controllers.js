var lbsApp = angular.module('lbsApp', []);

lbsApp.controller('games', function ($scope) {
  $scope.games = [
    {'name': 'Game1',
     'description': 'this is a game that i totally built',
     'link':'https://www.google.com'
 	},

  ];
});