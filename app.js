"use strict";

var spawn = require("child_process").spawn;

var suites = [];
for (let i = 0; i < 5; i++) {
    suites.push(spawnSuite());
}

function spawnSuite() {
    var suite = spawn("node", [ "sort-runner.js" ]);
    /*var suite = spawn("node", [ "sort-runner.js" ], { 
        stdio: [null,null,null,"ipc"] 
    }).on("message", function(msg) { console.log(msg); });*/
    suite.stdout.on("data", function(data) {
        process.stdout.write(data.toString());
    });
    return suite;
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
