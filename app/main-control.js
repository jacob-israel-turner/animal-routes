var app = angular.module('routingApp');

app.controller('mainCtrl', function($scope, $location){
	$scope.$on('$routeChangeSuccess', function(ev, current, prev){
		$scope.route = $location.path();
	})
})