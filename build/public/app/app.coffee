'use strict'

hshs = angular.module 'hshs', ['ui.bootstrap', 'ui.router','ksSwiper']

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
  .state 'cart', {
    url: '/cart'
    templateUrl: 'views/pages/cart.html'
  }
  .state 'account-profile', {
    url: '/account/profile'
    templateUrl: 'views/pages/account-profile.html'
  }
  .state 'account-VIP', {
    url: '/account/VIP'
    templateUrl: 'views/pages/account-VIP.html'
  }
  .state 'account-password', {
    url: '/account/password'
    templateUrl: 'views/pages/account-password.html'
  }
  .state 'account-shipping-address', {
    url: '/account/shipping-address'
    templateUrl: 'views/pages/account-shipping-address.html'
  }
  .state 'account-favorites', {
    url: '/account/favorites'
    templateUrl: 'views/pages/account-favorites.html'
  }
  $urlRouterProvider.otherwise('/')