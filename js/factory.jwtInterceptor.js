define([
	'app'
], function (app) {
	'use strict';

    return app.factory('jwtInterceptor', function (){

          return {
              nameOfMethod: function () {
                  return "Is this working";
              }
          }
        }
    );

});
