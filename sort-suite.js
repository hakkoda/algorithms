(function(suite) {
    "use strict";

    require("./common-array");
    require("./insertion-sort");
    require("./selection-sort");
    require("./shell-sort");

    suite.init = function(options) {
        var testSets = generateTestSets(options);
        var result = runCustomSorts(testSets, options);
        return result;
    };

    function runCustomSorts(testSets, options) {
        var result = {};
        const tests = testSets.length;

        // Populate the result with an object for each type of algorithm.
        for (let i = 0; i < options.algorithms.length; i++) {
            result[options.algorithms[i]] = { avg: 0, min: 100000, max: 0, total: 0 };
        }

        for (let i = 0; i < tests; i++) {
            // Run each test set.
            for (let j = 0; j < testSets[i].length; j++) {

                // Start a test, record time.
                let testSet = testSets[i][j];
                let start = Date.now();
                testSet.list.customSort(testSet.algorithm);
                let end = Date.now();
                testSet.runtime = end - start;

                // Record aggregate results.
                let runtime = testSet.runtime;
                let targetResult = result[testSet.algorithm];
                targetResult.total += runtime;
                if (testSet.runtime > targetResult.max) { targetResult.max = runtime; }
                if (testSet.runtime < targetResult.min) { targetResult.min = runtime; }
            }
        }

        // Record run time averages.
        for (let i = 0; i < options.algorithms.length; i++) {
            let targetResult = result[options.algorithms[i]];
            let total = targetResult.total;
            let avg = total / tests;
            targetResult.avg = avg;
        }

        return result;
    }

    function generateTestSets(options) {
        var result = [];

        // Create a collections of test sets based on the number of trial to run.
        for (let i = 0; i < options.trials; i++) {
            let testSet = [];
            for (let j = 0; j < options.algorithms.length; j++) {
                testSet.push({
                    algorithm: options.algorithms[j],
                    list: [],
                    runtime: 0
                });
            }
            result.push(testSet);
        }

        // Populate the test set lists with random numbers.
        for (let i = 0; i < result.length; i++) {
            for (let j = 0; j < options.size; j++) {
                let rand = Math.floor( Math.random() * (options.max - options.min) ) + 1;
                for (let k = 0; k < result[i].length; k++) {
                    result[i][k].list.push(rand);
                }
            }
        }

        return result;
    }

})(module.exports);
