'use strict';

/**
 * Scroll body to top with smooth
 */
angular.module('my-car')
.factory('scroll', function ($document) {
    var factory = {};

    /**
     * Scroll to the top
     *
     * @param {integer} [offset=0] - Offset to the top of the page
     */
    factory.toTop = function (offset) {
        var offsetTop = offset || 0;
        var body = $document.find('body');

        body.scrollTop(offsetTop, 800);
    };

    return factory;
});
