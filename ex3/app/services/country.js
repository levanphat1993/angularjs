myNinjaApp.service('country',['$http','$q',function($http, $q){
    
    var arrCountries = [];

    this.loaddata = function(){
        var defered = $q.defer();
        $http.get('http://cotocota.local/countries')
            .success(function(respone){
                defered.resolve(respone);
                arrCountries = respone.records;
            })
            .error(function(respone){
                defered.resolve('Error');
            });
        return defered.promise;
    };


    this.getAll = function () {
        return arrCountries;
    };


}]);