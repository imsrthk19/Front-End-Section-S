console.log('start');

setTimeout(()=>{
    console.log('inside setTimeout');
}, 4000)


// let x = new Date();
let y = new Date().getTime();

// console.log(y); // time will be output in milliseconds, started from 1 January, 1970

while(new Date().getTime()<y+10000){

}

console.log('end');