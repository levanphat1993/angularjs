myNinjaApp.controller("studentController", ["$scope", "$route", "$routeParams", "student", function($scope, $route, $routeParams, student){


    var vm = this;

    vm.reloadData = function () {
        $route.reload();
    }

    student.loaddata().then(function () {
 
        vm.students = student.getAll();

        if ($routeParams.id !== undefined) {
            vm.students = student.getStudentForId($routeParams.id); 
        }

    });



}]);
