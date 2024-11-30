// Задача 1
// Напишите функцию deepPropertyCount, которая принимает объект и возвращает
// количество всех свойств, включая вложенные. Если свойство также является объектом, необходимо рекурсивно считать его вложенные свойства.

// Например:
// const data = { name: 'Alice', details: { age: 25, address: { city: 'New York', zip: 10001 }}};

function deepPropertyCount(obj) {
    let count = 0;

    function countProperties(obj) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                count++;
                if (typeof obj[key] === 'object' && obj[key] !== null) {
                    countProperties(obj[key]);
                }
            }
        }
    }

    countProperties(obj);
    return count;
}

// Пример использования:
const data = { 
    name: 'Alice', 
    details: { 
        age: 25, 
        address: { city: 'New York', zip: 10001 } 
    } 
};
console.log(deepPropertyCount(data)); // Вывод: 5

// Задача 2
// Напишите функцию groupBy, которая принимает массив объектов и строку property.
// Функция должна группировать объекты по значению указанного свойства и возвращать объект, где ключи - это уникальные значения этого свойства, а значения - массивы объектов с соответствующими значениями.

// Например:
// const users = [{ name: 'Alice', group: 'admin'}, { name: 'Bob', group: 'user'}, { name:
// 'Charlie', group: 'admin' }, ];

function groupBy(array, property) {
    return array.reduce((acc, obj) => {
        const key = obj[property];
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
    }, {});
}

// Пример использования:
const users = [
    { name: 'Alice', group: 'admin' },
    { name: 'Bob', group: 'user' },
    { name: 'Charlie', group: 'admin' },
];
console.log(groupBy(users, 'group'));
// Вывод: { admin: [ { name: 'Alice', group: 'admin' }, { name: 'Charlie', group: 'admin' } ], user: [ { name: 'Bob', group: 'user' } ] }

// Задача 3
// Напишите асинхронную функцию fetchWithTimeout, которая принимает URL и максимальное время ожидания (в миллисекундах) для выполнения запроса. 
// Если запрос выполняется дольше указанного времени, функция должна отклоняться с сообщением "Время ожидания истекло". 
// Используйте fetch и Promise. race. URL любой на Ваш выбор.

async function fetchWithTimeout(url, timeout) {
    const controller = new AbortController();
    const signal = controller.signal;

    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
        const response = await fetch(url, { signal });
        clearTimeout(timeoutId);
        return response;
    } catch (error) {
        if (error.name === 'AbortError') {
            throw new Error("Время ожидания истекло");
        }
        throw error;
    }
}

// Пример использования:
fetchWithTimeout('https://jsonplaceholder.typicode.com/posts', 1000)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

// Задача 4
// Напишите функцию sequentialFetch, которая принимает массив URL и загружает данные по каждому URL с задержкой в 500 миллисекунд между запросами. 
// Если какой-либо запрос завершился ошибкой, остальные запросы не должны выполняться,а функция должна возвращать сообщение "Ошибка в загрузке данных".

async function sequentialFetch(urls) {
    for (let i = 0; i < urls.length; i++) {
        try {
            const response = await fetch(urls[i]);
            if (!response.ok) throw new Error("Ошибка в загрузке данных");
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error("Ошибка в загрузке данных");
            return "Ошибка в загрузке данных";
        }
        await new Promise(resolve => setTimeout(resolve, 500));
    }
}

// Пример использования:
const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3',
];
sequentialFetch(urls);

// Задача 5
// Создайте асинхронный генератор paginatedFetch, который принимает URL и максимальное количество страниц maxPages. 
// Генератор должен последовательно загружать данные с каждой страницы до достижения maxPages или пока данные не перестанут приходить. 
// Если ответ пустой, генератор должен завершить выполнение.

// Корректная реализация асинхронного генератора для загрузки данных постранично 10 баллов.
// Завершение генератора при пустом ответе или достижении maxPages - 10 баллов.

async function* paginatedFetch(baseUrl, maxPages) {
    for (let page = 1; page <= maxPages; page++) {
        const url = `${baseUrl}?page=${page}`;
        const response = await fetch(url);
        if (!response.ok) throw new Error("Ошибка загрузки данных");
        
        const data = await response.json();
        if (data.length === 0) break;

        yield data;
    }
}

// Пример использования:
(async () => {
    const generator = paginatedFetch('https://jsonplaceholder.typicode.com/posts', 5);
    for await (const pageData of generator) {
        console.log(pageData);
    }
})();