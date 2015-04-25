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
        			image: 'http://placekitten.com/' + newWidth + '/350',
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