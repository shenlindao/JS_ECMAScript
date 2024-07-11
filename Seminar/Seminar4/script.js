// Задание 1 (тайминг 20 минут)
// 1. Создайте функцию delayedMessage(message, delay), которая принимает аргументы message (строка) и delay (число).
// Функция должна выводить заданное сообщение в консоль через указанную задержку.
// 2. Вызовите функцию delayedMessage() три раза с разными сообщениями и задержками.
// Например:
// a. delayedMessage("Сообщение 1", 2000)
// b. delayedMessage("Сообщение 2", 1000)
// c. delayedMessage("Сообщение 3", 3000)
// 3. После вызова всех функций delayedMessage(), добавьте сообщение вида "Конец программы" с помощью console.log().


function delayedMessage(message, delay) {
    setTimeout(() => {
        console.log(message);
    }, delay);
}
delayedMessage("Сообщение 1", 2000);
delayedMessage("Сообщение 2", 1000);
delayedMessage("Сообщение 3", 3000);
delayedMessage("Конец программы", 4000);

// Задание 2
// Напишите программу, которая загружает данные с сервера с ьиспользованием объекта XMLHttpRequest и отображает полученную информацию в консоли.
// 1. Создайте функцию loadData(url), которая принимает аргумент url (строка) - адрес сервера для загрузки данных.
// 2. Внутри функции loadData() создайте объект XMLHttpRequest с помощью new XMLHttpRequest().
// 3. Зарегистрируйте обработчик события onreadystatechange, который будет вызываться при изменении состояния запроса.
// 4. Откройте запрос с помощью xhr.open("GET", url, true), где "GET" - тип запроса, url - адрес сервера, true - асинхронный режим запроса.
// 5. Отправьте запрос на сервер с помощью xhr.send().


function loadData(url) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText);
        }
    };
    xhr.open("GET", url, true);
    xhr.send();
}

loadData('https://catfact.ninja/fact');


const users = fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        if (response.ok) {
            return response.text();
        }
        throw new Error('Ошибка');
    })
    .then((data => {
        console.log(JSON.parse(data));
    }))
    .catch((err) => {
        console.error(`Ошибка: ${err}`);
    });


document.addEventListener('DOMContentLoaded', () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Ошибка HTTP: ' + response.status);
            }
            return response.json();
        })
        .then((users) => {
            const body = document.querySelector('body');
            const userList = document.createElement('div');
            userList.className = 'userList';
            body.innerHTML = '';
            body.append(userList);

            const renderUsersList = (users) => {
                const userList = document.querySelector('.userList');
                userList.innerHTML = '';
                users.forEach(user => {
                    const listItem = document.createElement('li');
                    listItem.style.listStyle = 'none';
                    listItem.innerHTML = `
                            <div style="border:1px solid">
                                <h3>${user.name}</h3>
                                <p>${user.email}</p>
                            </div>
                        `;
                    userList.append(listItem);
                });
            };

            const sortByUserName = (users) => {
                const sortUser = users.sort((a, b) => {
                    const nameA = a.name.toLowerCase();
                    const nameB = b.name.toLowerCase();
                    return nameA < nameB ? -1 : 1;
                });
                renderUsersList(sortUser);
            };

            sortByUserName(users);
        })
        .catch((error) => {
            console.error('Произошла ошибка:', error);
        });
});
