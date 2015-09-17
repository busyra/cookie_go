/**
 * Initialization code to run when the app is first
 * started such as checking for login status, etc.
 */

define(['./app'], function (app) {
	'use strict';

	return app.run(["$log", "$rootScope", "$http", function ($log, $rootScope, $http) {

		$log.info('Initializing VGDB...');
		

		if(localStorage.getItem("token") !== null) {

			$http
				.get('http://api.vgdb.io/v1/authenticate/user')
				.success(function(data, status, headers, config) {

					var user = JSON.stringify(data.data);
					localStorage.setItem('user', user);

					$rootScope.authenticated = true;
					$rootScope.currentUser = JSON.parse(user);
				})
				.error(function(data, status, headers, config) {
					console.log('Problem logging in user.');
				});
		}


	}]);
});
