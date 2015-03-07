angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here

  $scope.url = '';
  $scope.data = {};

  $scope.getLinks = function() {
    console.log('getting links')
    Links.getLinks().then(function(res){
      $scope.data.links = res;
      console.log('___________________________________________________')
      console.log(res);
    });
  };
  $scope.getLinks()
});
