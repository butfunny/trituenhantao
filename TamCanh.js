
function checkEqualOfArray (array1, array2){
    for (var i = 0; i < array1.length; i++) {
        if(array1[i] != array2[i]) return false;
    }
    return true;
}



function isIndexOfArray(array, elem, attr){

    for (var i = 0; i < array.length; i++) {
        var a = array[i][attr];
        if(checkEqualOfArray(a, elem)) return true;
    }
    return false;
}


function findWay (array, end){


    if (end.father == null) {
        return;
    }

    for (var i = 0; i < array.length; i++) {
        var obj = array[i].node;
        if(checkEqualOfArray(obj, end.node)){
            console.log(array[i].arc+ " -> " + array[i].node );
            for (var j = 0; j < array.length; j++) {
                var obj1 = array[j].node;
                if(checkEqualOfArray(obj1, array[i].father)){
                    return findWay(array, array[j]);
                }
            }
        }
    }
}


function initNode(node) {
    var kids = [];
    var posOf0 = node.indexOf(0);


    if(up(node, posOf0) != null){
        var childUp = {
            father: node,
            arc: "up",
            node : up(node, posOf0)
        };
        kids.push(childUp);
    }

    if(down(node, posOf0) != null){
        var childDown = {
            father: node,
            arc: "down",
            node : down(node, posOf0)
        };
        kids.push(childDown);
    }

    if(left(node, posOf0) != null){
        var childLeft = {
            father: node,
            arc: "left",
            node : left(node, posOf0)
        };
        kids.push(childLeft);
    }


    if(right(node, posOf0) != null){
        var childRight = {
            father: node,
            arc: "right",
            node : right(node, posOf0)
        };
        kids.push(childRight);
    }

    return kids;

}



function up (node, posOf0) {

    var nodeClone = cloneNode(node);

    if (posOf0 != 6 && posOf0 != 7 && posOf0 != 8){

        nodeClone[posOf0] = nodeClone[posOf0 + 3];
        nodeClone[posOf0 + 3] = 0;
        return nodeClone;

    } else {
        return null;
    }


}

function down (node, posOf0) {

    var nodeClone = cloneNode(node);


    if (posOf0 != 0 && posOf0 != 1 && posOf0 != 2){

        nodeClone[posOf0] = nodeClone[posOf0 - 3];
        nodeClone[posOf0 - 3] = 0;
        return nodeClone;

    } else {
        return null;
    }

}


function left (node, posOf0) {

    var nodeClone = cloneNode(node);


    if (posOf0 != 2 && posOf0 != 5 && posOf0 != 8){

        nodeClone[posOf0] = nodeClone[posOf0 + 1];
        nodeClone[posOf0 + 1] = 0;
        return nodeClone;

    } else {
        return null;
    }

}

function right (node, posOf0) {

    var nodeClone = cloneNode(node);


    if (posOf0 != 0 && posOf0 != 3 && posOf0 != 6){

        nodeClone[posOf0] = nodeClone[posOf0 - 1];
        nodeClone[posOf0 - 1] = 0;
        return nodeClone;

    } else {
        return null;
    }

}



function cloneNode (node) {
    var nodeCloned = [];
    for (var i = 0; i < node.length; i++) {
        nodeCloned.push(node[i]);
    }

    return nodeCloned;
}







var open = [];
var checked = [];

var start = {
    father: null,
    node: [1, 4, 3, 7 , 0 , 6 , 5, 8, 2]
};

var end = [1, 2, 3 , 4, 5, 6 , 7 , 8, 0];

initNode(start.node);

open.push(start);
while(open.length > 0){

    var X = open.shift();
    if(checkEqualOfArray(X.node, end)){
        checked.push(X);
        findWay(checked, X);
        console.log(start.node);
        break;
    }else{
        var kids = initNode(X.node);
        checked.push(X);
        for (var i = 0; i < kids.length; i++) {
            var kid = kids[i].node;

            if (!isIndexOfArray(open, kid, "node") && !isIndexOfArray(checked, kid, "node")) {
                open.push(kids[i]);
            }
        }
    }


}




