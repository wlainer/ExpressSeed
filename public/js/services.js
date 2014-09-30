'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
  .value('version', '0.1')
  .service('ClienteService', ['$http',
    function($http) {
      var urlBase = 'api/clientes';

      this.find = function() {
        return $http.get(urlBase);
      };

      this.findOne = function(id) {
        return $http.get(urlBase + '/_id/' + id);
      };

      this.add = function(data) {
        return $http.post(urlBase, data);
      };

      this.update = function(data) {
        return $http.put(urlBase + '/_id/' + data._id, data);
      };

      this.remove = function(data) {
        return $http.delete(urlBase + '/_id/' + data._id, data);
      };
    }
  ]);