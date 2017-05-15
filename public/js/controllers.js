var controllers = angular.module('AirplanesControllers', ['AirplaneServices']);

controllers.controller('AirplanesControllers', ['$scope', 'Airplane', function($scope, Airplane) {
    Airplane.showAllPlanes().then(function(res) {
        $scope.airplanes = res.data;
    }).catch(function(err) {
        console.log(err);
    });
}]);

controllers.controller('AirplaneInfoCtrl', ['$scope', '$stateParams', 'Airplane', function($scope, $stateParams, Airplane) {
    $scope.airplane = {};
    Airplane.showPlane($stateParams.id).then(function(res) {
        $scope.airplane = res.data;
    }).catch(function(err) {
        console.log(err);
    });
}])
