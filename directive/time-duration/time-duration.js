angular.module('tempWDD').directive('timeDuration', function() {
    return {
        restrict:'E',
        require:'ngModel',
        replace:true,
        templateUrl: 'directive/time-duration/time-duration.html',
        link: function(scope, element, attrs, ngModelCtrl) {

            multiplierMap = {seconds:1, minutes:60, hours:3600, days:86400};
            multiplierTypes = ['seconds', 'minutes', 'hours', 'days'];

            ngModelCtrl.$formatters.push(function (modelValue) {

                var unit = 'minutes', num = 0, i, unitName;

                modelValue = parseInt(modelValue || 0);

                // Figure out the largest unit of time the model value fits into
                // For example, 3600 is 1 hour, but 1800 is 30 minutes
                for ( i = multiplierTypes.length-1; i >= 0; i-- ){

                    unitName = multiplierTypes[i];
                    if ( modelValue % multiplierTypes[unitName] === 0 ) {

                        unit = unitName;
                        break;

                    }

                }

                if ( modelValue ) {

                    num = modelValue / multiplierTypes[unit]

                }

                return {
                    unit:unit,
                    num:num
                }

            });

            ngModelCtrl.$render = function () {
                if ( !$viewValue ) $viewValue = { unit:'hours', num:'1' };

                scope.unit = ngModelCtrl.$viewValue.unit;
                scope.num = ngModelCtrl.$viewValue.num;
            };

            ngModelCtrl.$parsers.push(function (viewValue) {

                var unit = viewValue.unit, num = viewValue.num, multiplier;

                // Remember multiplier was defined before above in the formatters snippet
                multiplier = multiplierMap[unit];

                return num * multiplier;

            });

            scope.$watch('unit + num', function () {
                ngModelCtrl.$setViewValue({ unit:scope.unit, num:scope.num });
            });

        }
    };
});
