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