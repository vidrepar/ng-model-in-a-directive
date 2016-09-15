angular.module('tempWDD').directive('clockInput', function() {
    return {
        require: 'ngModel',
        // ngModel instance passed as fourth param to link
        link: function(scope, element, attrs, ngModel) {

            // Initialize the non-angular widget
            var clock = donutClock({
                onInput: view2model,
                el:el[0]
            });

            function view2model(value){
                ngModel.$setViewValue(value);
            }

            // when angular detects a change to the model,
            // we update our widget
            ngModel.$render = function model2view() {
                clock.set(ngModel.$viewValue);
            }

        }
    };
});
