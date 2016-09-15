angular.module('tempWDD').directive('eggHeadDirective', function() {
    return {
        restrict: 'E',
        require:'ngModel',
        templateUrl: 'directive/egg-head-directive/egg-head-directive.html',
        link: function(scope, element, attrs, ngModelCtrl) {

            element.on('click', function () {
                ngModelCtrl.$setViewValue(ngModelCtrl.$viewValue + 10);
                scope.$apply();
            });

        }
    };
});
