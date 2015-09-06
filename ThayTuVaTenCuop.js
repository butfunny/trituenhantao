

function checkEqualOfArray (array1, array2){
    for (var i = 0; i < array1.length; i++) {
        if(array1[i] != array2[i]) return false;
    }
    return true;
}


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


function isIndexOfArray(array, elem, attr){

    for (var i = 0; i < array.length; i++) {
        var a = array[i][attr];
        if(checkEqualOfArray(a, elem)) return true;
    }
    return false;
}





var open = [];
var checked = [];
var start = {
    father: null,
    point: [3,3,false]
};

var end = [3,3,true];

open.push(start);
while(open.length > 0){
    var X = open.shift();
    if(checkEqualOfArray(X.point, end)){
        checked.push(X);
        findWay(checked, X);
        console.log(start.point);
        break;
    }else{
        var kids = initPoint(X.point);

        checked.push(X);
        for (var i = 0; i < kids.length; i++) {
            var kid = kids[i].point;

            if (!isIndexOfArray(open, kid, "point") && !isIndexOfArray(checked, kid, "point")) {
                open.push(kids[i]);
            }
        }

    }

}


function findWay (array, end){


    if (end.father == null) {
        return;
    }

    for (var i = 0; i < array.length; i++) {
        var obj = array[i].point;
        if(checkEqualOfArray(obj, end.point)){
            console.log(array[i].arc+ " -> " + array[i].point );
            for (var j = 0; j < array.length; j++) {
                var obj1 = array[j].point;
                if(checkEqualOfArray(obj1, array[i].father)){
                    return findWay(array, array[j]);
                }
            }
        }
    }
}







