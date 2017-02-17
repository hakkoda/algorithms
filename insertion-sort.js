"use strict";

Array.prototype.insertionSort = function(callback) {
    console.log(`\n      ${this}`);

    var totalCompared = 0;
    var totalExchanged = 0;

    const n = this.length;
    for (let i = 1; i < n; i++) {
        let exchanged = 0;
        let compared = 1;
        for (let j = i; j > 0 && this.less(j, j-1, callback); j--) {
            this.exchange(j, j-1);
            exchanged++;
            if (j !== i) { compared++; }
        }
        totalCompared += compared;
        totalExchanged += exchanged;
        console.log(`${compared} ${exchanged} : ${this}`);
    }

    console.log(`Total Compared:  ${totalCompared}`);
    console.log(`Total Exchanged: ${totalExchanged}`);
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
};

Array.strToArray = function(str) {
    const n = str.length;
    var result = [];
    for (let i = 0; i < n; i++) {
        result.push(str[i]);
    }
    return result;
};


