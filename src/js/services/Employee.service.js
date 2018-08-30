// public/js/services/NerdService.js
angular.module('EmpService', []).factory('EmpService', ['$http', function($http) {

    return {
        // call to get all nerds
        get : function() {
            return $http.get('/api/employee/getall');
        },

                // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new nerd
        create : function(reqData) {
            return $http.post('/api/employee/add', reqData);
        },

        update : function(id,reqData) {
            return $http.put('/api/employee/update/' +id, reqData);
        },

        // call to DELETE a nerd
        delete : function(id) {
            return $http.delete('/api/employee/' + id);
        }
    }       

}]);
