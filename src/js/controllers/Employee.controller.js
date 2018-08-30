// public/js/controllers/MainCtrl.js
angular.module('MainCtrl', []).controller('EmployeeController', function($scope,EmpService) {

    
    console.log("EmployeeController loaded ....");
    $scope.responseMessage = "";

    $scope.getValue = function(){
    	console.log($scope.selectData);
        $scope.fetchData();

    	if($scope.selectData == "View"){
    		$scope.view = true;
    		$scope.performDelete = false;
    		$scope.performUpdate = false;
    		$scope.performAdd = false;
    		console.log("view data");
    		
    	}
    	if($scope.selectData == "Delete"){
    		$scope.performDelete = true;
    		$scope.performUpdate = false;
    		$scope.performAdd = false;
    		$scope.view = false;
    		console.log("delete function selected");
    		
    	}
    	if($scope.selectData == "Update"){
    		$scope.performUpdate = true;
    		$scope.performDelete = false;
    		$scope.performAdd = false;
    		$scope.view = false;
    		console.log("update function selected");
    		
    	}
    	if($scope.selectData == "Create"){
    		$scope.performAdd = true;
    		$scope.performUpdate = false;
    		$scope.performDelete = false;
    		$scope.view = false;
    		console.log("update function selected");
    		
    	}
    }

    $scope.fetchData = function(){

    	EmpService.get().then(function(response) {
    			$scope.empList = response.data;
    			console.log(response);
    		});
    }

    $scope.addEmployee = function(){
    	$scope.reqData = {"name":$scope.addName,"email":$scope.addEmail,"dob":$scope.addDob,
    					  "phone":$scope.addPhone,"designation":$scope.addDesignation};
    	console.log($scope.reqData);
    	EmpService.create($scope.reqData).then(function(response) {
    			$scope.addMessgae = response.data;
    			console.log(response);
    		});
    }

    $scope.addEmployee = function(){
        $scope.reqData = {"name":$scope.addName,"email":$scope.addEmail,"dob":$scope.addDob,
    					  "phone":$scope.addPhone,"designation":$scope.addDesignation};
    	console.log($scope.reqData);
    	EmpService.create($scope.reqData).then(function(response) {
    			$scope.addMessgae = response.data;
    			console.log(response);
    		});
    }	
    $scope.deleteEmployee = function(id){
    	console.log(id);

    	EmpService.delete(id).then(function(response) {
    			$scope.responseMessage = response.data;
    			console.log(response);
    			$scope.$apply();
    		});
    }

});
