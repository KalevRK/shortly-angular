angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here

  $scope.url = '';
  $scope.data = {};

  $scope.goToLink = function(link) {
    Links.goToLink(link.code);
    window.location = link.url;
  };

  $scope.getLinks = function() {
    Links.getLinks().then(function(res){
      $scope.data.links = res;
    });
  };
  $scope.getLinks()
});
