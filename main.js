const arr=[1,2,3,4,5,6];
// Map

Array.prototype.Mymap=function(cb){
    let arr=[];
    console.log("LN6:",this);
    for(let i=0;i<this.length;i++){
        arr.push(cb(this[i]))
    }
    return arr;
}

const arr2=arr.Mymap(function (x){
    return x*2;
});

console.log("LN17:",arr2);

// Filter

Array.prototype.myfilter=function(cb){
    let arr=[];
    for(let i=0;i<this.length;i++){
    if(cb(this[i])===true){
        arr.push(this[i]);
    }
}
    return arr;

}

const number=arr.myfilter((x)=>{
    if(x%2===0){
        return true;
    }
})
console.log("LN37",number);


// Filter Map
Array.prototype.filterMap= function(cb1,cb2){
    let arr=[];
    let arr2=[];
    console.log("LN44",this);
    for(let i=0;i<this.length;i++){
        if(cb1(this[i])===true){
            arr.push(this[i]);
        }
    }
    for(let i=0;i<arr.length;i++ ){
        arr2.push(cb2(arr[i]));
    }
    return arr2;
}
function even(x){
    if(x%2===0){
        return true;
    }
}

function twice(x){
    return 2*x;
}

const number2=arr.filterMap(even,twice);

console.log("LN67",number2);