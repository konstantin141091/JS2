const products = [
  {id: 1, title: 'Notebook', price: 1000, img: 'https://placehold.it/200x150'},
  {id: 2, title: 'Mouse', price: 120, img: 'https://placehold.it/200x150'},
  {id: 3, title: 'Keyboard', price: 250, img: 'https://placehold.it/200x150'},
  {id: 4, title: 'Gamepad', price: 150, img: 'https://placehold.it/200x150'},
];

const renderProduct = (title, price, img) => {
  return `<div class="product-item">
            <img src="${img}" alt="photo">
            <h3>${title}</h3>
            <p>${price}</p>
            <button class="by-btn">Добавить</button>
          </div>`;
};

const renderProducts = list => document.querySelector('.products').innerHTML = list.map(item => renderProduct(item.title, item.price, item.img)).join('');

renderProducts(products);
