// README tasks
// концепции работы с массивами, строками и числами

// 1. Функция filterByRange(arr, min, max)
// Эта функция фильтрует массив чисел, возвращая новый массив, который содержит только те элементы, которые находятся в диапазоне от min до max.


function filterByRange(arr, min, max) {
    return arr.filter(num => num >= min && num <= max);
}

// Пример использования:
const numbers1 = [1, 5, 10, 15, 20];
console.log(filterByRange(numbers1, 5, 15)); 
// Вывод: [5, 10, 15]


// 2. Функция isPalindrome(word)
// Функция проверяет, является ли строка палиндромом. Палиндром — это слово, которое читается одинаково слева направо и справа налево.

function isPalindrome(word) {
    const reversed = word.split('').reverse().join('');
    return word === reversed;
}

// Пример использования:
console.log(isPalindrome('madam')); // true
console.log(isPalindrome('hello')); // false

// 3. Функция toCamelCase(str)
// Эта функция преобразует строку, разделённую пробелами, в camelCase (формат, в котором каждое слово, кроме первого, начинается с заглавной буквы).

function toCamelCase(str) {
    return str
        .split(' ')
        .map((word, index) => index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join('');
}

// Пример использования:
console.log(toCamelCase('hello world example')); // "helloWorldExample"


// 4. Функция getUniqueValues(arr)
// Функция возвращает новый массив, состоящий только из уникальных значений исходного массива. Для этого используется объект Set, который хранит только уникальные элементы.


function getUniqueValues(arr) {
    return [...new Set(arr)];
}

// Пример использования:
const numbers2 = [1, 2, 3, 2, 4, 1];
console.log(getUniqueValues(numbers2)); // [1, 2, 3, 4]


// 5. Функция findMinMax(arr)
// Эта функция возвращает объект, содержащий минимальное и максимальное значение из массива чисел.


function findMinMax(arr) {
    return {
        min: Math.min(...arr),
        max: Math.max(...arr),
    };
}

// Пример использования:
const numbers = [3, 1, 4, 1, 5, 9];
console.log(findMinMax(numbers)); // { min: 1, max: 9 }


// 6. Функция countWords(str)
// Функция принимает строку и возвращает количество слов, разделённых пробелами.

function countWords(str) {
    return str.split(' ').filter(Boolean).length;
}

// Пример использования:
console.log(countWords('hello world')); // 2
console.log(countWords('  this is a test ')); // 4


// 7. Функция generateUniqueRandomNumbers(min, max, count)
// Эта функция генерирует массив уникальных случайных чисел в заданном диапазоне. Если количество требуемых чисел превышает возможное количество уникальных чисел в этом диапазоне, она возвращает пустой массив.

function generateUniqueRandomNumbers(min, max, count) {
    const uniqueNumbers = new Set();
    while (uniqueNumbers.size < count && uniqueNumbers.size < (max - min + 1)) {
        uniqueNumbers.add(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return [...uniqueNumbers];
}

// Пример использования:
console.log(generateUniqueRandomNumbers(1, 10, 5)); // [1, 2, 3, 4, 5]


// 8. Функция areAnagrams(str1, str2)
// Эта функция проверяет, являются ли две строки анаграммами. Анаграммы — это строки, которые можно составить из одинаковых букв.

function areAnagrams(str1, str2) {
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

// Пример использования:
console.log(areAnagrams('listen', 'silent')); // true
console.log(areAnagrams('hello', 'world')); // false


// 9. Функция flattenArray(arr)
// Функция превращает многомерный массив в одномерный, “сглаживая” его.


function flattenArray(arr) {
    return arr.flat(Infinity);
}

// Пример использования:
const nestedArr = [1, [2, 3, [4, 5]], 6];
console.log(flattenArray(nestedArr)); // [1, 2, 3, 4, 5, 6]


// 10. Функция debounce(fn, delay)
// Функция возвращает новую функцию, которая будет вызываться не чаще, чем один раз за delay миллисекунд, независимо от того, сколько раз она была вызвана.

function debounce(fn, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn(...args), delay);
    };
}

// Пример использования:
const debouncedFunc = debounce(() => console.log('Debounced!'), 500);
debouncedFunc(); // Выведет "Debounced!" через 500 мс


// 11. Функция chunkArray(arr, n)
// Эта функция разбивает массив на подмассивы, каждый из которых содержит не более n элементов.

function chunkArray(arr, n) {
    const result = [];
    for (let i = 0; i < arr.length; i += n) {
        result.push(arr.slice(i, i + n));
    }
    return result;
}

// Пример использования:
console.log(chunkArray([1, 2, 3, 4, 5, 6], 2)); // [[1, 2], [3, 4], [5, 6]]


// 12. Функция filterAndSort(arr, key)
// Функция фильтрует массив объектов, оставляя только те, у которых заданный ключ имеет значение true, а затем сортирует объекты по этому ключу.

function filterAndSort(arr, key) {
    return arr.filter(item => item[key] === true).sort((a, b) => a[key] - b[key]);
}

// Пример использования:
const data = [{ name: 'a', active: true }, { name: 'b', active: false }, { name: 'c', active: true }];
console.log(filterAndSort(data, 'active')); // [{ name: 'a', active: true }, { name: 'c', active: true }]


// 13. Функция curry(fn)
// Функция каррирует переданную функцию, то есть делает её возможность вызываться поэтапно с передачей аргументов.

function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        }
        return function(...nextArgs) {
            return curried(...args, ...nextArgs);
        };
    };
}

// Пример использования:
const add2 = (a, b) => a + b;
const curriedAdd = curry(add2);
console.log(curriedAdd(2)(3)); // 5


// 14. Асинхронная функция processArrayWithDelay(arr, asyncFn, delay)
// Эта функция обрабатывает каждый элемент массива с асинхронной функцией с задержкой между вызовами.

async function processArrayWithDelay(arr, asyncFn, delay) {
    for (let i = 0; i < arr.length; i++) {
        await asyncFn(arr[i]);
        if (i < arr.length - 1) {
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }
}

// Пример использования:
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
processArrayWithDelay([1, 2, 3], async (num) => console.log(num), 1000);


// 15. Функция findPairs(arr, sum)
// Функция находит все уникальные пары чисел из массива, которые в сумме дают заданное значение.

function findPairs(arr, sum) {
    const pairs = [];
    const seen = new Set();

    for (const num of arr) {
        const target = sum - num;
        if (seen.has(target)) {
            pairs.push([target, num]);
        }
        seen.add(num);
    }

    return pairs;
}

// Пример использования:
console.log(findPairs([1, 2, 3, 4, 5], 5)); // [[2, 3], [1, 4]]


// 16. Функция fetchWithRetry(url, retries, delay)
// Эта функция выполняет HTTP-запрос по указанному URL и повторяет его, если запрос не удался. Количество попыток и задержка между ними указываются параметрами.

async function fetchWithRetry(url, retries, delay) {
    let attempt = 0;
    while (attempt < retries) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Request failed');
            return await response.json(); // Возвращаем результат запроса
        } catch (error) {
            attempt++;
            if (attempt < retries) {
                await new Promise(resolve => setTimeout(resolve, delay)); // Задержка между попытками
            } else {
                throw new Error('Request failed after multiple attempts');
            }
        }
    }
}

// Пример использования:
fetchWithRetry('https://jsonplaceholder.typicode.com/posts', 3, 1000)
    .then(data => console.log(data))
    .catch(error => console.error(error));


// В этом примере функция будет пытаться выполнить запрос 3 раза с задержкой в 1 секунду между попытками. Если все попытки неудачны, будет выброшена ошибка.


// 17. Функция fetchAndProcessData(urls)
// Эта функция принимает массив URL, выполняет запросы по каждому URL параллельно, а затем возвращает массив с обработанными данными.

async function fetchAndProcessData(urls) {
    try {
        const results = await Promise.all(urls.map(url => fetch(url).then(res => res.json())));
        return results.map(data => {
            // Пример обработки данных, например, извлекаем только id и title
            return data.map(item => ({ id: item.id, title: item.title }));
        });
    } catch (error) {
        throw new Error('Ошибка загрузки данных');
    }
}

// Пример использования:
const urls = ['https://jsonplaceholder.typicode.com/posts', 'https://jsonplaceholder.typicode.com/albums'];
fetchAndProcessData(urls)
    .then(data => console.log(data))
    .catch(error => console.error(error));


// 18. Функция memoize(fn)
// Функция мемоизирует переданную функцию, чтобы избежать повторных вычислений для одинаковых входных данных.


function memoize(fn) {
    const cache = new Map();
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key); // Возвращаем результат из кеша
        }
        const result = fn(...args);
        cache.set(key, result); // Сохраняем результат в кеше
        return result;
    };
}

// Пример использования:
const add = (a, b) => a + b;
const memoizedAdd = memoize(add);
console.log(memoizedAdd(2, 3)); // 5
console.log(memoizedAdd(2, 3)); // 5 (результат из кеша)


// 19. Асинхронный итератор apiIterator(url)
// Этот итератор загружает данные частями из API и возвращает каждый новый набор данных при каждом вызове.


async function* apiIterator(url) {
    let page = 1;
    while (true) {
        const response = await fetch(`${url}?page=${page}`);
        const data = await response.json();
        if (data.length === 0) break; // Если данных нет, завершаем итератор
        yield data;
        page++;
    }
}

// Пример использования:
const iterator = apiIterator('https://jsonplaceholder.typicode.com/posts');
(async () => {
    for await (const data of iterator) {
        console.log(data);
    }
})();


// 20. Функция findDuplicates(arr)
// Эта функция находит дубликаты в массиве с использованием объекта Map, который помогает эффективно проверять наличие элементов.


function findDuplicates(arr) {
    const map = new Map();
    const duplicates = [];
    for (const item of arr) {
        if (map.has(item)) {
            duplicates.push(item);
        } else {
            map.set(item, true);
        }
    }
    return duplicates;
}

// Пример использования:
console.log(findDuplicates([1, 2, 3, 2, 4, 5, 3])); // [2, 3]


// 21. Генератор sequenceGenerator(start, end)
// Генератор, который генерирует последовательность чисел от start до end.

function* sequenceGenerator(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}

// Пример использования:
const generator = sequenceGenerator(1, 5);
for (const num of generator) {
    console.log(num);
}
// Вывод: 1, 2, 3, 4, 5


// 22. Функция concatStringsAsync(arr)
// Эта асинхронная функция объединяет все строки из массива с задержкой между каждым добавлением строки в итоговый результат.


async function concatStringsAsync(arr) {
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
        if (i < arr.length - 1) {
            await new Promise(resolve => setTimeout(resolve, 500)); // Задержка 500 мс
        }
    }
    return result;
}

// Пример использования:
const strings = ['Hello', ' ', 'world', '!'];
concatStringsAsync(strings).then(result => console.log(result)); // "Hello world!"


// 23. Функция groupBy(arr, key)
// Эта функция группирует объекты по указанному ключу, возвращая объект, где ключи — уникальные значения этого поля.


function groupBy(arr, key) {
    return arr.reduce((result, item) => {
        const groupKey = item[key];
        if (!result[groupKey]) {
            result[groupKey] = [];
        }
        result[groupKey].push(item);
        return result;
    }, {});
}

// Пример использования:
const users2 = [{ name: 'Alice', group: 'admin' }, { name: 'Bob', group: 'user' }];
console.log(groupBy(users2, 'group'));
// Вывод: { admin: [{ name: 'Alice', group: 'admin' }], user: [{ name: 'Bob', group: 'user' }] }


// 24. Функция rateLimit(fn, limit)
// Эта функция позволяет вызывать переданную функцию fn не более limit раз в секунду.


function rateLimit(fn, limit) {
    let lastCall = 0;
    return function(...args) {
        const now = Date.now();
        if (now - lastCall >= 1000 / limit) {
            lastCall = now;
            fn(...args);
        }
    };
}

// Пример использования:
const logMessage = rateLimit(() => console.log('Hello!'), 2);
logMessage();
logMessage();
logMessage(); // Будет вызван только 1 раз в секунду


// 25. Функция tokenize(str, delimiters)
// Эта функция разбивает строку на токены по указанным разделителям и возвращает массив токенов.


function tokenize(str, delimiters) {
    const regex = new RegExp(`[${delimiters}]`);
    return str.split(regex).filter(Boolean); // Убираем пустые токены
}

// Пример использования:
console.log(tokenize('a,b; c.d', ',;.' )); // ["a", "b", "c", "d"]



// Вот ещё несколько задач на типы данных.

// 1. Задача: Проверка на Чётность
// Напишите функцию, которая проверяет, является ли число чётным.

function isEven(num) {
    return num % 2 === 0;
}

console.log(isEven(4)); // true
console.log(isEven(7)); // false


// 2. Задача: Массив от 1 до N
// Напишите функцию, которая генерирует массив от 1 до N.

function generateArray(n) {
    return Array.from({ length: n }, (_, index) => index + 1);
}

console.log(generateArray(5)); // [1, 2, 3, 4, 5]


// 3. Задача: Уникальные значения из двух массивов
// Напишите функцию, которая возвращает массив, состоящий из уникальных значений из двух массивов.

function uniqueValues(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}

console.log(uniqueValues([1, 2, 3], [3, 4, 5])); // [1, 2, 3, 4, 5]


// 4. Задача: Поиск самого длинного слова в строке
// Напишите функцию, которая находит самое длинное слово в строке.

function findLongestWord(str) {
    const words = str.split(' ');
    let longestWord = '';
    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}

console.log(findLongestWord('I am learning JavaScript right now!')); // 'JavaScript'


// 5. Задача: Преобразование строки в заглавные буквы каждого слова
// Напишите функцию, которая принимает строку и преобразует первые буквы каждого слова в заглавные.

function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

console.log(capitalizeWords('hello world')); // 'Hello World'


// 6. Задача: Подсчёт гласных в строке
// Напишите функцию, которая считает количество гласных (a, e, i, o, u) в строке.


function countVowels(str) {
    const vowels = 'aeiou';
    let count = 0;
    for (const char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

console.log(countVowels('Hello World')); // 3


// 7. Задача: Отсортировать массив объектов по свойству
// Напишите функцию, которая сортирует массив объектов по указанному свойству.


function sortByProperty(arr, property) {
    return arr.sort((a, b) => {
        if (a[property] > b[property]) return 1;
        if (a[property] < b[property]) return -1;
        return 0;
    });
}

const users3 = [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }, { name: 'Charlie', age: 20 }];
console.log(sortByProperty(users3, 'age'));
// /*
// [
//   { name: 'Charlie', age: 20 },
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 }
// ]
// */


// 8. Задача: Проверка на Паллиндром
// Напишите функцию, которая проверяет, является ли строка палиндромом (читается одинаково с обеих сторон).


function isPalindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

console.log(isPalindrome('A man, a plan, a canal, Panama')); // true
console.log(isPalindrome('Hello')); // false


// 9. Задача: Удаление дубликатов в строке
// Напишите функцию, которая удаляет все дубликаты символов из строки, оставляя только первые вхождения.

function removeDuplicates(str) {
    return [...new Set(str)].join('');
}

console.log(removeDuplicates('banana')); // 'ban'


// 10. Задача: Перевести строку в snake_case
// Напишите функцию, которая переводит строку из camelCase в snake_case.

function toSnakeCase(str) {
    return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
}

console.log(toSnakeCase('camelCaseString')); // 'camel_case_string'



// 11. Задача: Подсчёт символов в строке
// Напишите функцию, которая подсчитывает, сколько раз каждый символ встречается в строке.


function countChars(str) {
    const charCount = {};
    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    return charCount;
}

console.log(countChars('hello world'));
// { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }


// 12. Задача: Фильтрация массива объектов по ключу
// Напишите функцию, которая фильтрует массив объектов по значению определённого ключа.


function filterByKey(arr, key, value) {
    return arr.filter(item => item[key] === value);
}

const users = [
    { name: 'Alice', role: 'admin' },
    { name: 'Bob', role: 'user' },
    { name: 'Charlie', role: 'admin' },
];
console.log(filterByKey(users, 'role', 'admin'));
/*
[
  { name: 'Alice', role: 'admin' },
  { name: 'Charlie', role: 'admin' }
]
*/


// 13. Задача: Генератор случайных строк
// Напишите функцию, которая генерирует случайную строку заданной длины, используя символы из набора.


function generateRandomString(length, charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789') {
    let result = '';
    const charsetLength = charset.length;
    for (let i = 0; i < length; i++) {
        result += charset.charAt(Math.floor(Math.random() * charsetLength));
    }
    return result;
}

console.log(generateRandomString(10)); // Пример: 'G8zqVvP7f9'


// 14. Задача: Преобразование строки в массив слов
// Напишите функцию, которая преобразует строку в массив слов, где разделителем является пробел.

function stringToArray(str) {
    return str.split(' ');
}

console.log(stringToArray('This is a string')); // ['This', 'is', 'a', 'string']


// 15. Задача: Печать чисел от 1 до N
// Напишите функцию, которая выводит все числа от 1 до N, но для чисел, кратных 3, печатает “Fizz”, для чисел, кратных 5 — “Buzz”, а для чисел, кратных и 3, и 5 — “FizzBuzz”.


function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}

fizzBuzz(15);
// Вывод: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz


// Вот ещё несколько задач с решениями для практики:

// 1. Задача: Сумма чисел до N
// Напишите функцию, которая возвращает сумму всех чисел от 1 до N.

function sumUpToN(n) {
    return (n * (n + 1)) / 2;
}

console.log(sumUpToN(5)); // 15 (1 + 2 + 3 + 4 + 5)
console.log(sumUpToN(10)); // 55


// 2. Задача: Проверка на чётность для массива
// Напишите функцию, которая проверяет, все ли числа в массиве чётные.

function areAllEven(arr) {
    return arr.every(num => num % 2 === 0);
}

console.log(areAllEven([2, 4, 6])); // true
console.log(areAllEven([2, 3, 6])); // false


// 3. Задача: Массив чисел в порядке возрастания
// Напишите функцию, которая принимает массив чисел и возвращает новый массив, отсортированный по возрастанию.

function sortNumbers(arr) {
    return arr.slice().sort((a, b) => a - b);
}

console.log(sortNumbers([4, 2, 8, 5, 1])); // [1, 2, 4, 5, 8]


// 4. Задача: Перевод строки в нижний регистр
// Напишите функцию, которая принимает строку и возвращает её в нижнем регистре, но при этом все слова в строке остаются с первой заглавной буквой.

function capitalizeFirstLetterOfEachWord(str) {
    return str
        .toLowerCase()
        .replace(/\b\w/g, char => char.toUpperCase());
}

console.log(capitalizeFirstLetterOfEachWord('hello world!')); // 'Hello World!'


// 5. Задача: Обратная строка
// Напишите функцию, которая принимает строку и возвращает её в обратном порядке.

function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString('hello')); // 'olleh'


// 6. Задача: Поиск элемента в массиве
// Напишите функцию, которая проверяет, есть ли элемент в массиве.

function contains(arr, element) {
    return arr.includes(element);
}

console.log(contains([1, 2, 3, 4], 3)); // true
console.log(contains([1, 2, 3, 4], 5)); // false


// 7. Задача: Умножение элементов массива
// Напишите функцию, которая умножает все числа в массиве на заданное число.

function multiplyArray(arr, multiplier) {
    return arr.map(num => num * multiplier);
}

console.log(multiplyArray([1, 2, 3], 2)); // [2, 4, 6]


// 8. Задача: Удаление всех пробелов в строке
// Напишите функцию, которая удаляет все пробелы из строки.

function removeSpaces(str) {
    return str.replace(/\s+/g, '');
}

console.log(removeSpaces('Hello World! How are you?')); // 'HelloWorld!Howareyou?'


// 9. Задача: Проверка на число
// Напишите функцию, которая проверяет, является ли строка числом.

function isNumber(str) {
    return !isNaN(str);
}

console.log(isNumber('123')); // true
console.log(isNumber('abc')); // false


// 10. Задача: Подсчёт количества повторений
// Напишите функцию, которая подсчитывает, сколько раз повторяется каждый элемент в массиве.

function countOccurrences(arr) {
    const count = {};
    arr.forEach(item => {
        count[item] = (count[item] || 0) + 1;
    });
    return count;
}

console.log(countOccurrences([1, 2, 2, 3, 1, 4, 1])); 
// { '1': 3, '2': 2, '3': 1, '4': 1 }


// 11. Задача: Подсчёт длины строк в массиве
// Напишите функцию, которая принимает массив строк и возвращает массив длин этих строк.

function stringLengths(arr) {
    return arr.map(str => str.length);
}

console.log(stringLengths(['apple', 'banana', 'cherry'])); // [5, 6, 6]


// 12. Задача: Печать всех пар чисел, дающих сумму N
// Напишите функцию, которая находит все уникальные пары чисел из массива, которые в сумме дают заданное значение.

function findPairs(arr, sum) {
    const pairs = [];
    const seen = new Set();

    for (const num of arr) {
        const target = sum - num;
        if (seen.has(target)) {
            pairs.push([num, target]);
        }
        seen.add(num);
    }

    return pairs;
}

console.log(findPairs([1, 2, 3, 4, 5], 5)); // [[4, 1], [3, 2]]


// 13. Задача: Фильтрация чисел по диапазону
// Напишите функцию, которая фильтрует числа из массива, находящиеся в заданном диапазоне.

function filterByRange(arr, min, max) {
    return arr.filter(num => num >= min && num <= max);
}

console.log(filterByRange([1, 2, 3, 4, 5, 6], 3, 5)); // [3, 4, 5]


// 14. Задача: Параметризация функции
// Напишите функцию, которая принимает функцию и параметр, а затем применяет функцию с параметром несколько раз.

function applyMultipleTimes(fn, param, times) {
    for (let i = 0; i < times; i++) {
        fn(param);
    }
}

applyMultipleTimes(console.log, 'Hello', 3); 
// // Hello
// // Hello
// // Hello


// 15. Задача: Группировка по длине строки
// Напишите функцию, которая группирует слова в строке по их длине.

function groupByLength(arr) {
    return arr.reduce((acc, word) => {
        const length = word.length;
        if (!acc[length]) acc[length] = [];
        acc[length].push(word);
        return acc;
    }, {});
}

console.log(groupByLength(['apple', 'banana', 'cherry', 'date'])); 
// { '4': ['date'], '5': ['apple'], '6': ['banana', 'cherry'] }



// Вот ещё несколько задач с решениями для практики:

// 1. Задача: Фильтрация чётных чисел
// Напишите функцию, которая принимает массив чисел и возвращает новый массив, состоящий только из чётных чисел.

function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]


// 2. Задача: Проверка на простое число
// Напишите функцию, которая проверяет, является ли число простым.

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log(isPrime(7)); // true
console.log(isPrime(10)); // false


// 3. Задача: Подсчёт вхождений подстроки в строку
// Напишите функцию, которая считает, сколько раз подстрока встречается в строке.


function countSubstring(str, substr) {
    return (str.split(substr).length - 1);
}

console.log(countSubstring('hello world, hello again', 'hello')); // 2


// 4. Задача: Создание объекта из массива пар
// Напишите функцию, которая принимает массив пар и преобразует его в объект.

function arrayToObject(arr) {
    return arr.reduce((obj, [key, value]) => {
        obj[key] = value;
        return obj;
    }, {});
}

console.log(arrayToObject([['name', 'Alice'], ['age', 25], ['city', 'NY']]));
// { name: 'Alice', age: 25, city: 'NY' }


// 5. Задача: Поиск второго максимального числа
// Напишите функцию, которая находит второе по величине число в массиве.

function secondLargest(arr) {
    const uniqueArr = [...new Set(arr)]; // удаляем дубликаты
    uniqueArr.sort((a, b) => b - a); // сортируем по убыванию
    return uniqueArr[1];
}

console.log(secondLargest([1, 3, 4, 5, 5, 4, 3])); // 4


// 6. Задача: Транспонирование матрицы
// Напишите функцию, которая транспонирует матрицу (поворот её на 90 градусов).

function transposeMatrix(matrix) {
    return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(transposeMatrix(matrix));
// [
//   [1, 4, 7],
//   [2, 5, 8],
//   [3, 6, 9]
// ]


// 7. Задача: Поменять местами элементы массива
// Напишите функцию, которая меняет местами два элемента в массиве по их индексам.

function swapElements(arr, index1, index2) {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}

console.log(swapElements([1, 2, 3, 4], 0, 3)); // [4, 2, 3, 1]


// 8. Задача: Проверка, является ли строка анаграммой
// Напишите функцию, которая проверяет, являются ли две строки анаграммами (составлены из одних и тех же символов).

function areAnagrams(str1, str2) {
    const normalize = str => str.toLowerCase().split('').sort().join('');
    return normalize(str1) === normalize(str2);
}

console.log(areAnagrams('listen', 'silent')); // true
console.log(areAnagrams('hello', 'world')); // false


// 9. Задача: Преобразование строки в заголовки (title case)
// Напишите функцию, которая принимает строку и возвращает её в формате заголовков, где каждое слово начинается с заглавной буквы.

function toTitleCase(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

console.log(toTitleCase('hello world')); // 'Hello World'


// 10. Задача: Удаление дубликатов из массива
// Напишите функцию, которая удаляет все дубликаты из массива.

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 3, 2, 3, 4])); // [1, 2, 3, 4]


// 11. Задача: Найти максимальное произведение двух чисел
// Напишите функцию, которая находит максимальное произведение двух чисел в массиве.

function maxProduct(arr) {
    arr.sort((a, b) => a - b); // Сортируем массив по возрастанию
    const n = arr.length;
    return Math.max(arr[0] * arr[1], arr[n-1] * arr[n-2]);
}

console.log(maxProduct([1, 3, 2, 6, 4])); // 24


// 12. Задача: Проверка, является ли число палиндромом
// Напишите функцию, которая проверяет, является ли число палиндромом (читается одинаково слева направо и справа налево).

function isPalindromeNumber(num) {
    const str = num.toString();
    return str === str.split('').reverse().join('');
}

console.log(isPalindromeNumber(121)); // true
console.log(isPalindromeNumber(123)); // false


// 13. Задача: Перевернуть массив
// Напишите функцию, которая переворачивает массив без использования встроенных методов.

function reverseArray(arr) {
    const result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
}

console.log(reverseArray([1, 2, 3, 4])); // [4, 3, 2, 1]


// 14. Задача: Преобразование строки в массив слов
// Напишите функцию, которая преобразует строку в массив слов.

function stringToArray(str) {
    return str.split(' ');
}

console.log(stringToArray('Hello world! How are you?')); // ['Hello', 'world!', 'How', 'are', 'you?']


// 15. Задача: Сумма всех чисел массива
// Напишите функцию, которая находит сумму всех чисел в массиве.

function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

console.log(sumArray([1, 2, 3, 4])); // 10

