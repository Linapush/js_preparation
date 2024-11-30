// Как работает метод Array.prototype.map() и чем он отличается от forEach()?	     В

// forEach() может быть предпочтительнее, если вы не пытаетесь изменить данные в своем массиве, вместо этого хотите просто что-то сделать с ним — например, сохранить его в базе данных или вывести в консоль:

let ex_arr = ['a', 'b', 'c', 'd'];
ex_arr.forEach((letter) => {
	console.log(letter);
});

// В то время как `map()` может быть предпочтительнее при изменении данных. Он не только быстрее, но и возвращает новый массив.

let ex_arr2 = [1, 2, 3, 4, 5];
let ex_arr3 = ex_arr2.map(num => num * 2).filter(num => num > 5);
// arr2 = [6, 8, 10]

// Разница 
// - map() возвращает новый массив. 
// - forEach() выполняет действие, но не возвращает результата.


// Методы: <Array>

// Массив - это объект, который хранит коллекцию элементов в определенном порядке. Элементы массива могут быть любого типа данных, включая другие массивы
// Массивы в JavaScript — это динамические структуры данных, которые могут содержать элементы любого типа (числа, строки, объекты, функции и т.д.). Они упорядочены и имеют числовые индексы, начиная с 0.
// Массивы обладают рядом встроенных методов для удобной работы с данными, таких как добавление, удаление, фильтрация, преобразование и агрегация элементов.

let newArr = new Array();

// Основные методы массивов:

// 1. push

// Добавляет элемент (или элементы) в конец массива.
// 	•	Возвращает новую длину массива.

const arr = [1, 2, 3];
arr.push(4); 
console.log(arr); // [1, 2, 3, 4]

// 2. pop

// Удаляет последний элемент массива.
// 	•	Возвращает удалённый элемент.

const arr2 = [1, 2, 3];
const last1 = arr2.pop();
console.log(arr2); // [1, 2]
console.log(last1); // 3

// 3. map

// Создаёт новый массив, выполняя указанную функцию для каждого элемента исходного массива.
// 	•	Исходный массив остаётся неизменным.

const arr3 = [1, 2, 3];
const squared = arr3.map(num => num * num);
console.log(squared); // [1, 4, 9]

// 4. filter

// Создаёт новый массив, включающий только те элементы, которые соответствуют условию.

const arr4 = [1, 2, 3, 4, 5];
const evenNumbers = arr4.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

// 5. reduce

// Применяет функцию к каждому элементу массива, чтобы получить одно итоговое значение (например, сумму, произведение).
// 	•	Аргументы функции: аккумулятор, текущий элемент, текущий индекс, массив.

const arr5 = [1, 2, 3, 4];
const sum1 = arr5.reduce((acc, num) => acc + num, 0);
console.log(sum1); // 10

// 6. shift

// Удаляет первый элемент массива.
// 	•	Возвращает удалённый элемент.

const arr6 = [1, 2, 3];
const first = arr6.shift();
console.log(arr6); // [2, 3]
console.log(first); // 1

// 7. unshift

// Добавляет элемент (или элементы) в начало массива.
// 	•	Возвращает новую длину массива.

const arr7 = [2, 3];
arr7.unshift(1);
console.log(arr7); // [1, 2, 3]

// 8. find

// Возвращает первый элемент массива, который соответствует условию, или undefined, если ничего не найдено.

const arr8 = [1, 2, 3, 4];
const found = arr8.find(num => num > 2);
console.log(found); // 3

// 9. sort

// Сортирует массив. По умолчанию сортировка происходит в порядке преобразования элементов в строки.
// 	•	Для чисел рекомендуется передать функцию сравнения.

const arr9 = [3, 1, 4, 2];
arr9.sort((a, b) => a - b);
console.log(arr9); // [1, 2, 3, 4]

// 10. splice

// Добавляет, заменяет или удаляет элементы массива на основе индекса.

const arr10 = [1, 2, 3, 4];
arr10.splice(1, 2, 'a', 'b'); // Удаляем 2 элемента, добавляем 'a', 'b'
console.log(arr10); // [1, 'a', 'b', 4]

// 11. slice

// Создаёт новый массив, копируя элементы из указанного диапазона.
// 	•	Исходный массив остаётся неизменным.

const arr11 = [1, 2, 3, 4, 5];
const subArray = arr11.slice(1, 4); // Индексы 1 (включительно) до 4 (не включительно)
console.log(subArray); // [2, 3, 4]

// Примеры применения методов

// 	1.	Получение уникальных значений:

const arr12 = [1, 2, 2, 3, 3, 4];
const unique1 = [...new Set(arr12)];
console.log(unique1); // [1, 2, 3, 4]

// 	2.	Комбинация filter и map:

const arr13 = [1, 2, 3, 4, 5];
const squaredEvens = arr13.filter(num => num % 2 === 0).map(num => num * num);
console.log(squaredEvens); // [4, 16]

// 	3.	Сумма чисел через reduce:

const arr14 = [10, 20, 30];
const total = arr14.reduce((sum, num) => sum + num, 0);
console.log(total); // 60

// Массивы — мощный инструмент, благодаря множеству встроенных методов их использование позволяет быстро и эффективно работать с данными.


// push

`Array.push(...items: T[]): number
New elements to add to the array.

Appends new elements to the end of an array, and returns the new length of the array.`

arr.push(1)
arr.push('1', '2')
arr.push('hello')
arr.push([4, 5], { 6: 'value'})

console.log(arr)
console.log(arr.length)

// join 

const words = [
    'Лучше',
    'один',
    'раз',
    'увидеть',
    'чем',
    'сто',
    'раз',
    'услышать',
];
const phrase = words.join(' ');
console.log(phrase); // "Лучше один раз увидеть чем сто раз услышать"


// Методы для работы с массивами

// Вот основные методы массивов в JavaScript, которые пригодятся для задач:
// 	1.	push() — добавляет элемент в конец массива.
// 	2.	pop() — удаляет последний элемент из массива и возвращает его.
// 	3.	shift() — удаляет первый элемент из массива и возвращает его.
// 	4.	unshift() — добавляет элемент в начало массива.
// 	5.	splice(start, deleteCount, ...items) — изменяет массив (добавляет/удаляет элементы).
// 	6.	slice(start, end) — возвращает новый массив из исходного.
// 	7.	map(callback) — создаёт новый массив, применяя функцию к каждому элементу.
// 	8.	filter(callback) — создаёт массив, оставляя только элементы, прошедшие проверку.
// 	9.	reduce(callback, initialValue) — свёртка массива в одно значение.
// 	10.	forEach(callback) — выполняет функцию для каждого элемента.
// 	11.	find(callback) — возвращает первый элемент, который соответствует условию.
// 	12.	indexOf(value) — возвращает индекс первого вхождения элемента.
// 	13.	includes(value) — проверяет, содержит ли массив элемент.
// 	14.	sort(compareFunction) — сортирует массив.
// 	15.	reverse() — разворачивает массив.

// Простые задачи с решениями

// Задача 1: Добавление элементов

// Описание: Создайте массив из чисел. Добавьте в него новое число в конец и начало.

let numbers1 = [1, 2, 3];
numbers1.push(4); // добавляем в конец
numbers1.unshift(0); // добавляем в начало

console.log(numbers1); // [0, 1, 2, 3, 4]

// Задача 2: Удаление элемента

// Описание: Удалите последний элемент из массива и верните его.

let numbers2 = [1, 2, 3, 4];
let last = numbers2.pop();

console.log(last); // 4
console.log(numbers2); // [1, 2, 3]

// Задача 3: Извлечение подмассива

// Описание: Извлеките первые два элемента массива в новый массив.

let numbers3 = [1, 2, 3, 4];
let firstTwo = numbers3.slice(0, 2);

console.log(firstTwo); // [1, 2]
console.log(numbers3); // [1, 2, 3, 4] (оригинальный массив не изменился)

// Задача 4: Поиск элемента

// Описание: Проверьте, есть ли в массиве число 3.

let numbers4 = [1, 2, 3, 4];
let hasThree = numbers4.includes(3);

console.log(hasThree); // true

// Переход к более сложным задачам

// Задача 5: Удвоение значений

// Описание: Напишите функцию, которая принимает массив чисел и возвращает массив, где все элементы удвоены.

function doubleNumbers(arr) {
  return arr.map(num => num * 2);
}

let numbers5 = [1, 2, 3];
let doubled = doubleNumbers(numbers5);

console.log(doubled); // [2, 4, 6]

// Задача 6: Фильтрация чётных чисел

// Описание: Напишите функцию, которая возвращает только чётные числа из массива.

function filterEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}

let numbers6 = [1, 2, 3, 4, 5];
let evens = filterEvenNumbers(numbers6);

console.log(evens); // [2, 4]

// Сложные задачи

// Задача 7: Подсчёт суммы

// Описание: Напишите функцию, которая считает сумму всех чисел в массиве.

function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

let numbers7 = [1, 2, 3, 4];
let sum = sumArray(numbers7);

console.log(sum); // 10

// Задача 8: Уникальные элементы

// Описание: Напишите функцию, которая возвращает массив уникальных элементов.

function uniqueElements(arr) {
  return [...new Set(arr)];
}

let numbers8 = [1, 2, 2, 3, 4, 4, 5];
let unique = uniqueElements(numbers8);

console.log(unique); // [1, 2, 3, 4, 5]

// Задача 9: Группировка по чётности

// Описание: Разделите массив чисел на два массива — чётных и нечётных.

function groupByParity(arr) {
  let evens = arr.filter(num => num % 2 === 0);
  let odds = arr.filter(num => num % 2 !== 0);
  return { evens, odds };
}

let numbers9 = [1, 2, 3, 4, 5, 6];
let grouped = groupByParity(numbers9);

console.log(grouped); 
// { evens: [2, 4, 6], odds: [1, 3, 5] }

// Задача 10: Сортировка по убыванию

// Описание: Напишите функцию, которая сортирует массив чисел в порядке убывания.

function sortDescending(arr) {
  return arr.sort((a, b) => b - a);
}

let numbers10 = [5, 2, 9, 1, 5, 6];
let sorted = sortDescending(numbers10);

console.log(sorted); // [9, 6, 5, 5, 2, 1]


// Очень сложная задача
// Задача 11: Поиск наиболее часто встречающегося элемента
// Описание: Напишите функцию, которая находит элемент, который встречается в массиве чаще всего.

function mostFrequentElement(arr) {
  let frequency = {};
  
  arr.forEach(num => {
    frequency[num] = (frequency[num] || 0) + 1;
  });

  let maxFrequency = 0;
  let mostFrequent = null;

  for (let key in frequency) {
    if (frequency[key] > maxFrequency) {
      maxFrequency = frequency[key];
      mostFrequent = key;
    }
  }

  return mostFrequent;
}

let numbers = [1, 2, 3, 2, 1, 2, 4];
let mostFrequent = mostFrequentElement(numbers);

console.log(mostFrequent); // 2