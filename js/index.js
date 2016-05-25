var app=angular.module('MyModule', []);

app.controller('MyController', ['$scope', function($scope){
	$scope.friends=[{name:"ravi"},{name:"anand"},{name:"manoj"},{name:"rajdeep"},{name:"gautam"}];
	$scope.letter="r";
}])
app.filter("nameStartWithA",nameStartWithA);

function nameStartWithA(){

	return function(items,letter){
		var array=[];
		var newletterMatch=new RegExp(letter,i);
		for(var i=0;i<items.length;i++)
		{
			
			if(newletterMatch.test(items[i].name.substring(0,1)))
			{
				array.push(items[i]);
			}
		}
		return array;
	}
}

app.controller('initlization', ['$scope', function($scope){
	
	$scope.$on('$viewContentLoaded', function(){
		alert("Dom Content Loaded");
	});
	angular.element(document).ready(function(){
		alert("document ready function in angularjs")
	});

	$scope.initFunction=function(){
			$scope.secondFunction();
			$scope.thirdFunction();
	};
	$scope.secondFunction=function(){
		//alert("first1");
	}
	$scope.thirdFunction=function(){
		//alert("second");
	}
}])
app.filter("makeUpperCase",makeUpperCase);
function makeUpperCase(){
	return function(item){
		return item.toUpperCase();
	}
}


