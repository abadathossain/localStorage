const addProduct = () => {
    const productField = document.getElementById('product-name');
    const quantityField = document.getElementById('product-quantity');
    const product = productField.value;
    const quantity = quantityField.value;

    productField.value = '';
    quantityField.value = '';

    console.log(product, quantity);
    displayProduct(product,quantity)

}

const displayProduct=(product, quantity)=>{
    const container=document.getElementById('product-container');
    const li=document.createElement('li');
    li.innerText=`${product}:${quantity}`;
    container.appendChild(li)
}



















// practice code

// const addProduct = () => {
//     const productName = document.getElementById('product-name')
//     const productQuantity = document.getElementById('product-quantity')
//     const product = productName.value;
//     const quantity = productQuantity.value;
//     console.log(product, quantity)
//     productName.value = '';
//     productQuantity.value = '';

//     displayProduct(product, quantity)
// }
// const displayProduct = (product, quantity) => {
//     const productContainer = document.getElementById('product-container')
//     const li=document.createElement('li')
//     li.innerText=`${product}:${quantity}`
//     productContainer.appendChild(li)

// }