/**
 * Defines the main configuration in the application (routes, etc)
 * The routes you see here will be anchors '#/' unless specifically configured otherwise.
 */

define(['./app'], function (app) {
	'use strict';

	return app.config([
		"$routeProvider",
		"$locationProvider",
		"notificationsConfigProvider",
		"jwtInterceptorProvider",
		"$httpProvider",
		"lockerProvider",
	function ($routeProvider, $locationProvider, notificationsConfigProvider, jwtInterceptorProvider, $httpProvider, lockerProvider) {

		$routeProvider
			.when('/', { templateUrl: 'partials/home.html', controller: 'HomeCtrl' })
			.when('/login', { templateUrl: 'partials/login.html', controller: 'LoginCtrl' })
			.when('/signup', { templateUrl: 'partials/signup.html', controller: 'SignupCtrl' })
			.when('/browse', { templateUrl: 'partials/browse.html', controller: 'BrowseCtrl' })
			.when('/subscribe/:id', { templateUrl: 'partials/subscribe.html', controller: 'SubscribeCtrl' })
			;

			// .when('/user/:username', { templateUrl: 'partials/user.html', controller: 'UserCtrl' })
			// .when('/user/:username/games', { templateUrl: 'partials/user.html', controller: 'UserCtrl' })
			// .when('/user/:username/edit', { templateUrl: 'partials/user.html', controller: 'UserCtrl' })
			//.otherwise({ redirectTo: '/' });



		// Whether or not to use the HTML5 History API
		$locationProvider.html5Mode(false);




		// Specify notifications default behavior
		notificationsConfigProvider.setAutoHide(true); // auto hide
		notificationsConfigProvider.setHideDelay(5000); // delay before hide












		jwtInterceptorProvider.tokenGetter = ['jwtHelper', '$http', function(jwtHelper, $http) {
			var token = localStorage.getItem('token');
			var refreshToken = localStorage.getItem('refresh_token');

			if(jwtHelper.isTokenExpired(token))
			{

				console.log('Token is expired...');

				// This is a promise of a JWT token
				return $http({
					url: 'http://api.vgdb.io/v1/authenticate',
					skipAuthorization: false, // whether or not to skip sending JWT
					method: 'POST',
					data: { 
						grant_type: 'refresh_token',
						refresh_token: refreshToken
					}
				}).then(function(response) {
					var token = response.data.token;
					localStorage.setItem('token', token);
					return token;
				});
			}
			else
			{
				console.log('Token is not expired...');
				
				return token;
			}
		}];

		if(localStorage.getItem("token") !== null) {
			$httpProvider.interceptors.push('jwtInterceptor');
		}






		lockerProvider.defaults({
			driver: 'session',
			namespace: 'app',
			separator: '.',
			eventsEnabled: true,
			extend: {}
		});
		




	}]);
});
