"use strict";

var suite = require("./sort-suite");

/*try {
    process.send({ msg: "test message" });
} catch(err) {
    process.stdout.write(err);
}*/

var runTrials = 10;
var runLength = 5000;
var runMax = 5000;
var runMin = 1;
suite.init(runTrials, runLength, runMax, runMin, false);

