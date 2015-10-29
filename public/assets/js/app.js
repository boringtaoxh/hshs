'use strict';
var hshs;

hshs = angular.module('hshs', ['ui.bootstrap', 'ui.router', 'ksSwiper']);

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
  }).state('cart', {
    url: '/cart',
    templateUrl: 'views/pages/cart.html'
  });
  return $urlRouterProvider.otherwise('/');
});

'use strict';
hshs.controller('indexCtrl', function($scope) {
  return $scope.site = {
    name: '绘事后素',
    desc: '设计师平台'
  };
  $scope.swiper = {};
  $scope.next = function() {
    $scope.swiper.slideNext();
  };
  $scope.onReadySwiper = function(swiper) {
    swiper.on('slideChangeStart', function() {
      console.log('slideChangeStart');
    });
  };
});

hshs.controller('productsCtrl', function($scope) {
  var categories, designers, i, priceranges, prices, product, products, texts;
  designers = ['Alexander McQueen', 'Acne Studios', 'Cedric Jacquemyn', 'Christian Louboutin', 'Christopher Kane', 'Ann Demeulemeester', 'Alexander Wang', 'Chi Zhang'];
  categories = ['裙子', '大衣', '针织衫', '夹克', '内衣', '裤子', '衬衣', '西服', 'T恤', '泳装', '其它'];
  priceranges = ['￥1000以下', '￥1000-￥2000', '￥2000-￥5000', '￥5000-￥10000', '￥10000以上'];
  prices = ['34', '23', '123', '54', '56'];
  texts = ['Phillip Lim是华裔美籍设计师Phillip Lim和他的生意伙伴Wen Zhou于2005年创立的品牌，品牌服装凭低调但不失奢华感的设计荣获各大时装奖项之余，更从中取得良好的口碑。'];
  products = new Array;
  i = 0;
  while (i < 16) {
    product = {
      id: i,
      designer: designers[i % 8],
      category: categories[i % 11],
      pricerange: Math.floor(Math.random() * 20000),
      price: prices[i % 8],
      text: texts
    };
    products.push(product);
    i++;
  }
  $scope.designers = designers;
  $scope.categories = categories;
  $scope.prices = prices;
  $scope.priceranges = priceranges;
  $scope.products = products;
  $scope.texts = texts;
  $scope.maxSize = 6;
  $scope.fourItem = 4;
  $scope.threeItem = 3;
  $scope.oneItem = 1;
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
