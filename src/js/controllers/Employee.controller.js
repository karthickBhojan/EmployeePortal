// public/js/controllers/MainCtrl.js
angular.module('MainCtrl', []).controller('EmployeeController', function($scope,EmpService,$timeout) {

    $scope.responseMessage = "";

    $scope.getValue = function(){
        $scope.fetchData();

    	if($scope.selectData == "View"){
    		$scope.view = true;
    		$scope.performDelete = false;
    		$scope.performUpdate = false;
    		$scope.performAdd = false;
            $scope.responseMessage = "";
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
    	if($scope.selectData == "Add"){
    		$scope.performAdd = true;
    		$scope.performUpdate = false;
    		$scope.performDelete = false;
    		$scope.view = false;
    		console.log("create function selected");
    		
    	}
    }

    $scope.fetchData = function(){

    	EmpService.get().then(function(response) {
    			$scope.empList = response.data;
    			console.log(response);
    		});
    }

    $scope.addEmployee = function(){
        if($scope.addName != undefined && $scope.addEmail != undefined && $scope.addPhone != undefined){
        	$scope.reqData = {"name":$scope.addName,"email":$scope.addEmail,"dob":$scope.addDob,
        					  "phone":$scope.addPhone,"designation":$scope.addDesignation};
        	console.log($scope.reqData);
        	EmpService.create($scope.reqData).then(function(response) {
        			$scope.responseMessage = response.data;
        			alert($scope.responseMessage);
                    $scope.fetchData(); 
                    $scope.addEmail = "";
                    $scope.addName = "";
                    $scope.addPhone = "";
                     $scope.addDesignation = "";
                     $scope.addDob = "";  
                     $timeout(function(){
                        $scope.$apply();  
                    },100);
                     
        		});
        }else{
            alert("some fields are empty");
        }
    }

    $scope.updateEmployee = function(id){
        $scope.reqData = {"name":$scope.updateName,"email":$scope.updateEmail,"dob":$scope.updateDob,
    					  "phone":$scope.updatePhone,"designation":$scope.updateDesignation};
    	console.log($scope.reqData);
    	EmpService.update(id,$scope.reqData).then(function(response) {
    			$scope.responseMessage = response.data;
    			alert($scope.responseMessage);
                $scope.selectData = "View";
                $scope.getValue();

    		});
    }	
    $scope.deleteEmployee = function(id){
    	console.log(id);

    	EmpService.delete(id).then(function(response) {
    			$scope.responseMessage = response.data;
    			alert($scope.responseMessage);
                $scope.fetchData();
    			//$scope.$apply();
    		});
    }

});
