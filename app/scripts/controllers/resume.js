'use strict';

/**
 * @ngdoc function
 * @name myWebsiteApp.controller:ResumeCtrl
 * @description
 * # ResumeCtrl
 * Controller of the myWebsiteApp
 */
angular.module('myWebsiteApp')
  .controller('ResumeCtrl', function ($scope, $window) {
    $scope.openPDF = function () {
    	$window.open("./CodyLieuResume.pdf");
    }
  });
