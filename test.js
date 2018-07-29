import {HeapSort, BinaryTreeSort, MergeSort} from "./esm";
import {DeterministicUniqId} from 'deterministic-uniqid';
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

test("BinaryTree sort should return a sorted version of the input data", t=>{
    //build source data
    var dig = new DeterministicUniqId(determinism_seed);
    var btData = [];
    testData.forEach(_k => {
        btData.push({
            key: _k,
            value: dig.generateId()
        })
    });

    var bts = new BinaryTreeSort(btData);
    var actual = bts.sort();
    var expected = btData.concat().sort((a,b) => {
        return (a.key < b.key)? -1 : 1;
    }).map(_n => { return _n.value});

    t.deepEqual(actual, expected);
});

test("MergeSort should correctly sort the input", t=>{
    const mgs = new MergeSort(testData);
    var actual = mgs.sort();
    var expected = testData.concat().sort((a,b) => {return (a < b)? -1 : 1});
    t.deepEqual(actual, expected);
});

