async function fun(){ //async function is a keyword that is used before to make a function async, it always returns a Promise.
    // let x = "hello";
    // return x;
}

// let y = fun()
// console.log(y); 

let pr = new Promise((resolve, reject) => {
    setTimeout(()=>{
        let arr = [33, 44, 55, 66];
        resolve(arr)
    }, 4000)
})

// pr
//     .then((x)=>{
//         console.log(x);
//     })


console.log('start');

async function fetchData(){
    let x = await pr;  //Promise can be handled using await. //async function is always used bin await.
    //await code does not work till Promise state is pending.
    console.log(x);
}

fetchData();
console.log('end');
