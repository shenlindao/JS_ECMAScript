// ""Получение данных о пользователе""

// Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента и использует fetch для получения данных о пользователе с заданным ID с удаленного сервера. Функция должна возвращать промис, который разрешается с данными о пользователе в виде объекта. Если пользователь с указанным ID не найден, промис должен быть отклонен с соответствующим сообщением об ошибке.

// Подсказка, с последовательностью действий:
// getUserData использует fetch для получения данных о пользователе с удаленного сервера. Если запрос успешен (с кодом 200), функция извлекает данные из ответа с помощью response.json() и возвращает объект с данными о пользователе. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.



// async function showData() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users/');
//         if (!response.ok) {
//             throw new Error('Ошибка HTTP: ' + response.status);
//         }
//         const users = await response.json();
//         console.log(users);
//     } catch (error) {
//         throw new Error('Произошла ошибка при получении данных: ' + error);
//     }
// }
// showData();



async function getUserData(id) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/');
        if (!response.ok) {
            throw new Error('Ошибка HTTP: ' + response.status);
        }
        const users = await response.json();
        for (let i = 0; i < users.length; i++) {
            if (users[i].id === id) {
                return users[i];
            }
        }

        console.log(`Пользователь с id = ${id} не найден!`);
    } catch (error) {
        throw new Error('Произошла ошибка при получении данных: ' + error);
    }
}

getUserData(5)
    .then((userData) => {
        console.log(userData);
    })
    .catch((error) => {
        console.error(error);
    });



// ""Отправка данных на сервер""

// Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента и использует fetch для отправки этих данных на удаленный сервер для сохранения. Функция должна возвращать промис, который разрешается, если данные успешно отправлены, или отклоняется в случае ошибки.

// saveUserData использует fetch для отправки данных о пользователе на удаленный сервер для сохранения. Она отправляет POST-запрос на URL-адрес /users с указанием типа содержимого application/json и сериализует объект с данными о пользователе в JSON-строку с помощью JSON.stringify(). Если запрос успешен (с кодом 200), функция разрешает промис. Если запрос неуспешен, функция отклоняет промис с сообщени

const user = {
    name: 'John Smith',
    age: 30,
    email: 'john@example.com'
};

function saveUserData(userData) {
    return fetch('https://jsonplaceholder.typicode.com/users/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка при сохранении данных на сервере');
            }
        });
}

saveUserData(user)
    .then(() => {
        console.log('Пользовательские данные успешно сохранены');
    })
    .catch(error => {
        console.log(error.message);
    });




// ""Изменение стиля элемента через заданное время""

// Напишите функцию changeStyleDelayed, которая принимает идентификатор элемента и время задержки (в миллисекундах) в качестве аргументов. Функция должна изменить стиль элемента через указанное время.

// Пример использования функции
// changeStyleDelayed('myElement', 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'"



function changeStyleDelayed(id, delay) {
    setTimeout(() => {
        const changingElement = document.getElementById(id);
        changingElement.style.color = 'red';
        console.log(`текст окрашен спустя ${delay} миллисекунд`);
    }, delay);
}

document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    const myElement = document.createElement('div');
    myElement.id = 'myElement';
    body.innerHTML = '';
    myElement.innerHTML = 'HELLO WORLD'
    body.append(myElement);
    changeStyleDelayed('myElement', 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'"

});
