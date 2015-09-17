require.config({

	baseUrl: "js",

	paths: {
		"angular": "vendor/angular/angular",
		"angular-resource": "vendor/angular-resource/angular-resource",
		"angular-route": "vendor/angular-route/angular-route",
		"domReady": "vendor/requirejs-domready/domReady",

		"angular-deckgrid": "vendor/angular-deckgrid/angular-deckgrid",

		"ng-notifications-bar": "vendor/ng-notifications-bar/dist/ngNotificationsBar.min",

		"angular-jwt": "vendor/angular-jwt/dist/angular-jwt",

		"angular-locker": "vendor/angular-locker/dist/angular-locker",

		"sweetalert": "vendor/sweetalert/dist/sweetalert.min",
		"ngSweetAlert": "vendor/ngSweetAlert/SweetAlert",


	},

	shim: {
		'angular': {
			exports: 'angular'
		},
		'angular-resource': {
			deps: ['angular']
		},
		'angular-route': {
			deps: ['angular']
		},
		'angular-deckgrid': {
			deps: ['angular']
		},
		'angular-jwt': {
			deps: ['angular']
		},
		'angular-locker': {
			deps: ['angular']
		},
		'ngSweetAlert': {
			deps: ['angular', 'sweetalert']
		},

	},

	deps: [
		// kick start application... see bootstrap.js
		"./bootstrap",
		//"./factory.jwtInterceptor",
	]

});