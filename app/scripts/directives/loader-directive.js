'use strict';

angular.module('my-car')
.directive('loader', function ($document, loader) {
    return {
        restrict   : 'E',
        templateUrl: 'app/templates/directives/loader-directive-template.html',
        scope      : {},
        controller : function ($scope) {
            $scope.activities = loader.activities;
            $scope.errors     = loader.errors;

            $scope.clearError = function (error) {
                loader.clearError(error);
            };
        },
    };
});
