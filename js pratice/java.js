let prodeuct=fetch('https://fakestoreapi.com/products')
// console.log(prodeuct)


prodeuct.then(function(data){
    console.log('the data is come')
     return data.json()
})
.then(function(mydata){
    console.log(mydata)
})
.catch(function(){
    console.log('wrong api')
})