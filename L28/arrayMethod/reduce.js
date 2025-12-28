let arr = [23,46,75,12,39,65];

let mapArr = arr.map((item,ind,arr)=>{
    // console.log("hello")
    // console.log(item,  ind , arr)
})

let reduceVal = arr.reduce((acc, item,ind, arr) =>{
    console.log(acc);
    // return ind*5
    return "hello"
});

console.log(reduceVal);