"use strict";

var colors = require("colors");

Array.prototype.customSort = function(algorithm, compareCallback) {
    switch (algorithm) {
        case "selection":
            this.selectionSort(compareCallback);
            break;
        case "insertion":
            this.insertionSort(compareCallback);
            break;
    }
};

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
    this.emit("exchange", this, [ index1, index2 ]);
    //this.displayWithHighlight([ index1, index2 ]);
};

Array.strToArray = function(str) {
    const n = str.length;
    var result = [];
    for (let i = 0; i < n; i++) {
        result.push(str[i]);
    }
    return result;
};

Array.prototype.displayArray = function(post, pre) {
    pre = pre === undefined ? "" : pre;
    post = post === undefined ? "" : post;
    var out = "";
    this.forEach(function(item) {
        out += `${item} `;
    });
    process.stdout.write(`: ${pre} : ${out} : ${post}`);
};

Array.displayWithHighlight = function(array, positions) {
    process.stdout.write(": ");
    array.forEach(function(item, index) {
        if (positions.indexOf(index) > -1) {
            process.stdout.write(colors.red(item.toString()) + " ");
        } else {
            process.stdout.write(`${item} `);
        }
    });
    process.stdout.write("\n");
};
