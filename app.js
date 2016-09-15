angular.module('tempWDD', ['ui.bootstrap','ui.router','ngAnimate']);

angular.module('tempWDD').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('clock-example', {
        url: '/clock',
        templateUrl: 'partial/clock-example/clock-example.html'
    });
    $stateProvider.state('time-duration-partial', {
        url: '/time-duration',
        templateUrl: 'partial/time-duration-partial/time-duration-partial.html'
    });
    $stateProvider.state('egg-head', {
        url: '/egg-head',
        templateUrl: 'partial/egg-head/egg-head.html'
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/time-duration');

});

angular.module('tempWDD').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
