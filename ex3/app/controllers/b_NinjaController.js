myNinjaApp.controller('NinjaController', [
    '$scope', 
    '$location', 
    '$anchorScroll',
    'string', 
    'employee',
    'citiesOfCountry',
    function(
        $scope, 
        $location, 
        $anchorScroll, 
        string, 
        employee,
        citiesOfCountry
    ){



    employee.loaddata().then(function (respone) {
        $scope.employees = employee.getAll();
    });

    citiesOfCountry.loaddata().then(function (respone) {

        var countries = citiesOfCountry.getAll();
        countries.forEach((element) => {
            if (element['cities']) {
                element['cities'] =  element['cities'].split(",");
            }
        })

       
        $scope.countries = countries;

    });


    $scope.transformString = function (input) {
        $scope.output = string.processString(input);
    };

    $scope.scrollTo = function (scrollLocation) {
        $location.hash(scrollLocation);
    };

    $scope.scrollToCountry = function (countryName) {
        console.log(countryName);
        $location.hash(countryName);
        $anchorScrol();
    }
    $scope.aaa = $scope;
}]);