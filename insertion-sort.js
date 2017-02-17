"use strict";

Array.prototype.insertionSort = function(callback) {
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
        if (exchanged === 0) {
            this.displayArray(`Compared: ${compared}, Exchanged: ${exchanged}`, "\n");
        } else {
            process.stdout.write(`: Compared: ${compared}, Exchanged: ${exchanged}`);
        }
    }

    var info = `\nTotal Compared:  ${totalCompared}, Total Exchanged: ${totalExchanged}`;
    process.stdout.write(info);
};
