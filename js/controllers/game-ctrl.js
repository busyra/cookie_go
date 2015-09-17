define(['./module'], function (controllers) {
	'use strict';
	controllers.controller('GameCtrl', ["$scope", "$http", "$routeParams", "notifications", function ($scope, $http, $routeParams, notifications) {

		// Get initial data about this game
		$http.get('http://api.vgdb.io/v1/games/' + $routeParams.id, {  }).
			then(function(response) {
				$scope.game = response.data.data;
			}, function(response) {
				console.log('error');
		});

		// Get comments about this game
		$http.get('http://api.vgdb.io/v1/games/' + $routeParams.id + '/comments', {  }).
			then(function(response) {
				$scope.comments = response.data.data;
			}, function(response) {
				console.log('error');
		});


		$scope.post_comment = function(gameId, commentBody) {

			$http.post('http://api.vgdb.io/v1/comments', { 'gameId': gameId, 'body': commentBody }).
				then(function(response) {

					notifications.showSuccess({message: 'Your comment has been posted!'});

					$scope.comments.unshift( response.data.data );
					//$scope.comments.push( response.data.data );

					$scope.comment_body = '';

				}, function(response) {
					notifications.showError({message: 'Comment could not be posted.'});
			});
		};





		$scope.delete_comment = function(commentId) {
			$http.delete('http://api.vgdb.io/v1/comments/' + commentId, {  }).
				then(function(response) {

					notifications.showSuccess({message: 'Your comment has been deleted!'});

					// Find the index of this exact comment in the array and remove it
					// var indexof = $scope.comments.indexOf( response.data.data );
					// console.log(indexof);
					// $scope.comments.splice( indexof );

					$scope.remove_element_from_array_based_on_id( $scope.comments, response.data.data );

				}, function(response) {
					notifications.showError({message: 'Comment could not be deleted.'});
			});
		}



		$scope.remove_element_from_array_based_on_id = function(full_array, element_to_delete)
		{
			for(var i = 0; i < full_array.length; i++)
			{
				if(full_array[i].id == element_to_delete.id)
				{
					full_array.splice(i, 1);
				}
			}
		}




	}]);
});
