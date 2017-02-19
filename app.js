"use strict";

require("./common-array");
require("./insertion-sort");
require("./selection-sort");

var events = require("events");
var util = require("util");
util.inherits(Array, events.EventEmitter);

var runLength = 5000;
var runMax = 5000;
var runMin = 1;
var lists = generateLists(runLength, runMax, runMin);
runCustomSorts(lists, false);

function generateLists(length, max, min) {
    var result = [
        { algorithm: "insertion", list: [] },
        { algorithm: "selection", list: [] }
    ];

    var master = [];
    for (let i = 0; i < length; i++) {
        master.push( Math.floor( Math.random() * (max - min) ) + 1 );
    }

    var resultLength = result.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < resultLength; j++) {
            result[j].list.push(master[i]);
        }
    }

    return result;
}

function runCustomSorts(lists, verbose) {
    for (let i = 0; i < lists.length; i++) {
        if (verbose) {
            lists[i].list.on("exchange", Array.displayWithHighlight);
        }
        console.log(`\nStart ${lists[i].algorithm} sort`);
        var start = Date.now();
        lists[i].list.customSort(lists[i].algorithm);
        var end = Date.now();
        console.log(`\n${lists[i].algorithm}: ` + String(end - start));
    }
}

//setInterval(function() { }, 5000);
/*
[
    { word: "cat", toString() { return this.word; } }
   ,{ word: "jet", toString() { return this.word; } }
   ,{ word: "dog", toString() { return this.word; } }
   ,{ word: "hat", toString() { return this.word; } }
   ,{ word: "car", toString() { return this.word; } }
   ,{ word: "bat", toString() { return this.word; } }
].customSort(algorithm, function(index1, index2) {
    return this[index1].word < this[index2].word ? true : false;
});*/

//Array.strToArray("string").customSort(algorithm);
