var app=angular.module('MyModule', []);

app.controller('MyController',function($scope){
	$scope.name="Ravi kumar guru";
	$scope.clickFunction=function(){
		alert("hello");
	}
});


