myNinjaApp.service('city',['$http','$q',function($http, $q){

    
    var arrCities = [];

    this.loaddata = function(){
        var defered = $q.defer();
        $http.get('http://cotocota.local/cities')
            .success(function(respone){
                defered.resolve(respone);
                arrCities = respone.records;
            })
            .error(function(respone){
                defered.resolve('Error');
            });
        return defered.promise;
    };


    this.getAll = function () {
        return arrCities;
    };



}]);