"use strict";

function sort(list)
{
    console.log(`      0 1 2 3 4 5`);
    console.log(`-----------------`);
    console.log(`      ${list}`);
    const n = list.length;
    var exchangeCt = 0;
    var compareCt = 0;
    for (let i = 0; i < n; i++) {
        let min = i;
        let innerCompareCt = 0;
        for (let j = i+1; j < n; j++) {
            compareCt++;
            innerCompareCt++;
            if (less(list[j], list[min]) === -1) {
                min = j;
            }
        }
        console.log(`${i} ${min} : ${list} : ${innerCompareCt} (${n} - ${i+1})`);
        exchange(list, i, min);
        exchangeCt++;
    }
    console.log(`      ${list}`);
    console.log(`Compares: ${compareCt}, Exchanges: ${exchangeCt}`);
}

function less(a, b) {
    var result = 0;
    if (a < b) { result = -1; }
    else if (a > b) { result = 1; }
    return result;
}

function exchange(list, index1, index2) {
    var temp = list[index1];
    list[index1] = list[index2];
    list[index2] = temp;
}

/* var list = [ 1, 2 ];
exchange(list, 0, 1);
console.log(list);
console.log(less(2,1));
console.log(less(2,2));
console.log(less(2,3));*/

var list = [ 6, 5, 4, 3, 2, 1 ];
sort(list);
