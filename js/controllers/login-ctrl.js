define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('LoginCtrl', ["$scope", "$rootScope", "$http", "$window", "$location", "notifications", "locker", "SweetAlert", function ($scope, $rootScope, $http, $window, $location, notifications, locker, SweetAlert) {

        // Set to empty variables to prevent them
        // from ever having a JavaScript
        // value of "undefined"
        $scope.email = '';
        $scope.password = '';



    	$scope.login = function(email, password) {

			// console.log('Trying login...');
			// console.log('Email: ' + email + ', password: ' + password);

			$http
				.post('http://api.vgdb.io/v1/authenticate', { email: email, password: password })
				.success(function(data, status, headers, config) {

					//locker.put("token", data.token);
					$window.localStorage.token = data.token;

					$http
						.get('http://api.vgdb.io/v1/authenticate/user?token=' + localStorage.getItem('token'))
						.success(function(data, status, headers, config) {

							var user = JSON.stringify(data.data);
							localStorage.setItem('user', user);

							$rootScope.authenticated = true;
							$rootScope.currentUser = JSON.parse(user);

							$location.path('user/' + $rootScope.currentUser.username);

							SweetAlert.swal({
								title: "Hi, Again!",
								text: "You are now logged in!",
								type: "success",
								timer: 2000,
								showConfirmButton: false
							});

						})
						.error(function(data, status, headers, config) {
							console.log('Problem logging in user.');
						});

					


					// $http
					// 	.get('http://api.vgdb.io/v1/authenticate/user')
					// 	.success(function(data, status, headers, config) {

					// 		var user = JSON.stringify(data.data);
					// 		localStorage.setItem('user', user);

					// 		$rootScope.authenticated = true;
					// 		$rootScope.currentUser = JSON.parse(user);

					// 		$location.path('user/' + 'skcin7');

					// 		

					// 	})
					// 	.error(function(data, status, headers, config) {
					// 		console.log('Could not get user info for some reason. Try again or contact VGDB staff.')
					// 	});

				})
				.error(function(data, status, headers, config) {
					// Erase the token if the user fails to log in
					//delete $window.localStorage.token;

					// Handle login errors here
					notifications.showError({message: 'Error logging in! Please try again.'});
				});



    	}





    }]);
});
