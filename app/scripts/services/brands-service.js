'use strict';

angular.module('my-car')
.factory('brands', function ($q, $http, urls) {
	
	var factory = {};

	factory.get = function (id) {
		var deferred = $q.defer();

		$http.get(urls.BRANDS)
			.then(function (response) {
				if (!id) {
					return deferred.resolve(response.data);
				}
			})
			.catch(function (error) {
				deferred.reject(error);
			});

		return deferred.promise;
	};

	return factory;
});
