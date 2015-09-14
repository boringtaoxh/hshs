'use strict';
var hshs;

hshs = angular.module('hshs', []);

hshs.controller('indexCtrl', [
  '$scope', function($scope) {
    return $scope.site = {
      name: '绘事后素',
      desc: '设计师平台'
    };
  }
]);
