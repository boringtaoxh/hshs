'use strict';
var hshs;

hshs = angular.module('hshs', ['ui.bootstrap', 'ui.router']);

hshs.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'views/pages/home.html'
  }).state('products', {
    url: '/products',
    templateUrl: 'views/pages/products.html'
  }).state('product', {
    url: '/product',
    templateUrl: 'views/pages/product.html'
  });
  return $urlRouterProvider.otherwise('/');
});

'use strict';
hshs.controller('indexCtrl', function($scope) {
  return $scope.site = {
    name: '绘事后素',
    desc: '设计师平台'
  };
});

hshs.controller('productsCtrl', function($scope) {
  var categories, designers, i, prices, product, products;
  designers = ['Alexander McQueen', 'Acne Studios', 'Cedric Jacquemyn', 'Christian Louboutin', 'Christopher Kane', 'Ann Demeulemeester', 'Alexander Wang', 'Chi Zhang'];
  categories = ['裙子', '大衣', '针织衫', '夹克', '内衣', '裤子', '衬衣', '西服', 'T恤', '泳装', '其它'];
  prices = ['￥1000以下', '￥1000-￥2000', '￥2000-￥5000', '￥5000-￥10000', '￥10000以上'];
  products = new Array();
  i = 0;
  while (i < 16) {
    product = {
      id: i,
      designer: designers[i % 8],
      category: categories[i % 11],
      price: Math.floor(Math.random() * 20000)
    };
    products.push(product);
    i++;
  }
  $scope.designers = designers;
  $scope.categories = categories;
  $scope.prices = prices;
  $scope.products = products;
  $scope.maxSize = 5;
  $scope.bigTotalItems = 175;
  return $scope.bigCurrentPage = 1;
});

hshs.controller('productCtrl', function($scope) {
  return $scope.status = {
    detail: true,
    size: false,
    shipping: false
  };
});
