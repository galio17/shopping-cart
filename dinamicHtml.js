function prices() {
    let totalPrice = document.createElement('div');
    let total = 0;

    productsCart.forEach(product => {
        addProduct(product);
        total += product.price;
    });

    totalPrice.id = 'total';
    totalPrice.innerHTML = `<h3>Total</h3> <h3>R$ ${total}</h3>`;

    productDetails.appendChild(totalPrice);
}

function addProduct({id, name, price}) {
    const newProduct = document.createElement('li');    

    newProduct.id = id;
    newProduct.innerHTML = `<p>${name}</p> <p>R$ ${price.toFixed(2)}</p>`;

    productList.appendChild(newProduct);
}

const main = document.createElement('main');
const logo = document.createElement('h1');
const productList = document.createElement('ul');
const productListHeader = document.createElement('li');
const productDetails = document.createElement('section');
const endButton = document.createElement('button');

logo.innerText = 'Virtual Market';
productListHeader.id = 'list-header';
productListHeader.innerHTML = '<h2>Item</h2> <h2>Valor</h2>';
endButton.innerText = 'Finalizar compra';
        
productList.appendChild(productListHeader);

prices();

productDetails.appendChild(endButton);

main.appendChild(logo);
main.appendChild(productList);
main.appendChild(productDetails);

document.querySelector('body').appendChild(main);   