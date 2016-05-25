var app=angular.module('MyModule', []);

app.controller('MyController',function($scope){
	$scope.friends=[{name:"ravi"},{name:"anand"},{name:"manoj"},{name:"rajdeep"},{name:"gautam"}];
$scope.letter="g";
});

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

app.filter("makeUpperCase",makeUpperCase);
function makeUpperCase(){
	return function(item){
		return item.toUpperCase();
	}
}