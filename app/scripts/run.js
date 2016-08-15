'use strict';

angular.module('my-car')
.run(function ($rootScope, routeChange) {

    /**
     * When some route faile to resolve
     */
    $rootScope.$on('$routeChangeError', routeChange.error);

    // On route change start
    $rootScope.$on('$routeChangeStart', routeChange.start);

    // On location change success
    $rootScope.$on('$routeChangeSuccess', routeChange.success);
});
