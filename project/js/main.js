class ProductList {
  constructor(container = '.products') {
    this.container = container;
    this.goods = [];
    this.allProducts = [];
    this.allSum = 0;
    this._fetchProducts();
    this._render();

  }
  _fetchProducts() {
    this.goods = [
      {id: 1, title: 'Notebook', price: 1000, quantity: 1},
      {id: 2, title: 'Mouse', price: 100, quantity: 1},
      {id: 3, title: 'Keyboard', price: 250, quantity: 1},
      {id: 4, title: 'Gamepad', price: 150, quantity: 1},
    ]
  }
  _render() {
    const block = document.querySelector(this.container);

    for (let product of this.goods) {
      const productObject = new ProductItem(product);
      this.allProducts.push(productObject);
      let sum = product.quantity * product.price;
      this.allSum = this.allSum + sum;
      block.insertAdjacentHTML('beforeend', productObject.render())
    }
    block.insertAdjacentHTML('afterend', `<p>Общая стоймость: ${this.allSum}</p>`)
  }
}

class ProductItem {
  constructor(product, img = 'https://placehold.it/200x150') {
    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
    this.img = img;
    // this.quantiy = product.quantity;
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
  constructor(container = ".btn-cart") {
    this.container = container;//место куда будем рендерить нашу корзину
    this.cartGoods = [];//это массив где будут храниться товары корзины при добавление и удаление
    this.sum = 0;
    this.render();
  }

  render() {
    const block = document.querySelector(this.container);
    for (let product of this.cartGoods) {
      if (this.cartGoods.length < 1) {
        block.innerHTML = 'Корзина пуста';//Артем, здесь по логике должен испльзоваться innerHTML, ведь блок нужно полностью вычистить, если корзина пуста Правильно?
      }
      const cartObject = new CartItem(product);
      block.insertAdjacentHTML('beforeend', cartObject.render());
    }
  }
  addProduct(product) {//принимает продукт
    //сюда с помощью обработчика кнопки прилетает товар который кликнули и его пушим в this.cartGoods
    this.cartGoods.push(product);
    //после вызываем рендер чтобы отобразить актуальные данные в корзине и метод прибавления суммы, чтобы у нас в переменной sum было актуальная сумма
    this.render();
  }
  removeProduct(product) {
    //здесь аналогично, только удаление и вычитание суммы
  }

}

class CartItem {
  constructor(product, img = 'https://placehold.it/200x150') {
    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
    this.img = img;
  }
  render() {
    //возращаем html разметку с одним товаром
  }
}

const list = new ProductList();
const cart = new Cart();

