import {BinaryHeap} from 'es6-data-structures';

export class HeapSort {
    constructor(sourceAr){
        this.heap;
        if(sourceAr)
            this.heap = new BinaryHeap(sourceAr);
    }

    sort (sourceAr){
        if(sourceAr)
            this.heap = new BinaryHeap(sourceAr)

        var sortedAr = [];
        while(this.heap.heapArray.length > 1){
            sortedAr.push(this.heap.heapArray[0]);
            this.heap.remove(0);
        }
        sortedAr.push(this.heap.heapArray[0]);
        return sortedAr;
    }
}