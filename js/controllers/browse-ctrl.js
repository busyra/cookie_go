define(['./module'], function (controllers) {
	'use strict';
	controllers.controller('BrowseCtrl', ["$scope", "$rootScope", "$http", function ($scope, $rootScope, $http) {



		$rootScope.cookies = [
			{
				id: 1,
				name: "Blue",
				thumbnailUrl: "/images/cookies/blue.png"
			},
			{
				id: 2,
				name: "Chocolate Glazed",
				thumbnailUrl: "/images/cookies/chocolate-glazed.png"
			},
			{
				id: 3,
				name: "Glazed",
				thumbnailUrl: "/images/cookies/glazed.png"
			},
			{
				id: 4,
				name: "Green",
				thumbnailUrl: "/images/cookies/green.png"
			},
			{
				id: 5,
				name: "Lemon Sprinkles",
				thumbnailUrl: "/images/cookies/lemon-sprinkles.png"
			},
			{
				id: 6,
				name: "Pink Chocolate Drizzled",
				thumbnailUrl: "/images/cookies/pink-chocolate-drizzled.png"
			},
		];




	}]);
});
