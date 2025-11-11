let main = document.getElementById('main');
let cartCount = document.getElementById('cartCount');
let cart = [];

// 1️⃣ Fetch products from FakeStoreAPI
async function getProducts() {
  let response = await fetch('https://fakestoreapi.com/products');
  let data = await response.json();
  showProducts(data);
}

// 2️⃣ Display products on the page
function showProducts(products) {
  main.innerHTML = ''; // clear previous content

  products.forEach(product => {
    let card = document.createElement('div');
    card.className = 'card';

    let img = document.createElement('img');
    img.src = product.image;

    let title = document.createElement('p');
    title.textContent = product.title.length > 20
      ? product.title.substring(0, 20) + '...'
      : product.title;

    let price = document.createElement('h4');
    price.textContent = 'Rs ' + product.price;

    let btn = document.createElement('button');
    btn.textContent = 'add to cart';

    btn.addEventListener('click', () => {
      cart.push(product);
      cartCount.textContent = `cart(${cart.length})`;
      btn.textContent = 'added';
      btn.style.backgroundColor = '#5bdd82';
    });

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(price);
    card.appendChild(btn);
    main.appendChild(card);
  });
}

// 3️⃣ Call the function to start
getProducts();
