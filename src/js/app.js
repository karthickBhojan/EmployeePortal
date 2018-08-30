// app.js
var app = angular.module('employPortalApp', ['ui.router', 'MainCtrl','EmpService']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/employeePage');
    $urlRouterProvider.when('/', function($location, $state) {
            $state.go('employee');
        });

    $stateProvider

        .state( 'employee', {
                url: '/employeePage',
                templateUrl: 'views/employeePortal.html',
                controller: 'EmployeeController'
            } );

});