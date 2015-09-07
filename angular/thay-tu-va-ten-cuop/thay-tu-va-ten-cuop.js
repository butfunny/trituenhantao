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

        .controller("thay-tu-va-ten-cuop.ctrl", function($scope, BFS) {

            $scope.getNumber = function(num) {
                return new Array(num);
            };
            $scope.startThink = false;

            $scope.start = function(){
                $scope.startThink = true;
                $scope.way = BFS.start(start, end, initPoint).reverse();
            };

            $scope.$watch("way", function(value) {
                if(value) {
                    $scope.thinkDone = true;
                    $scope.toanTu = null;
                    $scope.node = $scope.way[0].point;

                }
            });

            var index = 1;




            $scope.next = function (){
                $scope.toanTu = $scope.way[index].arc;
                $scope.node = $scope.way[index].point;

                if(checkEqualOfArray($scope.node, end)){
                    $scope.done = true;
                }

                index++;
            };

            $scope.run = function () {

                $scope.toanTu = $scope.way[1].arc;
                $scope.node = $scope.way[1].point;
                index++;

            };

            var interval;


            $scope.auto = function (){
                $scope.automatic = true;
                index++;

                $scope.toanTu = $scope.way[index].arc;
                $scope.node = $scope.way[index].point;

                if(checkEqualOfArray($scope.node, end)){
                    $scope.done = true;
                }

                index++;


                interval = setInterval(function () {

                    if($scope.done){
                        clearInterval(interval);
                    }

                    $scope.$apply(function () {
                        $scope.next();
                    });


                } , 1500 )



            };


            $scope.prev = function () {
                index = index - 2;
                $scope.toanTu = $scope.way[index].arc;
                $scope.node = $scope.way[index].point;

                if(checkEqualOfArray($scope.node, end)){
                    $scope.done = true;
                }

                index++;

            };




            $scope.restart = function (){
                $scope.thinkDone = true;
                $scope.toanTu = null;
                $scope.node = $scope.way[0].point;
                $scope.done = false;
                index = 1;
                $scope.automatic = false;
            };


            function checkEqualOfArray (array1, array2){
                for (var i = 0; i < array1.length; i++) {
                    if(array1[i] != array2[i]) return false;
                }
                return true;
            }


            var start = {
                father: null,
                point: [3,3,false]
            };

            var end = [3,3,true];


            function initPoint (point) {
                var kids = [];
                if (checkTT(point) != null){
                    var child = {
                        father: point,
                        point: checkTT(point),
                        arc: "TT"
                    };
                    kids.push(child);
                }


                if (checkCC(point) != null){
                    var child = {
                        father: point,
                        point: checkCC(point),
                        arc: "CC"
                    };
                    kids.push(child);
                }

                if (checkTC(point) != null){
                    var child = {
                        father: point,
                        point: checkTC(point),
                        arc: "TC"
                    };
                    kids.push(child);
                }


                if (checkT(point) != null){
                    var child = {
                        father: point,
                        point: checkT(point),
                        arc: "T"
                    };
                    kids.push(child);
                }

                if (checkC(point) != null){
                    var child = {
                        father: point,
                        point: checkC(point),
                        arc: "C"
                    };
                    kids.push(child);
                }



                return kids;

            }





            function checkTT (point) {

                var pointAcross = [3 - point[0], 3- point[1], !point[2]];

                var afterTTPoint = [point[0] - 2, point[1]];
                var afterTTPointAcross = [pointAcross[0] + 2 , pointAcross[1], pointAcross[2]];

                if(!isLose(afterTTPoint) && !isLose(afterTTPointAcross)) return afterTTPointAcross;
                else return null;
            }

            function checkCC (point) {

                var pointAcross = [3 - point[0], 3- point[1], !point[2]];

                var afterCCPoint = [point[0], point[1] - 2];
                var afterCCPointAcross = [pointAcross[0] , pointAcross[1]  + 2, pointAcross[2]];

                if(!isLose(afterCCPoint) && !isLose(afterCCPointAcross)) return afterCCPointAcross;
                else return null;
            }


            function checkTC (point) {

                var pointAcross = [3 - point[0], 3- point[1], !point[2]];

                var afterTCPoint = [point[0] - 1, point[1] - 1];
                var afterTCPointAcross = [pointAcross[0] + 1 , pointAcross[1]  + 1, pointAcross[2]];

                if(!isLose(afterTCPoint) && !isLose(afterTCPointAcross)) return afterTCPointAcross;
                else return null;

            }


            function checkT (point) {

                var pointAcross = [3 - point[0], 3- point[1], !point[2]];

                var afterTCPoint = [point[0] - 1, point[1]];
                var afterTCPointAcross = [pointAcross[0] + 1 , pointAcross[1], pointAcross[2]];

                if(!isLose(afterTCPoint) && !isLose(afterTCPointAcross)) return afterTCPointAcross;
                else return null;

            }

            function checkC (point) {

                var pointAcross = [3 - point[0], 3- point[1], !point[2]];

                var afterTCPoint = [point[0], point[1]  - 1];
                var afterTCPointAcross = [pointAcross[0]  , pointAcross[1] + 1, pointAcross[2]];

                if(!isLose(afterTCPoint) && !isLose(afterTCPointAcross)) return afterTCPointAcross;
                else return null;


            }

            function isLose(point){
                if(point[0] < 0 || point [1] < 0) return true;
                if(point[0] < point[1] && point[0] != 0) return true;
                else return false;

            }
        })

    ;

})();