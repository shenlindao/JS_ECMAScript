// Задание 1 (тайминг 20 минут)

// Напишите функцию getPrototypeChain(obj), которая будет возвращать цепочку прототипов для заданного объекта obj.
// Функция должна вернуть массив прототипов, начиная от самого объекта и заканчивая глобальным объектом Object.prototype.

// const obj = {};
// const prototypeChain = getPrototypeChain(obj);
// console.log(prototypeChain);

const noteBook = {
    model: 'Laptop',
    processor: 'Intel Core 2 duo',
    coresNumber: 2,
    RAM: '8 Gb',
    memoryType: 'DDR4',
    frequency: '60 Gz',
    startComputer() {
        console.log('I am starting');
    },
}

const ASUS = {
    model: 'X8956',
    processor: 'Intel Core 2 i3',
    coresNumber: 3,
}

Object.setPrototypeOf(ASUS, noteBook);

function getPrototypeChain(obj) {
    const prototypeChain = [];
    let currentObj = obj;
    while (currentObj !== null) {
        prototypeChain.push(currentObj);
        currentObj = Object.getPrototypeOf(currentObj);
    }
    return prototypeChain;
}

const prototypeChain = getPrototypeChain(ASUS);
console.log(prototypeChain);



// Задание 2 (20минут)

// Напишите конструктор объекта Person, который принимает два аргумента: name (строка) и age (число).
// Конструктор должен создавать объект с указанными свойствами name и age и методом introduce(), который выводит в консоль строку вида "Меня зовут [name] и мне [age] лет".

// // Пример:
// const person1 = new Person("John", 25);
// person1.introduce(); // Вывод: Меня зовут John и мне 25 лет.


function Person(name, age) {
    this.name = name;
    this.age = age;
    this.introduce = function () {
        console.log(`Меня зовут ${this.name} и мне ${this.age} лет.`);
    };
}

const person1 = new Person("John", 25);
person1.introduce(); // Вывод: Меня зовут John и мне 25 лет.


// Задание 2 Class (20минут)

// Создайте класс Animal, который будет представлять животное.
// У класса Animal должны быть следующие свойства и методы:
// - свойство name (строка) - имя животного.
// - метод speak() - выводит в консоль звук, издаваемый животным.

// Создайте подкласс Dog, который наследует класс Animal.
// Для подкласса Dog добавьте дополнительное свойство и метод:
// - свойство breed (строка)- порода собаки.
// - метод fetch() - выводит в консоль сообщение:
//     "Собака [name] принесла мяч."


class Animal {
    constructor(name) {
        this.name = name
    }
    speak() {
        console.log(`Животное ${this.name} издаёт звук`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name)
        this.breed = breed
    }
    fetch() {
        console.log(`Животное ${this.name} издаёт звук`);
    }
}

const animal1 = new Animal("Собака");
animal1.speak();

const dog1 = new Dog("Бобик", "Дворняжка");
dog1.speak();
console.log(dog1.breed);
dog1.fetch();




// Задание 3 (40мин)

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class ShoppingCart {
    constructor(customerName, initialTotalCoast) {
        this.customerName = customerName;
        this.totalCoast = initialTotalCoast;
        this.items = [];
    }
    addItem(product, quantity = 1) {
        this.totalCoast += product.price * quantity;
        this.items.push({ product, quantity });
    }
    getCurrentTotalCoast() {
        return this.totalCoast;
    }
    checkout() {
        console.log(`Заказ оформлен для ${this.customerName} общая стоимость заказа: ${this.totalCoast} рублей. Спасибо за покупку!`);
        this.totalCoast = 0;
    }
}

const product1 = new Product('Футболка', 1000);
const product2 = new Product('Джинсы', 2000);

const cart = new ShoppingCart('Артём', 0);

cart.addItem(product1, 5);
cart.addItem(product2);
cart.addItem(product1);

console.log(`Общая стоимость: ${cart.getCurrentTotalCoast()}`);

cart.checkout();