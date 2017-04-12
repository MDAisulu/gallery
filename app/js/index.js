var angular = require('angular');

import '../css/style.css';
// var myPlugin = require('hello-world');
var app = angular.module('app', [require('angular-route'), require('angular-resource')]);


app.config(['$routeProvider', '$locationProvider', function($routeProvide, $locationProvider){
  $routeProvide
      .when('/',{
        templateUrl:'../templates/gallery.html',
        controller:'MainCtrl'
      })
      .when('/:album', {
        templateUrl:'../templates/gallery-detail.html',
        controller:'GalleryCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
}]);

app.factory('Photo', [
    '$resource', function($resource) {
        return $resource('../json/:album.:format', {
            album: 'photos', 
            format: 'json',
            apiKey: 'someKeyThis'
        },
        {
            update: {method: 'PUT', params: {album: '@album'}, isArray:true }
        })
    }]);

app.controller('GalleryCtrl',['$scope','$http', '$location', '$routeParams',  'Photo', 
	function($scope, $http, $location, $routeParams, Photo) {
  
  Photo.get('../json/photos.json', function(data) {
  	$scope.photos = data.children;
  	$scope.images = [];
  	$scope.currentAlbum = $scope.photos.filter(function (album) {
  		if($routeParams.album === album.name) {
  			return album.children;
  		}
  	})
 	$scope.currentAlbum.forEach(function (arr) {
            arr.children.forEach(function (arr) {
                $scope.images.push(arr);
        })
	})
  });
}]);

app.controller('MainCtrl',['$scope','$http', '$location', '$routeParams',  'Photo', 
	function($scope, $http, $location, $routeParams, Photo) {
  
	Photo.get('../json/photos.json', function(data) {
	  	$scope.photos = data.children;
	  });
	// var angle = 0;
	// $scope.galleryspin = function(sign) {
	// 	spinner = document.querySelector("#spinner");
	// 	if (!sign) {
	// 		angle += 45; 
	// 	} else {
	// 		angle -= 45;
	// 	}

	// 	spinner.setAttribute("style", "-webkit-transform: rotateY("+angle+"deg); transform: rotateY("+ angle + 
	// 		"deg);");
	// }

	var carousel = document.querySelector('.carousel');
	var container = carousel.querySelector('.carousel-container');
	var pagination = carousel.querySelector('.carousel-pagination');
	var bullet = [].slice.call()
}]);
