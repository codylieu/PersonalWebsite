'use strict';

/**
 * @ngdoc function
 * @name myWebsiteApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the myWebsiteApp
 */
angular.module('myWebsiteApp')
  .controller('ProjectsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
