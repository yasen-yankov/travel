(function () {
    'use strict';

    angular.module('sightsServices', ['ngResource']);

    config.$inject = ['$routeProvider', '$locationProvider', 'uiGmapGoogleMapApiProvider'];

    angular.module('app', [
        // Angular modules 
        'ngRoute',

        // Custom modules 
        'sightsServices',

        // 3rd Party Modules
        'uiGmapgoogle-maps',
		'ui.bootstrap'

    ]).config(config);

    function config($routeProvider, $locationProvider, uiGmapGoogleMapApiProvider) {
    	uiGmapGoogleMapApiProvider.configure({
    		key: 'AIzaSyBjsfMuno8ixAMPDj0xzWm149MnjT9Q8Yk',
    		v: '3.18',
    		libraries: 'weather,geometry,visualization'
    	});

        $routeProvider
			.when('/sights/:sightId', {
				templateUrl: '/views/public/sights/details.html',
				controller: 'sightsController'
			})
			.otherwise({
        		redirectTo: '/'
			});

        $locationProvider.html5Mode(true);
    }
})();