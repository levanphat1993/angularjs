myNinjaApp.service('student',['$http','$q',function($http, $q){

    
    var arrStudent = [];

    this.loaddata = function(){
        var defered = $q.defer();
        $http.get('http://cotocota.local/student')
            .success(function(respone){
                defered.resolve(respone);
                arrStudent = respone.records;
            })
            .error(function(respone){
                defered.resolve('Error');
            });
        return defered.promise;
    };


    this.getAll = function () {
        return arrStudent;
    };


    
    this.getStudentForId = function (id) {

        var student = [];
        
        angular.forEach(arrStudent, function(obj, key){
            if(obj.id == id){
                student.push(obj);
            }

        });

        return student;
    };

   


}]);