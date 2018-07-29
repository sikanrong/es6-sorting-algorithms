import {AVLTree} from 'es6-data-structures';

export class BinaryTreeSort {
    constructor(sourceData){
        //sourceData should be an array of objects with integer-based 'key' keys, and 'value' keys of any type.
        this.avlTree = new AVLTree(sourceData);
    }

    sort (){
        var sortedVals = [];
        this.avlTree.traverse(_val => {
            sortedVals.push(_val);
        });

        return sortedVals;
    }
}