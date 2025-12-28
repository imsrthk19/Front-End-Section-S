let arr = [23,45,66,84,24];

// const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// 
let sum = arr.reduce((acc, item) =>{
    return acc+item;
})
console.log(sum);