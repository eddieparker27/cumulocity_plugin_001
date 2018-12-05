(function () {
  'use strict';

  angular
    .module('myapp.hello')
    .controller('HelloController', function ($scope, $http) {

    var vm = this;


    $scope.canvasWidth = 400;
    $scope.canvasHeight = 400;
    $scope.dofillcontainer = true;
    $scope.scale = 1;
    $scope.materialType = 'lambert';

    $http.get('https://edsdemo.cumulocity.com/measurement/measurements?source=299&dateFrom=2018-12-04T14:20:20Z&dateTo=2018-12-04T14:20:25Z')
        .then(function(response) {
            vm.text = response.data;
        }, function(response) {
            vm.text = 'ERROR in http';
        });

    //vm.text = 'hello, world twice';

  });

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

