"use strict";

Array.prototype.shellSort = function(callback) {
    const n = this.length;
    var h = 1;
    while (h < n/3) {
        h = 3*h + 1;
    }
    while(h >= 1) {
        for (let i = h; i < n; i++) {
            for (let j = i; j >= h && this.less(j, j-h, callback); j -= h) {
                this.exchange(j, j-h);
            }
        }
        h = Math.floor(h/3);
    }
};

Array.shellSortDemo = function(callback) {
    var array = [9,8,7,6,5,4,3,2,1,0];
    array.displayArray("\n", "              start");
    const n = array.length;
    var h = 1;
    while (h < n/3) {
        h = 3*h + 1;
    }
    while(h >= 1) {
        for (let i = h; i < n; i++) {
            for (let j = i; j >= h && array.less(j, j-h, callback); j -= h) {
                array.exchange(j, j-h);
                process.stdout.write(`: h: ${h}, i: ${i}, j: ${j} `);
                Array.displayWithHighlight(array, [ j, j-h ]);
            }
        }
        h = Math.floor(h/3);
    }
    array.displayArray("\n", "              final");
};
