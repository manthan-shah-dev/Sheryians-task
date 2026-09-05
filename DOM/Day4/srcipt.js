const inp1 = document.querySelector('#name');
const inp2 = document.querySelector("#email")
const inp3 = document.querySelector('#imageUrl')
const inp4 = document.querySelector('#DOB')
const form = document.querySelector('form')
const user = document.querySelector('#users')

let userData = [{
  id: 1,
  name: "Aarav Sharma",
  email: "aarav.sharma@example.com",
  image: "https://randomuser.me/api/portraits/men/11.jpg",
  dob: "1998-04-15",
},
{
  id: 2,
  name: "Priya Verma",
  email: "priya.verma@example.com",
  image: "https://randomuser.me/api/portraits/women/22.jpg",
  dob: "1996-09-28",
},
{
  id: 3,
  name: "Rohan Mehta",
  email: "rohan.mehta@example.com",
  image: "https://randomuser.me/api/portraits/men/35.jpg",
  dob: "2000-01-12",
},
{
  id: 4,
  name: "Sneha Kapoor",
  email: "sneha.kapoor@example.com",
  image: "https://randomuser.me/api/portraits/women/48.jpg",
  dob: "1997-07-03",
},
{
  id: 5,
  name: "Karan Malhotra",
  email: "karan.malhotra@example.com",
  image: "https://randomuser.me/api/portraits/men/59.jpg",
  dob: "1995-12-19",
},];



const userinsert = () => {
  user.innerHTML = ''
  userData.forEach((em, index) => (
    user.innerHTML += ` <div class="user_card">
        <div class="img_box">
            <img src="${em.image}" alt="">
        </div>
        <div class="text">
            <h3>Name:- ${em.name}</h3>
            <p>Email:- ${em.email}</p>
            <p>DOB:- ${em.dob}</p>
        </div>
        <div class="actions">
    <button onclick="deleteCard(${index})" id='del'>delete</button>
    <button onclick="EditCard(${index})" id='edit'>Edit</button>

   </div>

    </div>`))
}

userinsert();
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let name = inp1.value;
  let email = inp2.value;
  let image = inp3.value;
  let dob = inp4.value;
  console.log("hello")
  if (name.trim() === '' || email.trim() === '' || image.trim() === '' || dob.trim() === '') {
    return;
  }
  console.log("hello2")
  userData.push({
    name,
    email,
    image,
    dob
  })
  console.log("hello1")
  userinsert();
  form.reset();
})


const deleteCard = (index) => {
  userData.splice(index, 1)
  userinsert()
}


const EditCard = (index) => {
  let dob = window.prompt("Enter your Dob")
  if(dob!==userData[index].dob){
    window.alert("you not enter the correct dob for the respective person please try again with correct dob")
    return;
   
  }
  let name = window.prompt("Enter your name", userData[index].name)
  let email = window.prompt("Enter your Email", userData[index].email)
  let image = window.prompt("Enter your image", userData[index].image)

  if (name === userData[index].name && email === userData[index].email && image === userData[index].image){
    window.alert("change value are not same as pervious value")
    return
  }
 if (name === null || email === null || image === null) {
    window.alert("Editing cancelled.");
    return;
}

if (
    name.trim() === '' ||
    email.trim() === '' ||
    image.trim() === ''
) {
    window.alert("Any value cannot be empty.");
    return;
}
  userData[index]={
    name,email,image,dob
  }

}