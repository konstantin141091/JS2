class Position {
    constructor(container = ".position") {
        this.container = container;
        this._clickHandler();
    }

    _clickHandler() {
        const btnList = document.querySelectorAll(this.container);
        for (let btn of btnList) {
            btn.addEventListener('click', (event) => result.render(event));
        }
    }
}
class Result {
    constructor(container = '.result') {
        this.container = document.querySelector(container);
        this.sum = 0;
        this.cal = 0;
        this.sumSize = 0;
        this.calSize = 0;
        this.sumStuffing = 0;
        this.calStuffing = 0;
        this.sumTopping = 0;
        this.calTopping = 0;
        this._finish();
        this._reset();
    }

    render(event) {
        if (event.target.dataset.name === 'Мини-гамбургер' || event.target.dataset.name === 'Большой гамрургер') {
            this.container.querySelector('.hum__size').innerHTML = event.target.dataset.name;
            this.sumSize = +event.target.dataset.price;
            this.calSize = +event.target.dataset.cal;
        } else if (event.target.dataset.name === 'Сыр' || event.target.dataset.name === 'Салат' || event.target.dataset.name === 'Картофель') {
            this.container.querySelector('.hum__stuffing').innerHTML = event.target.dataset.name;
            this.sumStuffing = +event.target.dataset.price;
            this.calStuffing = +event.target.dataset.cal;
        } else {
            this.container.querySelector('.hum__topping').innerHTML = event.target.dataset.name;
            this.sumTopping = +event.target.dataset.price;
            this.calTopping = +event.target.dataset.cal;
        }
        this._renderSumAndCal(this.sumSize, this.calSize, this.sumStuffing, this.calStuffing, this.sumTopping, this.calTopping);
    }
    _renderSumAndCal(sumSize, calSize, sumStuffing, calStuffing, sumTopping, calTopping) {
        this.sum = sumSize + sumStuffing + sumTopping;
        this.cal = calSize + calStuffing + calTopping;
        this.container.querySelector('.hum__sum').innerHTML = this.sum;
        this.container.querySelector('.hum__cal').innerHTML = this.cal;

    }
    _finish() {
        document.querySelector('.hum__add').addEventListener('click', () =>  {
            if (this.container.querySelector('.hum__size').textContent.length < 1) {
                alert('Вы не выбрали размер гамбургера');
                return;
            }
            if (this.container.querySelector('.hum__stuffing').textContent.length < 1) {
                alert('Вы не выбрали начинку');
                return;
            }
            this.container.querySelector('.hum__sum').innerHTML = 0;
            this.container.querySelector('.hum__cal').innerHTML = 0;
            alert('Ваш заказ принят');
        });
    }
    _reset() {
        document.querySelector('.hum__reset').addEventListener('click', () =>  {
            this.container.querySelector('.hum__sum').innerHTML = 0;
            this.container.querySelector('.hum__cal').innerHTML = 0;
        });
    }
}

const size = new Position;
const result = new Result;
