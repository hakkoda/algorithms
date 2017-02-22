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

Array.selectionSortDemo = function(callback) {
    var array = [9,8,7,6,5,4,3,2,1,0];
    array.displayArray("\n", "start");
    const n = array.length;
    for (let i = 0; i < n; i++) {
        let min = i;
        for (let j = i+1; j < n; j++) {
            if (array.less(j, min, callback)) {
                min = j;
            }
        }
        array.exchange(i, min);
        process.stdout.write("     ");
        Array.displayWithHighlight(array, [ i, min ]);
    }
    array.displayArray("\n", "final");
};
