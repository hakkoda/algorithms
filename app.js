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
    
    const algorithms = [
        "selection", 
        "insertion",
        "shell"
    ];
    
    var result = suite.init({ 
        trials: 10,
        size: 10000,
        max: 10000,
        min: 1,
        algorithms: algorithms
    });
    
    for (let i = 0; i < algorithms.length; i++) {
        let targetResult = result[algorithms[i]];
        let algorithm = algorithms[i];
        let avg = targetResult.avg;
        let min = targetResult.min;
        let max = targetResult.max;
        output(`\n${algorithm}- avg: ${avg}, min: ${min}, max: ${max}`);
    }

    process.exit();

    function output(msg) {
        process.stdout.write(msg);
    }
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
