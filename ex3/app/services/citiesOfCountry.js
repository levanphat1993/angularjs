myNinjaApp.service('citiesOfCountry',['$http','$q',function($http, $q){

    
    var arrcitiesOfCountries = [];

    this.loaddata = function(){
        var defered = $q.defer();
        $http.get('http://cotocota.local/citiesOfCountries')
            .success(function(respone){
                defered.resolve(respone);
                arrcitiesOfCountries = respone.records;
            })
            .error(function(respone){
                defered.resolve('Error');
            });
        return defered.promise;
    };


    this.getAll = function () {
        return arrcitiesOfCountries;
    };



}]);