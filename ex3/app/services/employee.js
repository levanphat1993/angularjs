myNinjaApp.service('employee',['$http','$q',function($http, $q){

    
    var arrEmployees = [];

    this.loaddata = function(){
        var defered = $q.defer();
        $http.get('http://cotocota.local/employees')
            .success(function(respone){
                defered.resolve(respone);
                arrEmployees = respone.records;
            })
            .error(function(respone){
                defered.resolve('Error');
            });
        return defered.promise;
    };


    this.getAll = function () {
        return arrEmployees;
    };



}]);