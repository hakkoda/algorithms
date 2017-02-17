"use strict";

Array.prototype.selectionSort = function() {
    console.log(`      0 1 2 3 4 5`);
    console.log(`-----------------`);
    console.log(`      ${this}`);
    const n = this.length;
    var exchangeCt = 0;
    var compareCt = 0;
    for (let i = 0; i < n; i++) {
        let min = i;
        let innerCompareCt = 0;
        for (let j = i+1; j < n; j++) {
            compareCt++;
            innerCompareCt++;
            if (this.less(j, min)) {
                min = j;
            }
        }
        console.log(`${i} ${min} : ${this} : ${innerCompareCt} (${n} - ${i+1})`);
        this.exchange(i, min);
        exchangeCt++;
    }
    console.log(`      ${this}`);
    console.log(`Compares: ${compareCt}, Exchanges: ${exchangeCt}`);
};
