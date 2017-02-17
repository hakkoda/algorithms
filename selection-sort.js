"use strict";

Array.prototype.selectionSort = function(callback) {
    const n = this.length;
    var totalExchanged = 0;
    var totalCompared = 0;
    for (let i = 0; i < n; i++) {
        let min = i;
        let innerCompareCt = 0;
        for (let j = i+1; j < n; j++) {
            totalCompared++;
            innerCompareCt++;
            if (this.less(j, min, callback)) {
                min = j;
            }
        }
        this.exchange(i, min);
        process.stdout.write(`: i: ${i}, min: ${min}, compares: ${innerCompareCt}`);
        totalExchanged++;
    }

    var info = `Total Compared:  ${totalCompared}, Total Exchanged: ${totalExchanged}`;
    this.displayArray(info, "\n");
};
