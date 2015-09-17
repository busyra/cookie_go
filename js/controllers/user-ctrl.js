define(['./module'], function (controllers) {
	'use strict';
	controllers.controller('UserCtrl', ["$scope", "$routeParams", "$http", function ($scope, $routeParams, $http) {

		// Get initial data about this user
		$http.get('http://api.vgdb.io/v1/users/' + $routeParams.username, {  }).
			then(function(response) {
				$scope.user = response.data.data;
			}, function(response) {
				$log.info('error');
		});
		


	}]);
});
