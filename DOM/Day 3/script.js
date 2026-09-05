// // attributes and Properties
// // --setAttribute , getAttribute , removeAttribute , hasAttribute;
// // with data -* name
// // input.value(property ,curret state) vs input.getAttribute("value")

// const h3 = document.querySelector("#id1")

// // getAttribute
// console.log(h3.getAttribute("class"))
// // setAttribute
// h3.setAttribute('width', "200")

// console.log("it is add from the dom by using the set attributes", h3.getAttribute("width"))

// // removeAttribute

// h3.removeAttribute("class")
// console.log("the class attributes is remove by using the removeAttribute", h3.removeAttribute("class"))

// // hasAttribute it return the boolean value if the attribute are persent then it return the true and not persent then it return the false;

// console.log('The class attribute is removed using removeAttribute(). Since the class attribute is no longer present, hasAttribute() returns false:', h3.hasAttribute('class'))

// console.log('removeAttribute() ka use karke class attribute remove kar diya hai. Ab class attribute present nahi hai, isliye hasAttribute() false return karega:', h3.hasAttribute('class'));




// Attributes and Properties

// setAttribute, getAttribute, removeAttribute, hasAttribute
// data-* attributes
// input.value (Property / Current State)
// input.getAttribute("value") (Attribute / Initial Value)

const h3 = document.querySelector("#id1");

// getAttribute
// getAttribute() ka use attribute ki value get karne ke liye hota hai.

console.log(
    "getAttribute() ka use karke class attribute ki value get ki:",
    h3.getAttribute("class")
);

// setAttribute
// setAttribute() ka use new attribute add karne ya existing
// attribute ki value change karne ke liye hota hai.

h3.setAttribute("width", "200");

console.log(
    "setAttribute() ka use karke width attribute add kiya:",
    h3.getAttribute("width")
);

// removeAttribute
// removeAttribute() ka use kisi attribute ko remove karne ke liye hota hai.

h3.removeAttribute("class");

console.log(
    "removeAttribute() ka use karke class attribute remove kar diya gaya hai."
);

// hasAttribute
// hasAttribute() true return karta hai agar attribute present ho,
// aur false return karta hai agar attribute present na ho.

console.log(
    'class attribute present nahi hai, isliye hasAttribute("class") false return karega:',
    h3.hasAttribute("class")
);

// data-* Attribute
// data-* attributes ka use extra information store karne ke liye hota hai.

h3.setAttribute("data-user", "Manthan");

console.log(
    "data-user attribute ki value hai:",
    h3.getAttribute("data-user")
);

// Property vs Attribute
// input.value current value ko represent karta hai.
// input.getAttribute("value") HTML mein initially set value ko represent karta hai.

const inp = document.querySelector("input");

const btn = document.querySelector("button");

btn.addEventListener("click",() =>{
    console.log(
        "Input ki value input.value ka use karke get ki ja sakti hai. Yaha inp variable ke andar input element store hai, aur inp.value se input ki current value milti hai:",
        inp.value
    );
})


// Creating inserting and removing elements from dom

// 1. createElement

// insertion ----
// appendChild--old version
// append --- new version

const main=document.querySelector("main");

let footer=document.createElement("footer");
const span=document.createElement("span")


span.innerHTML="<b>Hey i am <i> dynamic....</i></b>";

main.appendChild(footer);
main.appendChild(span); // it insert only one element 

// but append add the multiple Element at a time

// document.body.append(footer,span);

// main.remove(span);
// main.insertBefore()

main.prepend(span)  //first or sabse pehle insert
main.before(span)  //before the main element 
main.after (span)  //after the main element 


// old APi  --> appendChild(), insertBefore(),removeChild()

// New API --> append(),prepend().after(),before(),replacewith()