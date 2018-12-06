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

    $interval(update_measurements, 1000, 0);

    function update_measurements()
    {
        var dateTo = new Date(Date.now());
        var dateFrom = new Date(dateTo.getTime());
        dateFrom.setSeconds(dateTo.getSeconds() - 10);
	var value = 0.5;

// 'https://edsdemo.cumulocity.com/measurement/measurements?source=299&dateFrom=2018-12-04T14:20:20Z&dateTo=2018-12-04T14:20:25Z'


        counter++;
        $http.get('https://edsdemo.cumulocity.com/measurement/measurements?source=103&dateFrom=' + dateFrom.toISOString() + '&dateTo=' + dateTo.toISOString())
            .then(function(response) {
                value = response.data.measurements[response.data.measurements.length - 1].c8y_Temperature.T.value;
                vm.text = counter.toString() + ' : ' + value.toString();
                $scope.scale = (value + 10.0) / 20.0;
                //vm.text = response.data;
            }, function(response) {
                vm.text = 'ERROR in http';
            });
        
    }

  });


}());

