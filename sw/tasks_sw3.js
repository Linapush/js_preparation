// Задача 1: Функция findObjectByProperty

function findObjectByProperty(array, property, value) {
    return array.find(obj => obj[property] === value);
}

// Пример использования:
const items = [
    { id: 1, name: 'item1' },
    { id: 2, name: 'item2' },
];
console.log(findObjectByProperty(items, 'name', 'item2')); 
// Вывод: { id: 2, name: 'item2' }


// Задача 2: Функция sumProperty

function sumProperty(array, property) {
    return array.reduce((sum, obj) => sum + (obj[property] || 0), 0);
}

// Пример использования:
const data = [
    { id: 1, amount: 10 },
    { id: 2, amount: 20 },
    { id: 3, amount: 15 },
];
console.log(sumProperty(data, 'amount')); 
// Вывод: 45


// Задача 3: Функция fetchDataWithTimeoutAndRetry

async function fetchDataWithTimeoutAndRetry(url, maxAttempts, timeout) {
    async function fetchWithTimeout() {
        const controller = new AbortController();
        const signal = controller.signal;
        const timeoutId = setTimeout(() => controller.abort(), timeout);

        try {
            const response = await fetch(url, { signal });
            clearTimeout(timeoutId);
            if (!response.ok) throw new Error("Ошибка ответа");
            return response.json();
        } catch (error) {
            if (error.name === 'AbortError') {
                throw new Error("Время ожидания истекло");
            }
            throw error;
        }
    }

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            return await fetchWithTimeout();
        } catch (error) {
            if (attempt === maxAttempts) throw new Error("Запрос не удался");
        }
    }
}

// Пример использования:
fetchDataWithTimeoutAndRetry('https://jsonplaceholder.typicode.com/posts/1', 3, 1000)
    .then(data => console.log(data))
    .catch(error => console.error(error));


// Задача 4: Функция fetchAndTransform

async function fetchAndTransform(urls) {
    try {
        const results = await Promise.all(urls.map(url =>
            fetch(url).then(res => {
                if (!res.ok) throw new Error("Ошибка загрузки");
                return res.json();
            })
        ));

        return results.map(data => ({
            id: data.id,
            title: data.title,
        }));
    } catch (error) {
        return "Ошибка загрузки";
    }
}

// Пример использования:
const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3',
];
fetchAndTransform(urls)
    .then(data => console.log(data))
    .catch(error => console.error(error));


// Задача 5: Асинхронный генератор paginatedFetchWithStop

async function* paginatedFetchWithStop(baseUrl, maxPages) {
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
    const generator = paginatedFetchWithStop('https://jsonplaceholder.typicode.com/posts', 5);
    for await (const pageData of generator) {
        console.log(pageData);
    }
})();