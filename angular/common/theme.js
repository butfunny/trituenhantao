"use strict";

(function () {

    angular.module('ttnt.theme', [
    ])
        .directive("loadingMini", function() {
            return {
                restrict: "E",
                templateUrl:"angular/common/loading-mini.html",
                link : function($scope,elem,attrs){
                    $scope.submitting = true;
                }

            };
        })


        .directive("buttonLoading", function() {
            return {
                restrict: "A",
                link: function($scope, elem, attrs) {
                    var oldHtml;
                    var changed = false;
                    var sepaIndex = attrs.buttonLoading.indexOf(":");
                    var size = "lg";
                    var watch;
                    if (sepaIndex > -1) {
                        watch = attrs.buttonLoading.substring(0, sepaIndex);
                        size = attrs.buttonLoading.substring(sepaIndex + 1);
                    } else {
                        watch = attrs.buttonLoading;
                    }

                    $scope.$watch(watch, function(value) {
                        if (value) {
                            changed = true;
                            oldHtml = elem.html();
                            elem.html(angular.element("<i class='fa " + (size=="lg" ? "fa-lg " : "") + "fa-spinner fa-pulse'></i>"));
                        } else if (changed) {
                            changed = false;
                            elem.html(oldHtml);
                        }
                    });
                }
            };
        })

    ;

})();