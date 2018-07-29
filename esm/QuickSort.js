export class QuickSort{
    constructor(data){
        this.dataAr = data.concat();
    }

    sort(){
        const exchange = (i,j) => {
            if(i == j)
                return;
            const _t = this.dataAr[i];
            this.dataAr[i] = this.dataAr[j];
            this.dataAr[j] = _t;
        };

        const partition = (p, r) => {
            var rVal = this.dataAr[r]; //pivot around last value in the subarray

            let i = p - 1;

            for(let j = p; j <= r - 1; j++){
                if(this.dataAr[j] <= rVal){
                    i++;
                    exchange(i, j);
                }
            }

            var q = i + 1;

            exchange(q, r);
            return q;
        };

        const sortRecursive = (p, r) => {
            if(p >= r)
                return;
            var q = partition(p, r); //return pivot element
            sortRecursive(p, q - 1);
            sortRecursive(q + 1, r);

            return this.dataAr; //sorted in-place
        };

        return sortRecursive(0, this.dataAr.length - 1);
    }
}