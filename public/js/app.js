var app = angular.module('AirplaneApp', ["AirplanesControllers", 'ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/404');

    $stateProvider
        .state('airplanes', {
            url: '/',
            templateUrl: 'app/airplanes.html',
            controller: 'AirplanesControllers'
        })
        .state('about', {
            url: '/airplanes/:id',
            templateUrl: 'app/about.html',
            controller: 'AirplaneInfoCtrl'
        })
        .state('404', {
            url: '/404',
            templateUrl: 'app/404.html'
        });

    $locationProvider.html5Mode(true);

}]);
