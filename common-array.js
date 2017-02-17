"use strict";

Array.prototype.less = function(index1, index2, compare) {
    if (compare !== undefined) {
        return compare.call(this, index1, index2);
    } else {
        var result = false;
        if (this[index1] > this[index2]) { result = false; }
        if (this[index1] < this[index2]) { result = true; }
        return result;
    }
};

Array.prototype.exchange = function(index1, index2) {
    var temp = this[index1];
    this[index1] = this[index2];
    this[index2] = temp;
};

Array.strToArray = function(str) {
    const n = str.length;
    var result = [];
    for (let i = 0; i < n; i++) {
        result.push(str[i]);
    }
    return result;
};
