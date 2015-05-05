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