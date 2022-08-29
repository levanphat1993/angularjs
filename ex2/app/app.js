var myNinjaApp = angular.module('myNinjaApp', ['ngRoute', 'ngAnimate']);

myNinjaApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);
    
    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'NinjaController'
        })
        .when('/directory', {
            templateUrl: 'views/directory.html',
            controller: 'NinjaController'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'ContactController'
        })
        .when('/contact-success', {
            templateUrl: 'views/contact-success.html',
            controller: 'ContactController'
        })
        .otherwise({
            redirectTo: '/home'
        });


}]);

myNinjaApp.directive('randomNinja', [function(){

    return {
        restrict : 'E',
        scope: {
            ninjas: '=',
            title: '='
        },
        templateUrl: 'views/random.html',
        transclude: true,
        replace: true,
        controller: function($scope){
            $scope.random = Math.floor(Math.random()*4);
        }
    };

}]);

myNinjaApp.run(function(){

});


myNinjaApp.controller('NinjaController', ['$scope', '$http', function($scope, $http){


    $scope.removeNinja = function(ninja){
       
        var removeNinja = $scope.ninjas.indexOf(ninja);
        $scope.ninjas.splice(removeNinja,1);

    };

    $scope.removeAll = function(){
        $scope.ninjas = [];
    };

    $scope.addNinja = function() {

        $scope.ninjas.push({
            name: $scope.newninja.name,
            belt: $scope.newninja.belt,
            rate: parseInt($scope.newninja.rate),
            availabe: true
        });

        $scope.newninja.name = "";
        $scope.newninja.belt = "";
        $scope.newninja.rate = "";

    };

    $http.get('data/data.json')
        .success(function(data){
            $scope.ninjas = data;
        });

}]);

myNinjaApp.controller('ContactController', ['$scope', '$location', function($scope, $location){

    $scope.sendMessage = function () {
        $location.path('/contact-success');
    };

}]);
