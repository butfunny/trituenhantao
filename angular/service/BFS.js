"use strict";

(function () {

    angular.module('ttnt.BFS', [
    ])
        .factory("BFS", function() {

            function isIndexOfArray(array, elem, attr){

                for (var i = 0; i < array.length; i++) {
                    var a = array[i][attr];
                    if(checkEqualOfArray(a, elem)) return true;
                }
                return false;
            }


            function checkEqualOfArray (array1, array2){
                for (var i = 0; i < array1.length; i++) {
                    if(array1[i] != array2[i]) return false;
                }
                return true;
            }




            function findWay (array, end, wayToMove){



                if (end.father == null) {
                    return wayToMove;
                }

                for (var i = 0; i < array.length; i++) {
                    var obj = array[i].point;
                    if(checkEqualOfArray(obj, end.point)){
                        wayToMove.push(array[i]);
                        for (var j = 0; j < array.length; j++) {
                            var obj1 = array[j].point;
                            if(checkEqualOfArray(obj1, array[i].father)){
                                return findWay(array, array[j], wayToMove);
                            }
                        }
                    }
                }
            }


            return {
                start: function (start, end, initFunc){

                    var open = [];
                    var checked = [];

                    var wayToMove = [];

                    open.push(start);
                    while(open.length > 0){
                        var X = open.shift();
                        if(checkEqualOfArray(X.point, end)){
                            checked.push(X);
                            findWay(checked, X, wayToMove);
                            wayToMove.push(start);
                            return wayToMove;
                        }else{
                            var kids = initFunc(X.point);

                            checked.push(X);
                            for (var i = 0; i < kids.length; i++) {
                                var kid = kids[i].point;

                                if (!isIndexOfArray(open, kid, "point") && !isIndexOfArray(checked, kid, "point")) {
                                    open.push(kids[i]);
                                }
                            }

                        }

                    }
                }
            };
        })
    ;

})();