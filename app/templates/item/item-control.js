var app = angular.module('routingApp');

app.controller('itemCtrl', function($scope, $routeParams, animal){

	$scope.animal = animal
	$scope.animalType = $routeParams.itemId;

})