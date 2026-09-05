const createBtn = document.querySelector("#Create");

const formDiv = document.querySelector('.form');
const form = document.querySelector('form');

const closeBtn = document.querySelector("#close");
const productDiv = document.querySelector('.products')

// update field
let updateIndex = null

const productArray = [{
    id: Date.now(),
    productName: "Product 1",
    description: "Description of product 1",
    price: "₹999",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn-IzAYiP3DEnyS-7svDsa37RxhhfxfAbAHgob8NgTOEe_tvi3cEJXSM8&s"
},
{
    id: Date.now() + 1,
    productName: "Product 2",
    description: "Description of product 2",
    price: "₹1499",
    image: "https://example.com/product2.jpg"
}
]
createBtn.addEventListener('click', () => {
    formDiv.style.display = 'flex';
})

closeBtn.addEventListener('click', () => {
    formDiv.style.display = 'none';
})


// push in product of product-card
const ProductUI = () => {
    productDiv.innerHTML = ''
    productArray.forEach((elem,index) => {
        productDiv.innerHTML += ` <div class="product-card">
                <div class="img">
                    <img src="${elem.image}"
                        alt="image">
                </div>
                <div class="text">
                    <h3>${elem.productName}</h3>
                    <p>${elem.description}</p>
                    <p>${elem.price}</p>
                </div>

                <div class="btns">
                    <button onclick="updateProduct('${elem.id}')" id="update">Update</button>
                    <button onclick="deleteProduct('${index}')" id="delete">Delete</button>
                </div>
            </div>`})
}



form.addEventListener('submit', (event) => {
    event.preventDefault();

    console.log("hello");

    let productName = event.target[0].value.trim();
    let description = event.target[1].value.trim();
    let price = event.target[2].value;
    let image = event.target[3].value

    if (productName === '' ||
        description === '' ||
        price === '' ||
        image === ''
    ) {
        alert('please fill all the fields');
        return;
    }

    let obj = {
        id:Date.now(),
        productName,
        description,
        price,
        image
    };
    if (updateIndex !== null) {
        productArray[updateIndex]=obj
        updateIndex = null
    }
    else { productArray.push(obj) }
    console.log(productArray)
    ProductUI()
    form.reset()
    formDiv.style.display = 'none';
})


const updateProduct = (id) => {
     id = Number(id);
    let product = productArray.find((elem) => elem.id === id)
  updateIndex = productArray.findIndex((elem) => elem.id === id)
  console.log(product)
  console.log(id)
    formDiv.style.display = 'flex';
    form[4].textContent ='Update';

    form[0].value = product.productName;
    form[1].value = product.description;
    form[2].value = Number(product.price.replace('₹', ''));
    form[3].value = product.image;
    update = true
}

const deleteProduct=(index)=>{
   productArray.splice(index,1)
     ProductUI();
}