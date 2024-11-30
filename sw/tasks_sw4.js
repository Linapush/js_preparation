// Задача 1: Функция filterNestedProperty

function filterNestedProperty(array, property) {
    const [mainProp, subProp] = property.split('.');
    return array.filter(item => item[mainProp] && item[mainProp][subProp] === true);
}

// Пример использования:
const data = [
    { name: 'item1', details: { active: true } },
    { name: 'item2', details: { active: false } },
];
console.log(filterNestedProperty(data, 'details.active'));
// Вывод: [ { name: 'item1', details: { active: true } } ]


// Задача 2: Функция averageProperty
function averageProperty(array, property) {
    const total = array.reduce((sum, obj) => sum + obj[property], 0);
    return total / array.length;
}

// Пример использования:
const items = [
    { score: 20 },
    { score: 30 },
    { score: 40 },
];
console.log(averageProperty(items, 'score'));
// Вывод: 30


// Задача 3: Функция fetchWithRetryAndTimeout
async function fetchWithRetryAndTimeout(url, timeout, retries) {
    const fetchWithTimeout = async () => {
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
    };

    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            return await fetchWithTimeout();
        } catch (error) {
            if (attempt === retries) {
                throw new Error("Запрос не удался");
            }
        }
    }
}

// Пример использования:
fetchWithRetryAndTimeout('https://jsonplaceholder.typicode.com/posts/1', 1000, 3)
    .then(data => console.log(data))
    .catch(error => console.error(error));


// Задача 4: Функция loadSelectedData
async function loadSelectedData(urls) {
    const successfulData = [];

    for (const url of urls) {
        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                successfulData.push(data);
            }
        } catch (error) {
            // Логирование ошибки, если необходимо
            console.error(`Ошибка при загрузке данных с ${url}: ${error.message}`);
        }
    }

    return successfulData;
}

// Пример использования:
const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3',
];
loadSelectedData(urls)
    .then(data => console.log(data))
    .catch(error => console.error(error));


// Задача 5: Асинхронный генератор fetchPagesWithStopCondition
async function* fetchPagesWithStopCondition(baseUrl, maxPages) {
    for (let page = 1; page <= maxPages; page++) {
        const url = `${baseUrl}?page=${page}`;
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error("Ошибка загрузки данных");
        }

        const data = await response.json();
        if (data.length === 0) {
            break; // Прекращаем выполнение, если данные пустые
        }

        yield data;
    }
}

// Пример использования:
(async () => {
    const generator = fetchPagesWithStopCondition('https://jsonplaceholder.typicode.com/posts', 5);
    for await (const pageData of generator) {
        console.log(pageData);
    }
})();