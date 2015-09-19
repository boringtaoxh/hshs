'use strict'

hshs = angular.module 'hshs', ['ui.bootstrap', 'ui.router']

hshs.config ($stateProvider, $urlRouterProvider, $locationProvider) ->  
  $locationProvider.html5Mode true
  $stateProvider
  .state 'home', {
    url: '/'
    templateUrl: 'views/pages/home.html'
  }
  $urlRouterProvider.otherwise('/')