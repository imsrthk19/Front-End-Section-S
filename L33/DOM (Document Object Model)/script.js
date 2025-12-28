//const head = document.getElementById('head');
const head = document.querySelector('#head')  // query selector selects the first element
console.log(head);

head.style.border = "2px solid red";
head.style.color = "blue";
head.style.width = "300px"

// const paragraph = document.getElementsByTagName('p');
const paragraph = document.querySelectorAll('p')
console.log(paragraph);

for(let para of paragraph){
    para.style.border = "2px solid blue";
}

// const spclPara = document.getElementsByClassName('spclPara');
const spclPara = document.querySelectorAll('.spclPara'); //query selector all select the full list of elements
console.log(spclPara);

for(let para of spclPara){
    para.style.border = "5px solid green";
    para.style.color = "grey";
} 
