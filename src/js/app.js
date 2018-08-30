// app.js
var app = angular.module('employPortalApp', ['ui.router', 'MainCtrl','EmpService']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/emp');
    $urlRouterProvider.when('/', function($location, $state) {
            $state.go('employee');
        });

    $stateProvider

        .state( 'employee', {
                url: '/emp',
                templateUrl: 'views/employeePortal.html',
                controller: 'EmployeeController'
            } );

});