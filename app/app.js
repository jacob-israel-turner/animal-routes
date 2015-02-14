var app = angular.module('routingApp', ['ngRoute']);

app.config(function($routeProvider){

	$routeProvider
		// Use .when for every route you want to handle
		.when('/', {
			templateUrl: '/app/templates/home/home-view.html', //Loads a template for each route
			controller: 'homeCtrl' //Loads a controller 'by name' for every route
		})
		.when('/test', {
			templateUrl: '/app/templates/test/test-view.html',
			controller: 'testCtrl'
		})
		.when('/items/:itemId', {
			templateUrl: '/app/templates/item/item-view.html',
			controller: 'itemCtrl',
			resolve: { //runs before the route will load, and sets 'animal' to whatever the function returns
				animal: function($route, itemService){
					return itemService.getAnimal($route.current.params.itemId);
				}
			}
		})
		.otherwise({
			redirectTo: '/'
		})

})