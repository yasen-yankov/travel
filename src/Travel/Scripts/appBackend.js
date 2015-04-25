(function () {
    'use strict';

    angular.module('sightsServices', ['ngResource']);

    config.$inject = ['$routeProvider', '$locationProvider'];

	angular.module('appBackend', [
        // Angular modules 
        'ngRoute',

        // Custom modules 
        'sightsServices',

        // 3rd Party Modules
        'gettext'

    ]).config(config);

    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/backend/sights', {
                templateUrl: '/Views/Backend/Sights/list.html',
                controller: 'sightsController'
            });

        $locationProvider.html5Mode(true);
    }

    angular
		.module('appBackend')
		.run(function (gettextCatalog) {
			gettextCatalog.currentLanguage = 'bg';
		});
})();