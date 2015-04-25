(function () {
    'use strict';

    angular
        .module('app')
        .controller('mapController', mapController);

    mapController.$inject = ['$scope', '$location', '$routeParams', 'uiGmapGoogleMapApi'];

    function mapController($scope, $location, $routeParams, uiGmapGoogleMapApi) {
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

    		var marker = {
    			id: 1,
    			latitude: 43.6195287,
    			longitude: 26.0216849,
    			title: 'Крепост Червен',
    			location: 'Иваново, област Русе',
    			type: 'Туристическа атракция',
    			accessible: 'Достъп с автомобил',
    			icon: 'http://lorempixel.com/20/20/',
    			options: {
    				labelContent: 'Крепост Червен'
    			},
    			infoWindow: {
    				show: false
    			}
    		};

    		$scope.sightId = $routeParams.sightId;
    		if ($scope.sightId) {
    			$scope.map.infoWindow.show = true;
    		}

    		$scope.markers = [];
    		$scope.markers.push(marker);
    	});
    }
})();