(function () {
  'use strict';

  angular
    .module('myapp.hello')
    .controller('HelloController', function ($scope, $http, $interval) {

    var vm = this;
    var counter = 0;

    $scope.canvasWidth = 400;
    $scope.canvasHeight = 400;
    $scope.dofillcontainer = true;
    $scope.scale = 1;
    $scope.materialType = 'lambert';
    $scope.dx = 0.0;
    $scope.dy = 0.0;
    $scope.dz = 0.0;

    $interval(update_measurements, 1000, 0);

    function update_measurements()
    {
        var dateTo = new Date(Date.now());
        var dateFrom = new Date(dateTo.getTime());
        dateFrom.setSeconds(dateTo.getSeconds() - 10);
        var dx = 0;
        var dy = 0;
        var dz = 0;

// 'https://edsdemo.cumulocity.com/measurement/measurements?source=299&dateFrom=2018-12-04T14:20:20Z&dateTo=2018-12-04T14:20:25Z'


        counter++;
        $http.get('https://edsdemo.cumulocity.com/measurement/measurements?source=299&dateFrom=' + dateFrom.toISOString() + '&dateTo=' + dateTo.toISOString())
            .then(function(response) {
                dx = response.data.measurements[response.data.measurements.length - 1].c8y_AccelerationMeasurement.dx.value;
                dy = response.data.measurements[response.data.measurements.length - 1].c8y_AccelerationMeasurement.dy.value;
                dz = response.data.measurements[response.data.measurements.length - 1].c8y_AccelerationMeasurement.dz.value;
                vm.text = counter.toString() + ' dx=' + dx.toString() + ' dy=' + dy.toString() + ' dz=' + dz.toString();
                $scope.dx = dx;
                $scope.dy = dy;
                $scope.dz = dz;
                //vm.text = response.data;
            }, function(response) {
                vm.text = 'ERROR in http';
            });
        
    }

  });


}());

