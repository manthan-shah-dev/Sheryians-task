const qu1 = document.querySelector("#title1");
const btn2 = document.querySelector("#btn2")
const inpt3 = document.querySelector("#username3");
const btn3 = document.querySelector("#btn3")
const p3 = document.querySelector('#output3')

const p4 = document.querySelector("#message4")
const btn4 = document.querySelector("#btn4")


const list5 = document.querySelector("#list5")
const btn5 = document.querySelector("#btn5")

const card = document.querySelector(".card")
const btn6 = document.querySelector("#btn6")

const btn71 = document.querySelector("#btn71")
const btn72 = document.querySelector("#btn72")
const h17 = document.querySelector("#h17")


const p8 = document.querySelector('#p8')
const text = document.querySelector('textarea')

const btn9 = document.querySelector("#btn9")
const inp9 = document.querySelector(".input9")
const ul9 = document.querySelector(".ul9")

const img = document.querySelector('#image')
const btn10 = document.querySelector('#next')
const mode = document.querySelector('#mode')

const btn12 = document.querySelector('#btn12')
const student12 = document.querySelector('#students');
const name12 = document.querySelector('#name')
const course12 = document.querySelector('#course')

const imgurl = ['https://picsum.photos/300/200?random=1',
    'https://picsum.photos/300/200?random=2',
    'https://picsum.photos/300/200?random=3',
    'https://picsum.photos/300/200?random=4',
    'https://picsum.photos/300/200?random=5']

let userobj = []
let i = 0
let light = true
qu1.textContent = "Welcome to JavaScript DOM"

btn2.addEventListener('click', () => {
    btn2.style.backgroundColor = 'lightblue'
})
btn3.addEventListener('click', () => {
    p3.textContent = inpt3.value;
})

var hide = true

btn4.addEventListener("click", () => {
    if (hide) {
        p4.style.display = 'none';
        hide = false;
    }
    else {
        p4.style.display = 'block';
        hide = true;

    }


})

btn5.addEventListener('click', () => {
    let li = document.createElement('li')
    li.innerText = 'Banana';

    list5.appendChild(li)
})

btn6.addEventListener('click', () => {
    card.remove();
})

btn71.addEventListener('click', () => {
    let a = Number(h17.textContent);
    h17.innerText = a + 1;
})
btn72.addEventListener('click', () => {
    let a = Number(h17.textContent);
    h17.innerText = a - 1;
})

text.addEventListener('input', () => {
    let value = text.value.length
    p8.textContent = `Character ${value}`
})

btn9.addEventListener('click', () => {
    if (inp9.value === '') return
    let li = document.createElement('li')
    li.textContent = inp9.value
    ul9.appendChild(li)
    inp9.value = ''
})

btn10.addEventListener('click', () => {

    img.src = imgurl[i];
    i++;
    if (i === imgurl.length - 1) i = 0
})

mode.addEventListener('click', () => {
    if (light) {
        document.body.style.backgroundColor = 'Black'
        document.body.style.color = 'white';
        light = false
    }
    else {
        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black';
        light = true
    }
})


userinsert = () => {
    student12.innerHTML = ''

    userobj.forEach((em, index) => (
        student12.innerHTML += `------------------
    <br>
       <p> ${em.name}</p>
       <p> ${em.course}</p>
        <button onclick="deleteCard(${index})" id='del'>delete</button>


    <br>
      `
    ))

    student12.innerHTML += `------------------
    <br>
       <h5>Total Students: ${userobj.length}</h5>

    <br>`
}
btn12.addEventListener('click', () => {
    let name = name12.value
    let course = course12.value
    name12.value = ''
    course12.value = ''
    if (name === '' && course === '') return
    let obj = {
        name,
        course
    }

    userobj.push(obj)
    userinsert()
})

const deleteCard = (index) => {
    userobj.splice(index, 1)
    userinsert()
}
