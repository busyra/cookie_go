define(['./module'], function (controllers) {
	'use strict';
	controllers.controller('HeaderCtrl', ["$scope", "$rootScope", "$log", "$http", "$location", "notifications", "SweetAlert", function ($scope, $rootScope, $log, $http, $location, notifications, SweetAlert) {

		$rootScope.frontPageResults = [];

		$http.get('http://api.vgdb.io/v1/games', { query: $scope.query }).
			then(function(response) {

				$rootScope.frontPageResults = response.data.data;

			}, function(response) {
				$log.error('Error searching database.');
		});



		$scope.random = function() {
			$http.post('http://api.vgdb.io/v1/games/random', {  }).
				then(function(response) {

					// change location to the path of the random game id found
					$location.path('/game/' + response.data.data.id);

				}, function(response) {
					$log.error('Error getting random.');
			});
		}



		$scope.show_terms = function() {

			SweetAlert.swal({
				title: "Terms of Service",
				text: "The terms are, you will buy a lot of cookies, and you will eat them often.",
				type: "success",
				showConfirmButton: true
			});

		}



		$scope.logout = function() {

			// Remove user login information from localStorage
            localStorage.removeItem('user');
            localStorage.removeItem('token');

            // Flip authentication flag to false
            $rootScope.authenticated = false;

            // Remove the current user info from rootscope
            $rootScope.currentUser = null;

            notifications.showSuccess({message: 'Successfully logged out!'});

            $location.path('/');

            // reload window to avoid error
            window.location.reload();
		}

	}]);
});
