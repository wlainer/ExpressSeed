'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives'
]).
config(function($routeProvider, $locationProvider) {
  $routeProvider.
  when('/clientes/add', {
    templateUrl: 'expose/clientes/create',
    controller: 'ClienteCreateController'
  }).
  when('/clientes/:id/edit', {
    templateUrl: 'expose/clientes/edit',
    controller: 'ClienteEditController'
  }).
  when('/clientes/:id/remove', {
    templateUrl: 'expose/clientes/remove',
    controller: 'ClienteRemoveController'
  }).
  when('/clientes', {
    templateUrl: 'expose/clientes/list',
    controller: 'ClienteListController'
  }).
  otherwise({
    redirectTo: '/clientes'
  });

  $locationProvider.html5Mode(true);
});