// Задание 1 (тайминг 20 минут)

// 1. Создайте функцию mergeArrays, которая принимает два массива и возвращает новый массив, содержащий все элементы из обоих массивов.
// Используйте spread оператор для объединения массивов.
// mergeArrays([1, 2, 3], [4, 5, 6]); 
// Ожидаемый результат: [1, 2, 3, 4, 5, 6]

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergeArrays = (array1, array2) => [...array1, ...array2];
console.log("mergeArrays: " + mergeArrays(array1, array2));

// 2. Создайте функцию removeDuplicates, которая принимает любое количество аргументов и возвращает новый массив, содержащий только уникальные значения.
// Используйте rest оператор для сбора всех аргументов в массив а затем filter для определения дубликатов.
// removeDuplicates(1, 2, 3, 2, 4, 1, 5); // Ожидаемый
// результат: [1, 2, 3, 4, 5]

const removeDuplicates = (...values) => values.filter((val, index) => values.indexOf(val) === index);
console.log("removeDuplicates: " + removeDuplicates(1, 2, 3, 2, 4, 1, 5));


/************************************************************************************/


// Задание 2 (Чистые функции 25минут)

// 1. Напишите функцию getEvenNumbers, которая принимает массив чисел в качестве аргумента и возвращает новый массив, содержащий только четные числа.


const array3 = [1, 2, 3, 4, 4, 6, 7, 8, 1, 2, 12];
const getEvenNumbers = (array) => array.filter(i => i % 2 === 0);
console.log("getEvenNumbers: " + getEvenNumbers(array3));


// 2. Задача: Напишите функцию calculateAverage, которая принимает массив чисел в качестве аргумента и возвращает среднее значение этих чисел.


const numbers = [1, 2, 3, 4, 5];
const getAverage = (numbers) => numbers.reduce((acc, number) => acc + number, 0) / numbers.length;
console.log("getAverage: " + getAverage(numbers));

// 3. Напишите функцию capitalizeFirstLetter, которая принимает строку в качестве аргумента и возвращает новую строку, в которой первая буква каждого слова является заглавной.

const newString = "У гитары их шесть, девять — у балалайки, а сколько же их у домохозяйки?"
const capitalizeFirstLetter = (sentence) => sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
console.log("capitalizeFirstLetter: " + capitalizeFirstLetter(newString));


/************************************************************************************/


// Задание 3 (Замыкания 20 минут)

// 1. Напишите функцию createCalculator, которая принимает начальное значение и возвращает объект с двумя методами: add и subtract.
// Метод add должен увеличивать значение на переданное число, а метод subtract должен уменьшать значение на переданное число.
// Значение должно быть доступно только через методы объекта, а не напрямую.

function createCalculator(value) {
    let result = value;
    return {
        add(number) {
            result += number;
        },
        subtract(number) {
            result -= number;
        },
        getResult() {
            return result;
        }
    }
}

// Создаем калькулятор с начальным значением 0
const calculator = createCalculator(0);

// Добавляем 5
calculator.add(5);

// Вычитаем 3
calculator.subtract(3);

// Получаем результат
console.log("createCalculator: " + calculator.getResult());


/************************************************************************************/


// Задание 4 (Лексический контекст 15 минут)

// 1. Напишите функцию createGreeting, которая принимает имя пользователя и возвращает функцию, которая будет выводить приветствие с использованием этого имени.
// // Пример использования: 
// const greeting = createGreeting('John');
// greeting(); // Ожидаемый результат: "Hello, John!"

const createGreeting = (name) => `Hello, ${name}!`;

const greeting = createGreeting('John');
console.log(greeting);


/************************************************************************************/


// Задание 5 (тайминг 15 минут)
// 1. Задача: Напишите функцию createPasswordChecker, которая принимает допустимую длину пароля в качестве аргумента и возвращает функцию для проверки введенного пароля.
// Возвращаемая функция должна принимать пароль и возвращать true, если его длина соответствует допустимой, и false в противном случае.

// Пример использования:
// const isPasswordValid = createPasswordChecker(8);
// console.log(isPasswordValid('password')); // Ожидаемый результат:
// false
// console.log(isPasswordValid('secret')); // Ожидаемый результат: true

function createPasswordChecker(maxLength) {
    return function (password) {
        return password.length <= maxLength
    }
}

const isPasswordValid = createPasswordChecker(6);
console.log(isPasswordValid('password'));
console.log(isPasswordValid('secret'));


/************************************************************************************/


// Задание 6 (Рекурсия 25 минут)
// 1. Напишите рекурсивную функцию sumDigits, которая принимает положительное целое число в качестве аргумента и возвращает сумму его цифр.

// // Пример использования:
// console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
// console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6 + 7 + 8 + 9)

function sumDigits(number) {
    if (number < 10) {
        return number;
    }
    return number % 10 + sumDigits(Math.floor(number / 10));
}

console.log('sumDigits: ' + sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
console.log('sumDigits: ' + sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6 + 7 + 8 + 9)