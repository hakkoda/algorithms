"use strict";

var aux = [];

Array.prototype.mergeSort = function(callback) {
    aux = [];
    for (let i = 0; i < this.length; i++) {
        aux.push(null);
    }
    this.mergeSortInner(0, this.length-1, callback);
};

Array.prototype.mergeSortInner = function(lo, hi, callback) {
    if (hi <= lo) { return; }
    var mid = lo + Math.floor((hi - lo) / 2);
    this.mergeSortInner(lo, mid, callback);
    this.mergeSortInner(mid+1, hi, callback);
    this.merge(lo, mid, hi);
};

Array.prototype.merge = function(lo, mid, hi, callback) {
    var i = lo;
    var j = mid+1;
    for (let k = lo; k <= hi; k++) {
        aux[k] = this[k];
    }
    for (let k = lo; k <= hi; k++) {
        if (i > mid) {                              // Left half is exhausted, take from right 
            this[k] = aux[j++];                    
        } else if (j > hi) {                        // Right half is exhausted, take from left 
            this[k] = aux[i++]; 
        } else if (aux.less(j, i, callback)) {      // Current key on the right is less than current key on left (take from the right) 
            this[k] = aux[j++]; 
        } else {                                    // Current key on the right is greater than (or equal) to current key on left (take from left) 
            this[k] = aux[i++]; 
        }
    }
};

Array.mergeSortDemo = function(callback) {
    var array = [9,8,7,6,5,4,3,2,1,0];
    array.displayArray("\n", "              start");

    array.merge = function(lo, mid, hi, callback) {
        var i = lo;
        var j = mid+1;
        var temp = [];
        for (let k = lo; k <= hi; k++) {
            aux[k] = this[k];
            temp.push(k);
        }
        Array.displayWithHighlight(aux, temp);
        for (let k = lo; k <= hi; k++) {
            if (i > mid) { 
                this[k] = aux[j++]; 
                Array.displayWithHighlight(this, [ k ]);
            } else if (j > hi) { 
                this[k] = aux[i++]; 
                Array.displayWithHighlight(this, [ k ]);
            } else if (aux.less(j, i, callback)) { 
                this[k] = aux[j++]; 
                Array.displayWithHighlight(this, [ k ]);
            } else { 
                this[k] = aux[i++]; 
                Array.displayWithHighlight(this, [ k ]);
            }
        }
    };


    // sort stuff...
    array.mergeSort();
    
    array.displayArray("\n", "              final");
};
