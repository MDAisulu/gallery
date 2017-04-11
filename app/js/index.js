var angular = require('angular');

// import '../css/style.css';
// var myPlugin = require('hello-world');
var app = angular.module('app', [require('angular-route')]);


// app.config(['$routeProvider', '$locationProvider', function($routeProvide, $locationProvider){
//   $routeProvide
//       .when('/',{
//         templateUrl:'app/production/templates/gallery.html',
//         controller:'GalleryCtrl'
//       })
//       .when('/photos/:album', {
//         templateUrl:'app/production/templates/photo-category.html',
//         controller:'PhotoDetailCtrl'
//       })
//       .otherwise({
//         redirectTo: '/'
//       });
// }]);
// app.factory('Photo', [
//     '$resource', function($resource) {
//         // debugger;
//         return $resource('app/production/json/:album.:format', {
//             album: 'photos', 
//             format: 'json',
//             apiKey: 'someKeyThis'
//         },
//         {
//             update: {method: 'PUT', params: {album: '@album'}, isArray:true }
//         })
//     }])
// app.controller('GalleryCtrl',['$scope','$http', '$location', 'Photo', function($scope, $http, $location, Photo) {
  
//   $scope.photos = Photo.query();
//   console.log($scope.photos);
// }]);
app.controller('GalleryCtrl',['$scope','$http', '$location', function($scope, $http, $location) {
  
// //  $http.get('production/json/photos.json').success(function(data, status, headers, config) {
// //         $scope.photos = data;
// //         console.log($scope.photos);
// // });

$http({
  method: 'GET',
  url: '../json/photos.json'
}).then(function successCallback(response) {
    $scope.photos = response.data;
  }, function errorCallback(response) {
  });

}]);

// app.controller('PhotoDetailCtrl', ['$scope','$http', '$location', '$routeParams', 'Photo',
//   function($scope, $http, $location, $routeParams, Photo) {
//   $scope.album = $routeParams.album;
//   var url = 'app/production/json/'+$routeParams.album+'.json';
//   Photo.get({album: $routeParams.album}, function(data){
//     $scope.album = data;
//     // console.log($scope.album);
//   });
  
// }]);
