var globalVariable="ravi kumar guru global";
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

app.controller('initlization', ['$scope','$window', function($scope,$window){
	//function call when complete view loaded in DOM
	$scope.$on('$viewContentLoaded', function(){
		alert($window.globalVariable);
	});
	//fucntion call when DOM content is ready
	angular.element(document).ready(function(){
		alert($window.globalVariable);
	});
	//init test from DOM using ng-init directory
	$scope.initFunction=function(){
		$scope.secondFunction();

	};
	$scope.secondFunction=function(){
		//alert("first1");
	}
	$scope.callFromOutside=function(){
		alert("successfull call from outside angular");
	}
}])
app.filter("makeUpperCase",makeUpperCase);
function makeUpperCase(){
	return function(item){
		return item.toUpperCase();
	}
}



document.addEventListener("DOMContentLoaded",function(event){
	console.log("dom content loaded");
	document.getElementById("btncall").addEventListener("click", function(){
		var scopeRef=angular.element(document.getElementsByName("innerController")).scope();
		scopeRef.$apply(function(){
			scopeRef.callFromOutside();
		})	
	});

})

