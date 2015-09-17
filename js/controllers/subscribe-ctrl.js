define(['./module'], function (controllers) {
	'use strict';
	controllers.controller('SubscribeCtrl', ["$scope", "$rootScope", "$routeParams", function ($scope, $rootScope, $routeParams) {

		
		//$rootScope.cookies

		console.log('root parameter: ' + $routeParams.id);



		$scope.get_cookie_info = function() {

		}

	}]);
});
