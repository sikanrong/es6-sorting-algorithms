export class MergeSort {
    constructor(data){
        this.dataAr = data;
    }

    setData(data){
        this.dataAr = data;
    }

    sort(){
        var merge = function (l, r) {
           const merged = [];
           while(l.length > 0 && r.length > 0){
               if(l[0] <= r[0]){
                   merged.push(l.shift());
               }else{
                   merged.push(r.shift());
               }
           }

           while(l.length > 0){
               merged.push(l.shift());
           }

           while(r.length > 0){
               merged.push(r.shift());
           }

           return merged;
        };


        var sort = function (a) {
            if(a.length <= 1){
                return a;
            }


            let right = a;
            let left = right.splice(0, Math.floor(a.length / 2));

            right = sort(right);
            left = sort(left);

            return merge(left, right);
        };

        return sort(this.dataAr.concat()); //clone the data array

    }
}