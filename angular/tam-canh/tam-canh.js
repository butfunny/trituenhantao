"use strict";

(function () {

    angular.module('ttnt.tam-canh', [
        'ui.router'
    ])

        .config(["$stateProvider", function ($stateProvider) {

            $stateProvider
                .state('tam-canh', {
                    url: '/tam-canh',
                    templateUrl: "angular/tam-canh/tam-canh.html",
                    controller: "tam-canh.ctrl"
                })
            ;
        }])
        
        .controller("tam-canh.ctrl", function($scope) {
            
        })

    ;

})();