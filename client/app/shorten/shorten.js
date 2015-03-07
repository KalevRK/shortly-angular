angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $newUrl = '';
  $scope.link = {};
  $scope.validate = function(str){

    return JSON.stringify({url: str});
  };
  $scope.addLink = function(url){

    Links.addLink(url);
  };
});
