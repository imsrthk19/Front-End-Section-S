const img = document.querySelector('img');

img.setAttribute('src','https://images.pexels.com/photos/259915/pexels-photo-259915.jpeg');
img.style.height= "250px";

img.removeAttribute('src');
img.setAttribute('src','https://images.pexels.com/photos/259915/pexels-photo-259915.jpeg'); 

const para = document.querySelector('p');
para.setAttribute('class','one');
para.setAttribute('class','two');
para.setAttribute('class','one two');

console.log(paragraph.getAttribute('class'));
para.removeAttribute('class');

//classList :- add remove contains toggle

para.classList.add('one');
para.classList.add('two');
para.classList.remove('one');


console.log(para.classList.contains("two"));

para.classList.toggle('one');
para.classList.toggle('one');
para.classList.toggle('one');

const city = document.querySelectorAll('li');

console.log('city');

let x = city.previousElementSibling;
x.style.color = "red";

let y = city.nextElementSibling;
y.style.color = "red";

const parent = city.parentElement;


parent.style.border = "2px solid blue";

console.log(parent.children[4]);

parent.children[4].style.color = "green";

city.parentElement.previousElementSibling.style.color = "red";