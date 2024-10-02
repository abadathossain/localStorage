// practice code

const addProduct = () => {
    const productName = document.getElementById('product-name')
    const productQuantity = document.getElementById('product-quantity')
    const product = productName.value;
    const quantity = productQuantity.value;
    console.log(product, quantity)
    productName.value = '';
    productQuantity.value = '';

    displayProduct(product, quantity)
}
const displayProduct = (product, quantity) => {
    const productContainer = document.getElementById('product-container')
    const li=document.createElement('li')
    li.innerText=`${product}:${quantity}`
    productContainer.appendChild(li)

}