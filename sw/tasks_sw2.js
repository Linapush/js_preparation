// Задача 1: Функция getUniqueValues
// Напишите функцию getUniqueValues, которая принимает массив и возвращает новый массив, состоящий только из уникальных значений. 

function getUniqueValues(array) {
    return Array.from(new Set(array));
}

// Пример использования:
const values = [1, 2, 2, 3, 4, 4, 5];
console.log(getUniqueValues(values)); // Вывод: [1, 2, 3, 4, 5]


// Задача 2: Функция filterByProperty
// Напишите функцию filterByProperty, которая принимает массив объектов свойства и имя свойства. 
// Функция должна возвращать массив объектов , где данное свойство имеет значение true.

function filterByProperty(array, property) {
    return array.filter(item => item[property] === true);
}

// Пример использования:
const items = [
    { name: 'item1', available: true },
    { name: 'item2', available: false },
    { name: 'item3', available: true },
];
console.log(filterByProperty(items, 'available'));
// Вывод: [ { name: 'item1', available: true }, { name: 'item3', available: true } ]


// Задача 3: Функция fetchWithLimit
// Создайте функцию fetchWithLimit, которая принимает URL и максимальное количество попыток запроса. 
// Если запрос завершился ошибкой, функция должна повторить его указанное количество раз. 
// Если все попытки завершились неудачей, возвращается ошибка "Запрос не удался".

async function fetchWithLimit(url, maxAttempts) {
    let attempts = 0;

    while (attempts < maxAttempts) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error("Ошибка ответа");
            return await response.json();
        } catch (error) {
            attempts++;
            if (attempts >= maxAttempts) {
                throw new Error("Запрос не удался");
            }
        }
    }
}

// Пример использования:
fetchWithLimit('https://jsonplaceholder.typicode.com/posts/1', 3)
    .then(data => console.log(data))
    .catch(error => console.error(error));


// Задача 4: Функция loadAllData
// Напишите функцию loadAllData, которая принимает массив URL и загружает данные по каждому URL параллельно, используя Promise.all. 
// Если один из запросов завершился ошибкой, функция должна вернуть сообщение "Ошибка загрузки данных".

async function loadAllData(urls) {
    try {
        const responses = await Promise.all(urls.map(url => fetch(url).then(res => {
            if (!res.ok) throw new Error("Ошибка загрузки данных");
            return res.json();
        })));
        return responses;
    } catch (error) {
        return "Ошибка загрузки данных";
    }
}

// Пример использования:
const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3',
];
loadAllData(urls)
    .then(data => console.log(data))
    .catch(error => console.error(error));



// Задача 5: Асинхронный генератор fetchPages
// Напишите асинхронный генератор fetchPages, который принимает базовый URL и максимальное количество страниц. 
// Генератор должен возвращать данные для каждой страницы (?page=1, ?page=2 и т.д.) до достижения maxPages.

async function* fetchPages(baseUrl, maxPages) {
    for (let page = 1; page <= maxPages; page++) {
        const url = `${baseUrl}?page=${page}`;
        const response = await fetch(url);
        if (!response.ok) throw new Error("Ошибка загрузки данных");
        
        const data = await response.json();
        yield data;
    }
}

// Пример использования:
(async () => {
    const generator = fetchPages('https://jsonplaceholder.typicode.com/posts', 5);
    for await (const pageData of generator) {
        console.log(pageData);
    }
})();