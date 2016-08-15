'use strict';

angular.module('my-car')
.controller('HomeController', function ($scope, flow, brands) {
	
	brands.get()
		.then(function (response) {
			$scope.carBrands = response;
		});

    $scope.otherPage = function () {
        flow.goTo('/404');
    };

});
