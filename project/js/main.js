const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// Переделать в ДЗ
// let getRequest = (url, cb) => {
//   let xhr = new XMLHttpRequest();
//   xhr.open('GET', url, true);
//   xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4) {
//       if (xhr.status !== 200) {
//         console.log('Error');
//       } else {
//         cb(xhr.responseText);
//       }
//     }
//   };
//   xhr.send();
// };
//
// let getRequest = new Promise((resolve, reject) => {
//   let xhr = new XMLHttpRequest();
//   xhr.open('GET', url, true);
//   xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4) {
//       if (xhr.status !== 200) {
//         reject('Error');
//       } else {
//         resolve(xhr.responseText);
//       }
//     }
//   };
//   xhr.send();
// });

class ProductList {
  constructor(container = '.products') {
    this.container = container;
    this.goods = [];
    this.allProducts = [];
    // this._fetchProducts();
    this._getProducts()
      .then(data => {
        this.goods = [...data];
        this._render();
      });
  }
  // _fetchProducts() {
  //   getRequest(`${API}/catalogData.json`, (data) => {
  //     this.goods = JSON.parse(data);
  //     this._render();
  //   })
  // }

  _getProducts() {
    return fetch(`${API}/catalogData.json`)
      .then(result => result.json())
      .catch(error => {
        console.log(error);
      })
  }
  _render() {
    const block = document.querySelector(this.container);

    for (let product of this.goods) {
      const productObject = new ProductItem(product);
      this.allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render())
    }
  }
}

class ProductItem {
  constructor(product, img = 'https://placehold.it/200x150') {
    this.title = product.product_name;
    this.price = product.price;
    this.id = product.id_product;
    this.img = img;
  }

  render() {
    return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} \u20bd</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`;
  }
}

class Cart {
  constructor(container = '.cart-block', cartBtn = '.btn-cart') {
    this.container = container;
    this.cartBtn = cartBtn;
    this.cartGoods = [];
    this.amount = 0;
    this.countGoods = 0;
    this._getCartProducts()
        .then(data => {
          this.cartGoods = [...data.contents];
          this.amount = data.amount;
          this.countGoods = data.countGoods;
          this._render();
        });
    this._clickCart();
  }
  _clickCart() {
    document.querySelector(this.cartBtn).addEventListener('click', () => {
      document.querySelector(this.container).classList.toggle('invisible');
    });
    const btns = document.querySelectorAll('.buy-btn');
    console.log(btns);
    for(let btn of btns) {
      btn.addEventListener('click', (event) => this.addProducts(event));
    }
  }
  addProducts(event) {
    fetch(`${API}/addToBasket.json`)
        .then(result => result.json())
        .catch(error => console.log(error))
        .then(data => console.log(data))
  }
  removeProduct(event) {
    fetch(`${API}/deleteFromBasket.json`)
        .then(result => result.json())
        .catch(error => console.log(error))
        .then(data => console.log(data))
  }
  _getCartProducts() {
    return fetch(`${API}/getBasket.json`)
        .then(result => result.json())
        .catch(error => {
          console.log(error);})
  }
  _render() {
    const block = document.querySelector(this.container);
    for (let product of this.cartGoods) {
      const cartObject = new CartProduct(product);
      block.insertAdjacentHTML('beforeend', cartObject.render());
    }
    block.insertAdjacentHTML('beforeend', `<p>Общее количество товаров ${this.countGoods}</p>
                                                        <p>Стоимость товаров ${this.amount}</p>
    `);
    const btns = block.querySelectorAll(`.del`);
    console.log(btns);
    for (let btn of btns) {
      btn.addEventListener('click', (event) => this.removeProduct(event));

    }
  }
}
class CartProduct {
  constructor(product, img = 'https://placehold.it/100x50') {
    this.title = product.product_name;
    this.price = product.price;
    this.id = product.id_product;
    this.img = img;
    this.quantity = product.quantity;
  }
  render() {
    return `<div data-id="${this.id}">
                <div>
                    <img src="${this.img}" alt="Some img">
                    <h3>${this.title}</h3>
                    <p>${this.price} \u20bd</p>
                    <p>Количество: ${this.quantity}</p>
                    <button class="del" data-id ='${this.id}'>удалить</button>
                </div>
            </div>`;
  }
}
const list = new ProductList();
const basket = new Cart();



// const products = [
//   {id: 1, title: 'Notebook', price: 1000},
//   {id: 2, title: 'Mouse', price: 100},
//   {id: 3, title: 'Keyboard', price: 250},
//   {id: 4, title: 'Gamepad', price: 150},
// ];
//
// const renderProduct = (item, img = 'https://placehold.it/200x150') => `<div class="product-item">
//             <img src="${img}" alt="Some img">
//             <h3>${item.title}</h3>
//             <p>${item.price}</p>
//             <button class="by-btn">Добавить</button>
//           </div>`;
//
// const renderProducts = list => document.querySelector('.products')
//   .insertAdjacentHTML('beforeend', list.map(item => renderProduct(item)).join(''));
//
// renderProducts(products);
