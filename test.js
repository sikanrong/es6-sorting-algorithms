import {HeapSort} from "./esm";
import RandomSeed from 'random-seed';
import test from 'ava';

const determinism_seed = "ZeroCoolAcidBurn"; //<- For the real nerds
const testdataSize = 100;
const testdataUpperLimit = 10000000;

var determinism = RandomSeed.create();
determinism.seed(determinism_seed);
var testData = [];

while(testData.length < testdataSize){
    testData.push(determinism(testdataUpperLimit));
}

test("HeapSort will return a sorted array", t => {
    var hs = new HeapSort();
    var sorted = hs.sort(testData);
    var expected = testData.concat().sort((a, b) => {
        return (a > b)? -1 : 1;
    });
    t.deepEqual(sorted, expected);
});

