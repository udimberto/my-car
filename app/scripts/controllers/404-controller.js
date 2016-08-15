'use strict';

angular.module('my-car')
.controller('404Controller', function ($scope, flow) {
	
    $scope.goBack = function () {
        flow.goBack();
    };

});
