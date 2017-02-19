"use strict";

const cluster = require("cluster");
const cpus = require("os").cpus().length;

if (cluster.isMaster) {
    process.stdout.write(`\nMaster ${process.pid} running...`);
    for (let i = 0; i < cpus; i++) {
        cluster.fork();
    }
    cluster.on("exit", (worker, code, signal) => {
        process.stdout.write(`\nworker ${worker.process.pid} died`);
    });
} else {
    process.stdout.write(`\nworker ${process.pid} running...`);
    const suite = require("./sort-suite");
    const runTrials = 30;
    const runLength = 5000;
    const runMax = 5000;
    const runMin = 1;
    suite.init(runTrials, runLength, runMax, runMin);
    process.exit();
}



/*setInterval(function() {
    console.log("running...");
}, 2000);*/


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
