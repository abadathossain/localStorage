const addProduct = () => {
    const productField = document.getElementById('product-name');
    const quantityField = document.getElementById('product-quantity');
    const product = productField.value;
    const quantity = quantityField.value;

    productField.value = '';
    quantityField.value = '';

    console.log(product, quantity);
    displayProduct(product, quantity)
    saveProdductLocalStorage(product, quantity)
}

const displayProduct = (product, quantity) => {
    const container = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product}:${quantity}`;
    container.appendChild(li)
}

const getShoppingCart = () => {
    let cart = {}
    const storedCart = localStorage.getItem('cart')
    if (storedCart) {
        cart = JSON.parse(storedCart)
    }
    return cart
}

const saveProdductLocalStorage = (product, quantity) => {
    const cart = getShoppingCart()
    cart[product] = quantity
    const cartStingified = JSON.stringify(cart)
    localStorage.setItem('cart', cartStingified)

}

const displayProductFromLocal = () => {
    const savedProduct = getShoppingCart()
    for (const product in savedProduct) {
        const quantity = savedProduct[product]
        console.log(product, quantity)
        displayProduct(product, quantity)
    }

}
displayProductFromLocal()