// // select element by class
// let h1class=document.getElementsByClassName('h1cla')

// // select element by Id
// let h1Id=document.getElementById('h1id')

// //select element by tagname
// let h1tag=document.getElementsByTagName('h1');


// // below two are used mainly
// //select the first element of h1

// let h1qu=document.querySelector('h1')

// // select all the element if h1 from the web page
// let h1quAl=document.querySelectorAll('h1')



// let main=document.querySelector("main")
// console.log("done by childNodes  ",main.childNodes)
// console.log("Done by children",main.children)


// // changing the text

// // h1Id.innerText="Hey.. <i>m italic</i>"
// // h1Id.innerHTML="Hey.. <i>m italic</i>"


// // is my h1 has some class?
// const isClass=h1Id.classList.contains("h1cla")
// console.log("h1Id.classList.containsh1cla",isClass)


// // i have to replace or change the my class
// // h1Id.classList.replace("h1cla","h1Class")

// // Toggle or change the class the toggle remove the class if it is persent and add class if not persent

// h1Id.classList.toggle('h1cla')

// // remove the class if persent

const bulb=document.querySelector(".bulb")

const btn=document.querySelector("button");



btn.addEventListener("click",()=>{
//   let flag=bulb.classList.toggle('LightUp')
 bulb.classList.toggle('LightUp')? btn.textContent='OFF': btn.textContent="ON"

})