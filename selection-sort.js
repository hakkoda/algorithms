"use strict";

Array.prototype.selectionSort = function(callback) {
    const n = this.length;
    for (let i = 0; i < n; i++) {
        let min = i;
        for (let j = i+1; j < n; j++) {
            if (this.less(j, min, callback)) {
                min = j;
            }
        }
        this.exchange(i, min);
    }
};
