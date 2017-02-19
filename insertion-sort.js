"use strict";

Array.prototype.insertionSort = function(callback) {
    const n = this.length;
    for (let i = 1; i < n; i++) {
        for (let j = i; j > 0 && this.less(j, j-1, callback); j--) {
            this.exchange(j, j-1);
        }
    }
};
