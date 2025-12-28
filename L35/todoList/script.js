const inp = document.getElementById('inp')
const btn = document.querySelector('#btn');
const taskList = document.querySelector('.taskList');

btn.addEventListener('click',()=>{
    console.log(inp.value);
    const div = document.createElement('div');
    div.classList.add('task');

    let str = ` <div class="section-A">
                    <input type="checkbox">
                    <p>${inp.value}</p>
                </div>
                <div class="section-B">
                    <span>↑</span>
                    <span>&#128465</span>
                    <span>↓</span>
                </div>`
    div.innerHTML=str;
    taskList.append(div);
    inp.value=""
})

// event deligation
taskList.addEventListener('click', (e)=>{
    console.log(e.target.getAttribute('class'));

    if(e.target.getAttribute('class')=="check"){
        e.target.nextElementSibling.classList.toggle('checked')
    }
    else if(e.target.getAttribute('class')=="bin") {
        e.target.parentElement.parentElement.remove();
    }
    else if(e.target.getAttribute('class')=="up arrow") {
        let currTask =  e.target.parentElement.parentElement
        let prevTask = currTask.previousElementSibling
        prevTask.before(currTask);
    }
    else if(e.target.getAttribute('class')=="up arrow") {
        let currTask =  e.target.parentElement.parentElement
        let nextTask = currTask.nextElementSibling
        nextTask.after(currTask);
    }
})