'use strict'

hshs = angular.module 'hshs', ['ui.bootstrap', 'ui.router']

hshs.config ($stateProvider, $urlRouterProvider, $locationProvider) ->  
  $locationProvider.html5Mode true
  $stateProvider
  .state 'home', {
    url: '/'
    templateUrl: 'views/pages/home.html'
  }
  .state 'products', {
    url: '/products'
    templateUrl: 'views/pages/products.html'
  }
  .state 'product', {
    url: '/product'
    templateUrl: 'views/pages/product.html'
  }
  $urlRouterProvider.otherwise('/')