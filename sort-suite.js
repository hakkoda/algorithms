(function(suite) {
    "use strict";

    require("./common-array");
    require("./insertion-sort");
    require("./selection-sort");

    var totalInsertion = 0;
    var totalSelection = 0;
    var minInsertion = 1000;
    var maxInsertion = 0;
    var minSelection = 1000;
    var maxSelection = 0;
    var avgInsertion = 0;
    var avgSelection = 0;
    var lists = null;

    suite.init = function(trials, length, max, min) {
        lists = generateLists(trials, length, max, min);
        runCustomSorts(lists);

        for (let i = 0; i < lists.length; i++) {
            if (lists[i].algorithm === "insertion") {
                totalInsertion += lists[i].runtime;
                if (lists[i].runtime > maxInsertion) { maxInsertion = lists[i].runtime; }
                if (lists[i].runtime < minInsertion) { minInsertion = lists[i].runtime; }
            } else if (lists[i].algorithm === "selection") {
                totalSelection += lists[i].runtime;
                if (lists[i].runtime > maxSelection) { maxSelection = lists[i].runtime; }
                if (lists[i].runtime < minSelection) { minSelection = lists[i].runtime; }
            }
        }
        var avgInsertion = totalInsertion / (lists.length/2);
        var avgSelection = totalSelection / (lists.length/2);

        output(`\nTrials: ${trials}, List length: ${length}`);
        output(`\nSelection - avg: ${avgSelection}, min: ${minSelection}, max: ${maxSelection}`);
        output(`\nInsertion - avg: ${avgInsertion}, min: ${minInsertion}, max: ${maxInsertion}`);
    };

    function output(msg) {
        process.stdout.write(msg);
    }

    function generateLists(trials, length, max, min) {
        var result = [];

        // Create list in random order
        for (let i = 0; i < trials; i++) {
            let master = [];
            let list1 = [];
            let list2 = [];
            for (let j = 0; j < length; j++) {
                let rand = Math.floor( Math.random() * (max - min) ) + 1;
                list1.push(rand);
                list2.push(rand);
            }
            result.push({ algorithm: "selection", list: list1, runtime: 0 });
            result.push({ algorithm: "insertion", list: list2, runtime: 0 });
        }

        // Create list ordered 1 to n (ascending order)
        let list1 = [];
        let list2 = [];
        for (let j = 0; j < length; j++) {
            list1.push(j);
            list2.push(j);
        }
        result.push({ algorithm: "selection", list: list1, runtime: 0 });
        result.push({ algorithm: "insertion", list: list2, runtime: 0 });

        // Create list ordered n to 1 (reverse order)
        list1 = [];
        list2 = [];
        for (let j = length; j > 0; j--) {
            list1.push(j);
            list2.push(j);
        }
        result.push({ algorithm: "selection", list: list1, runtime: 0 });
        result.push({ algorithm: "insertion", list: list2, runtime: 0 });

        return result;
    }

    function runCustomSorts(lists) {
        var start = 0;
        var end = 0;
        for (let i = 0; i < lists.length; i++) {
            start = Date.now();
            lists[i].list.customSort(lists[i].algorithm);
            end = Date.now();
            lists[i].runtime = end - start;
        }
    }

})(module.exports);
