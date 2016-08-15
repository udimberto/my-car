'use strict';

angular.module('my-car')
.factory('routeChange', function ($rootScope, $document, $timeout,
    flow, scroll, loader) {

    var factory     = {};
    var bodyContent = $document.find('content');

    /**
     * On route change start
     */
    factory.start = function () {
        loader.start('Loading...');

        bodyContent.addClass('loading');
    };

    /**
     * On route change success
     */
    factory.success = function () {
        scroll.toTop();

        $timeout(function () {
            bodyContent.removeClass('loading');
            loader.stop('Loading...');
        }, 800);
    };


    /**
     * On route change error
     */
    factory.error = function () {
        $timeout(function () {
            loader.error('<strong>Ooops</strong>!<br />Something\'s wrong.<br />Sorry.');
        }, 1000);

        flow.goBack();
    };

    return factory;
});
