/**
 * loads sub modules and wraps them up into the main module
 * this should be used for top-level module definitions only
 */
define([
	'angular',

	'./controllers/index',
	'./directives/index',
	'./filters/index',
	'./services/index',

	'angular-route',
	'angular-deckgrid',

	'ng-notifications-bar',

	'angular-jwt',
	'angular-locker',

	'ngSweetAlert',


], function (angular) {
	'use strict';

	return angular.module('app', [
		'app.controllers',
		'app.directives',
		'app.filters',
		'app.services',

		'ngRoute',
		'akoenig.deckgrid',
		'ngNotificationsBar',

		'angular-jwt',
		'angular-locker',

		'oitozero.ngSweetAlert',

	])
	.config([function() {
		// Extra config can go here if needed
	}])
	.run(function() {
		// Extra run can go here if needed
	});
});
