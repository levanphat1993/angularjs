myNinjaApp.controller('NinjaController', ['$scope', function($scope){

    var employees = [
        {
            firstName: "Daivd",
            lastName: "Hastings",
            gender: "Male",
            salary: 55000
        },
        {
            firstName: "Sara",
            lastName: "Paul",
            gender: "Female",
            salary: 68000
        },
        {
            firstName: "Mark",
            lastName: "Holland",
            gender: "Male",
            salary: 57000
        },
        {
            firstName: "Pam",
            lastName: "Macintosh",
            gender: "Female",
            salary: 53000
        },
        {
            firstName: "Todd",
            lastName: "Barber",
            gender: "Male",
            salary: 60000
        }
    ];


    var countries = [
        {
            name: "UK",
            cities : [
                { name: "London" },
                { name: "Manchester" },
                { name: "Birmingham" }
            ]
        },
        {
            name: "USA",
            cities: [
                { name: "Los Angeles" },
                { name: "Chicago" },
                { name: "Houston" }
            ]
        },
        {
            name: "India",
            cities: [
                { name: "Hyderabad" },
                { name: "Chennai" },
                { name: "Mumbai" }
            ]
        }
    ];

    var technologies = [
        {
            name: "C#",
            likes: 0,
            dislikes: 0
        },
        {
            name: "ASP.NET",
            likes: 0,
            dislikes: 0
        },
        {
            name: "SQL Server",
            likes: 0,
            dislikes: 0
        },
        {
            name: "AngularJS",
            likes: 0,
            dislikes: 0
        }
    ];

    var employees1 = [
        {
            name: "Ben",
            dateOfBirth: new Date("November 23, 1980"),
            gender: "Male",
            salary: 55000.788,
            city: "Lodon"
        },
        {
            name: "Sara",
            dateOfBirth: new Date("May 05, 1970"),
            gender: "Female",
            salary: 68000,
            city: "Chennal"
        },
        {
            name: "Mark",
            dateOfBirth: new Date("August 15, 1974"),
            gender: "Male",
            salary: 57000,
            city: "London"
        },
        {
            name: "Pam",
            dateOfBirth: new Date("October 27, 1979"),
            gender: "Female",
            salary: 53000,
            city: "London"
        },
        {
            name: "Todd",
            dateOfBirth: new Date("December 30, 1983"),
            gender: "Male",
            salary: 60000,
            city: "Chennal"
        }
    ];


    var employees2 = [
        {
            name: "Ben",
            dateOfBirth: new Date("November 23, 1980"),
            gender: 1,
            salary: 55000.788,
            city: "Lodon"
        },
        {
            name: "Sara",
            dateOfBirth: new Date("May 05, 1970"),
            gender: 2,
            salary: 68000,
            city: "Chennal"
        },
        {
            name: "Mark",
            dateOfBirth: new Date("August 15, 1974"),
            gender: 1,
            salary: 57000,
            city: "London"
        },
        {
            name: "Pam",
            dateOfBirth: new Date("October 27, 1979"),
            gender: 3,
            salary: 53000,
            city: "London"
        },
        {
            name: "Todd",
            dateOfBirth: new Date("December 30, 1983"),
            gender: 2,
            salary: 60000,
            city: "Chennal"
        }
    ];


    var employees3 = [
        {
            name: "Ben",
            gender: 1,
            salary: 55000.788,
            city: "Lodon"
        },
        {
            name: "Sara",
            gender: 2,
            salary: 68000,
            city: "Chennal"
        },
        {
            name: "Mark",
            gender: 1,
            salary: 57000,
            city: "London"
        },
        {
            name: "Pam",
            gender: 3,
            salary: 53000,
            city: "London"
        },
        {
            name: "Todd",
            gender: 2,
            salary: 60000,
            city: "Chennal"
        }
    ];

    var employees4 = [
        {
            name: "Ben",
            gender: "Male",
            salary: 55000
        },
        {
            name: "Sara",
            gender: "Fenale",
            salary: 68000
        },
        {
            name: "Mark",
            gender: "Male",
            salary: 57000
        },
        {
            name: "Pam",
            gender: "Female",
            salary: 53000
        },
        {
            name: "Todd",
            gender: "Male",
            salary: 60000
        }
    ];



    $scope.incrementLike = function (technology) {
        technology.likes ++;
    }

    $scope.incrementDislike = function (technology) {
        technology.dislikes ++;
    }


    $scope.employees = employees;
    $scope.countries = countries;
    $scope.technologies = technologies;
    $scope.employees1 = employees1;
    $scope.employees2 = employees2;
    $scope.employees3 = employees3;
    $scope.employees4 = employees4;
    $scope.rowLimit = 5;
    $scope.sortColum = "name";
    $scope.reverseSort = false;
    $scope.employeeView = "content/employeeTable.html";

    $scope.sortData = function (column) {
        $scope.reverseSort = ($scope.sortColum == column) ? !$scope.reverseSort : false;      
        $scope.sortColum = column;
    }

    $scope.getSortClass = function (column) {
    
        if ($scope.sortColum == column) {

            return $scope.reverseSort ? 'arrow-down' : 'arrow-up';
        }
        return '';
    }

    $scope.search = function (item) {

        
        if ($scope.searchText == undefined) {
            return true
        } else {
            
            if (item.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 ||
            item.city.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1
            ) {

                    return true;
            }
        }

        return false;
    }


}]);