// Promise is a futuristic variable., used in api calling, database queries, etc.
// Promise state = pending, fulfilled or rejected states can be possible in console.
let pr = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("abc");
//     }, 4000) 
// })
    setTimeout(()=>{
        reject("promise rejected data");
    }, 4000) 
})

// console.log(pr);

console.log("start");

pr 
   .then((x)=>{
    console.log(x) //when promise state is fulfilled , then then block executed. .x ke andar promise resolve data aayega
   })
   .catch(()=>{
    console.log(x);  //when promise state is rejected, then catch block executed.
   })

console.log("end");