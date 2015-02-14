var app = angular.module('routingApp');

app.service('itemService', function($q, $timeout
	){
	var items = {
		dog: {
			name: 'Clifford',
			color: 'Red',
			size: 'Big'
		},
		giraffe: {
			name: 'Lenny',
			color: 'Yellow-ish?',
			size: 'Tall'
		},
		horse: {
			name: 'Fred',
			color: 'Black',
			size: 'Miniature'
		}
	}

	this.getAnimal = function(id){
		var deferred = $q.defer();
		$timeout(function(){
			if(items[id]){
				deferred.resolve(items[id])
			} else {
				deferred.reject(new Error('Animal does not exist!'))
			}
		}, 1000);
		return deferred.promise;
	}

})