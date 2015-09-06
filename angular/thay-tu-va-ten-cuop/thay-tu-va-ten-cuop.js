"use strict";

(function () {

    angular.module('ttnt.thay-tu-va-ten-cuop', [
        'ui.router'
    ])

        .config(["$stateProvider", function ($stateProvider) {

            $stateProvider
                .state('thay-tu-va-ten-cuop', {
                    url: '/thay-tu-va-ten-cuop',
                    templateUrl: "angular/thay-tu-va-ten-cuop/thay-tu-va-ten-cuop.html",
                    controller: "thay-tu-va-ten-cuop.ctrl"
                })
            ;
        }])

        .controller("thay-tu-va-ten-cuop.ctrl", function($scope) {

        })

    ;

})();