(function () {
    'use strict';

    angular
        .module('sightsServices')
        .factory('Sights', sightsService);

    sightsService.$inject = ['$resource'];

    function sightsService($resource) {
        return $resource('/api/v1/sights/', {}, {
            query: { method: 'GET', params: {}, isArray: true }
        });
    }
})();