"use strict";

Array.prototype.customSort = function(algorithm, compareCallback) {
    process.stdout.write("\n");
    this.displayArray(`start ${algorithm} sort`, "\n");
    switch (algorithm) {
        case "selection":
            this.selectionSort(compareCallback);
            break;
        case "insertion":
            this.insertionSort(compareCallback);
            break;
    }
    process.stdout.write("\n");
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
    this.displayWithHighlight([ index1, index2 ]);
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
    //post = post === undefined ? "\n" : `${post}\n`;
    post = post === undefined ? " " : `${post} `;
    var out = "";
    this.forEach(function(item) {
        out += `${item} `;
    });
    process.stdout.write(`${pre}: ${out}: ${post}`);
};

Array.prototype.displayWithHighlight = function(positions) {
    process.stdout.write("\n: ");
    this.forEach(function(item, index) {
        if (positions.indexOf(index) > -1) {
            process.stdout.write(`\x1b[31m${item}\x1b[0m `);
        } else {
            process.stdout.write(`${item} `);
        }
    });
};
