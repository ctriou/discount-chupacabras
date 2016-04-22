'use strict';

/**
 * @ngdoc overview
 * @name scrumSiteApp
 * @description
 * # scrumSiteApp
 *
 * Main module of the application.
 */
angular
  .module('scrumSiteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'ctrl'
      })
      .when('/chupacabras', {
        templateUrl: 'views/chupacabras.html',
        controller: 'ChupacabrasCtrl',
        controllerAs: 'ctrl'
      })
      .when('/shop', {
        templateUrl: 'views/shop.html',
        controller: 'ShopCtrl',
        controllerAs: 'ctrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'ctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .controller('AppCtrl', function ($scope, $location) {
    $scope.$location = $location;
  });
