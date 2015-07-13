'use strict';

// Helpers

var removerItem = function(arr, item) {
   var index = arr.indexOf(item);
   if (index > -1) {
      arr.splice(index, 1);
   }
};

var cbFindSuccess = function(data, $scope) {
   $scope.clientes = data.data;
   $scope.msg = 'List complete';
   console.log(data);
};
var cbFindError = function(error, $scope) {
   $scope.status = 'Unable to load clientes: ' + error.message;
};

// Controllers
angular.module('controllers.Clientes', []).
controller('ClienteCreateController', ['$scope', '$http',
   function($scope, $http) {

      var url = 'api/cliente/';
      var method = 'POST';

      $scope.message = 'Create Cliente';
      $scope.showContact = false;

      $scope.addContact = function() {
         $scope.showContact = !$scope.showContact;
         if ($scope.showContact) {
            cliente.contato = [];
         }
      }

      $scope.create = function(cliente) {
         $http({
            url: url,
            method: method,
            data: cliente
         }).
         success(function(data) {
            console.log(data);
            $scope.data = data;
            $scope.msg = 'Cliente ' + cliente.nome + ' cadastrado com sucesso';
         }).
         error(function(err) {
            console.log(err);
            $scope.msg = 'Cliente não pode ser cadastrado';
         });
      };

   }
]).
controller('ClienteListController', ['$scope', '$http', 'ClienteService',
   function($scope, $http, ClienteService) {

      var Cliente = ClienteService;
      Cliente.find().then(function(data) {
         cbFindSuccess(data, $scope);
      }, function(err) {
         cbFindError(err, $scope);
      });

      $scope.atualizarClientes = function(clientes) {
         $scope.clientes = clientes;
         console.log('atualizarClientes clientes', $scope.clientes);
      };
   }
]).
controller('ClienteEditController', ['$scope', '$http', '$routeParams',
   function($scope, $http, $routeParams) {
      $scope.showContact = false;
      $scope.contact = {};

      $scope.addContact = function() {
         $scope.cliente.contato.push($scope.contact);
         $scope.contact = {};
      }

      $scope.editContact = function(index) {
         $scope.showContact = true;
         $scope.contact = $scope.cliente.contato[index];
      }

      $scope.removeContact = function(index) {
         $scope.cliente.contato.splice(index, 1);
      }

      var id = $routeParams.id;
      var url = 'api/clientes/_id/' + id;
      var method = 'GET';

      $scope.message = 'Update Cliente';
      // Pega os valores do cliente a ser alterada
      $http({
         url: url,
         method: method
      }).
      success(function(data) {
         console.log(data);
         $scope.cliente = data;
      }).
      error(function(err) {
         console.log(err);
      });

      $scope.update = function(cliente) {
         var method = 'PUT';

         $http({
            url: url,
            method: method,
            data: cliente
         }).
         success(function(data) {
            console.log(data);
            $scope.data = data;
            $scope.message = 'Cliente ' + cliente.nome + ' update successfully';
         }).
         error(function(err) {
            console.log(err);
            $scope.msg = 'Cliente cant be updated';
         });
      };
   }
]).
controller('ClienteRemoveController', ['$scope', '$http', '$routeParams',
   function($scope, $http, $routeParams) {
      var method = 'GET';
      var id = $routeParams.id;
      var url = '/api/clientes/_id/' + id;
      $http({
            method: method,
            url: url
         })
         .success(function(data) {
            $scope.cliente = data;
            $scope.msg = 'About ' + $scope.cliente.name;
         })
         .error(function(data) {
            $scope.msg = 'Error in get cliente';
         });

      $scope.remove = function(cliente) {
         var method = 'DELETE';
         var url = '/api/clientes/_id/' + cliente._id;
         console.log(url);
         if (confirm('Are you sure?')) {
            $http({
                  method: method,
                  url: url
               })
               .success(function(data) {
                  $scope.msg = 'Cliente ' + cliente.nome + ' deleted successfully';
               })
               .error(function(data) {
                  $scope.msg = 'ERROR on DELETE';
               });

         }
      };
   }
]);