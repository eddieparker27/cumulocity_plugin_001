(function () {
  'use strict';

  angular
    .module('myapp.hello')
    .controller('HelloController', ['$scope', function ($scope) {

    $scope.canvasWidth = 400;
    $scope.canvasHeight = 400;
    $scope.dofillcontainer = true;
    $scope.scale = 1;
    $scope.materialType = 'lambert';

  }]);

//HelloController);

//  function HelloController() {
//    var vm = this;
//
//    vm.text = 'hello, world';

//    webglContainer.canvasWidth = 400;
//    webglContainer.canvasHeight = 400;
//    webglContainer.dofillcontainer = true;
//    webglContainer.scale = 1;
//    webglContainer.materialType = 'lambert';

//    }

}());

