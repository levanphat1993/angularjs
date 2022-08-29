
var myNinjaApp = angular.module('myNinjaApp', ['ngRoute'])
.config(function($routeProvider, $locationProvider){
    $routeProvider.caseInsensitiveMatch = true;
    $routeProvider.when("/home", {
        templateUrl: "content/home.html",
        controller: "homeController",
        controllerAs: "homeCtrl"
    })
    .when("/courses", {
        templateUrl: "content/courses.html",
        controller: "coursesController",
        controllerAs: "coursesCtrl"
    })
    .when("/students", {
        templateUrl: "content/student.html",
        controller: "studentController",
        controllerAs: "studentCtrl"
    })
    .when("/students/:id", {
        templateUrl: "content/studentDetails.html",
        controller: "studentController",
        controllerAs: "studentCtrl"
    })
    .otherwise({
        redirectTo: "/home"
    });

    $locationProvider.html5Mode(true);
});


