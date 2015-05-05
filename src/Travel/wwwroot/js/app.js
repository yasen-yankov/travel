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
(function () {
	'use strict';

	angular
        .module('appBackend')
        .controller('sightsController', sightsController);

    sightsController.$inject = ['$scope', 'Sights']; 

    function sightsController($scope, Sights) {
    	$scope.sights = Sights.query();
    }
})();
(function () {
    'use strict';

    angular
        .module('app')
        .controller('mapController', mapController);

    mapController.$inject = ['$scope', '$location', '$routeParams', 'uiGmapGoogleMapApi', 'Sights'];

    function mapController($scope, $location, $routeParams, uiGmapGoogleMapApi, Sights) {
    	$scope.sights = Sights.query();

    	var styles = [
		  {
		  	"featureType": "administrative.country",
		  	"elementType": "labels.text",
		  	"stylers": [
		      { "visibility": "off" }
		  	]
		  }, {
		  	"featureType": "administrative.neighborhood",
		  	"elementType": "labels.text",
		  	"stylers": [
		      { "visibility": "off" }
		  	]
		  }, {
		  	"featureType": "administrative.province",
		  	"elementType": "labels.text",
		  	"stylers": [
		      { "visibility": "off" }
		  	]
		  }, {
		  	"featureType": "administrative.locality",
		  	"elementType": "labels.text.fill",
		  	"stylers": [
		      { "color": "#3e6848" },
		      { "visibility": "on" }
		  	]
		  }, {
		  	"featureType": "administrative.province",
		  	"elementType": "geometry",
		  	"stylers": [
		      { "visibility": "off" }
		  	]
		  }, {
		  	"featureType": "road.highway",
		  	"elementType": "geometry",
		  	"stylers": [
		      { "visibility": "simplified" }
		  	]
		  }
    	];

    	uiGmapGoogleMapApi.then(function (maps) {
    		$scope.map = {
    			center: {
    				latitude: 42.8469071,
    				longitude: 25.6139095
    			},
    			zoom: 8,
    			options: {
    				mapTypeId: google.maps.MapTypeId.ROADMAP,
    				minZoom: 7,
    				disableDefaultUI: true,
    				styles: styles
    			},
    			infoWindow: {
    				show: false
    			}
    		};

    		$scope.markers = [];
    		

    		for (var i = 0; i < $scope.sights.length; i++) {
    			var marker = {
    				id: $scope.sights[i].Id,
    				latitude: $scope.sights[i].Latitude,
    				longitude: $scope.sights[i].Longitude,
    				title: $scope.sights[i].Name,
    				location: 'Иваново, област Русе',
    				type: 'Туристическа атракция',
    				accessible: 'Достъп с автомобил',
    				templateParameter: $scope.sights[i],
    				partOfUnesco: $scope.sights[i].PartOfUnesco,
    				icon: 'http://lorempixel.com/20/20/',
    				options: {
    					labelContent: $scope.sights[i].Name
    				},
    				infoWindow: {
    					show: false
    				}
    			};

    			$scope.markers.push(marker);
    		}

    		$scope.sightId = $routeParams.sightId;
    		if ($scope.sightId) {
    			$scope.map.infoWindow.show = true;
    		}
    	});
    }
})();
(function () {
	'use strict';

	angular
        .module('app')
        .controller('sightsController', sightsController);

	sightsController.$inject = ['$scope', '$location', '$modal', 'Sights'];

	function sightsController($scope, $location, $modal, Sights) {
		$scope.sights = Sights.query();

    	var modalInstance = $modal.open({
    		templateUrl: 'sightDetailsModal.html',
    		windowTemplateUrl: 'sightDetailsModalWindow.html',
    		controller: 'sightDetailsModalController'
    	});

    	modalInstance.result.then(function () {
    	}, function () {
    		$location.path("/");
    	});
	}

	angular
        .module('app')
        .controller('sightDetailsModalController', function ($scope, $location, $modalInstance) {
        	$scope.myInterval = 5000;
        	var slides = $scope.slides = [];
        	$scope.addSlide = function () {
        		var newWidth = 1205 + slides.length;
        		slides.push({
        			image: 'http://lorempixel.com/' + newWidth + '/350',
        			text: ['More', 'Extra', 'Lots of', 'Surplus'][slides.length % 4] + ' ' +
					  ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
        		}); 
        	};

        	for (var i = 0; i < 4; i++) {
        		$scope.addSlide();
        	}

			$scope.close = function () {
				$modalInstance.close("");
				$location.path("/");
			};
		});
})();
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