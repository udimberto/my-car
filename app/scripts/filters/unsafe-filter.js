'use strict';

angular.module('my-car')
.filter('unsafe', function ($sce) {
    return function (content) {
        return $sce.trustAsHtml(content);
    };
});
