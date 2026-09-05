const createBtn = document.querySelector("#Create")
const productDiv = document.querySelector('.products')

const formDiv = document.querySelector('.form')
const closeBtn = document.querySelector('#close')

const form = document.querySelector('form')

createBtn.addEventListener('click', () => {
    formDiv.style.display = 'flex'
})

const productArray = [{
    productId: Date.now(),
    productName: "Product 1",
    description: "Description of product 1",
    productPrice: "₹999",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn-IzAYiP3DEnyS-7svDsa37RxhhfxfAbAHgob8NgTOEe_tvi3cEJXSM8&s"
},
{
    productId: Date.now() + 1,
    productName: "Product 2",
    description: "Description of product 2",
    productPrice: "₹1499",
    imageUrl: "https://example.com/product2.jpg"
}
]

let updateproduct = null

closeBtn.addEventListener('click', () => {
    formDiv.style.display = 'none'

})

const productUi = () => {
    productDiv.innerHTML = ''
    productArray.forEach((elem, index) => {
        productDiv.innerHTML += `<div class="product-card">
                <div class="img">
                    <img src="${elem.imageUrl}"
                        alt="image">
                </div>
                <div class="text">
                    <h3>${elem.productName}</h3>
                    <p>${elem.description}</p>
                    <p>${elem.productPrice}</p>
                </div>

                <div class="btns">
                    <button onclick="updateProduct('${elem.productId}')" id="update">Update</button>
                    <button onclick="deleteProduct('${index}')" id="delete">Delete</button>
                </div>
            </div>`
    })
    console.log('hello')
}

productUi()
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let productName = form[0].value.trim();
    let description = form[1].value.trim();
    let productPrice = form[2].value.trim();
    let imageUrl = form[3].value.trim();
    if (productName === '' ||
        description === '' ||
        productPrice === '' ||
        imageUrl === '') {
        alert('please fill all the field');
        return
    }



    let obj = {
        productId: Date.now(),
        productName,
        description,
        productPrice,
        imageUrl
    }
    if (updateproduct !== null) {
        productArray[updateproduct] = obj
        updateproduct = null

    }
    else {
        productArray.push(obj)
    }
    productUi();
    form.reset();
    formDiv.style.display = 'none'

})


const updateProduct = (id) => {
    id = Number(id)
    console.log(typeof (id))
    console.log(id)
    let product = productArray.find((elem) =>  elem.productId === id )
    updateproduct = productArray.findIndex((elem) =>  elem.productId === id )
    console.log("product", product)
    console.log("product", updateproduct)
    formDiv.style.display = 'flex'
    form[4].textContent = 'update'

    form[0].value = product.productName
    form[1].value = product.description
    form[2].value = product.productPrice.replace('₹', '')
    form[3].value = product.imageUrl
}


const deleteProduct = (index) => {
    productArray.splice(index, 1)
    productUi()
}