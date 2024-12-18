Что такое переменная в JavaScript, и какие типы переменных существуют? Приведите примеры.

Переменная позволяет сохранять и использовать значения в течение выполнения скрипта.

Number (число)
String (строка)
Boolean (логическое значение)
Undefined (неопределено)
Null (ничего)
Object (объект) - как словарь в питоне
Symbol (символ) - как строка
Symbol("foo") === Symbol("foo"); // false

Bigint (большие числа): 9007199254740991n
Чтобы создать значение типа BigInt , необходимо добавить n в конец числового литерала или вызвать функцию BigInt
Для чего используется оператор typeof? Какой результат он вернет для typeof null и typeof undefined?

используется для получения типа данных объекта

console.log(typeof null);     // "object" (специальное поведение)
console.log(typeof undefined); // "undefined"

Что такое массив в JavaScript, и как можно получить доступ к его элементам?

Массив - это объект, который хранит коллекцию элементов в определенном порядке. Элементы массива могут быть любого типа данных, включая другие массивы.

Создание массива 
Массив можно создать следующими способами: 
let numbers = [1, 2, 3, 4, 5]; // Литерал массива
let fruits = new Array("Apple", "Banana", "Cherry"); // Конструктор

По индексу: fruits[0]

Методы:
push(), pop() — добавление/удаление элемента в конец массива. 
shift(), unshift() — удаление/добавление элемента в начало массива.
splice(): Изменяет содержимое массива, добавляя или удаляя элементы.

Объясните разницу между let, const и var. Когда лучше использовать каждый из них?

var 
Область видимости: функциональная (в пределах функции). 
Поведение: подвержен "всплытию" (hoisting), но инициализация происходит позже. Использование: устарел, рекомендуется избегать.

function testVar() { 
console.log(a); // undefined  (обратите внимание, не 10)
var a = 10; 
}

let 
Область видимости: блочная (в пределах {} ). 
Поведение: подвержен "всплытию", но нельзя использовать до инициализации. Использование: для изменяемых переменных

const 
Область видимости: блочная.
При помощи const нельзя объявлять переменные без значения
! Объект, хранящийся в const, можно мутировать. Объекты хранятся по ссылке, и изменение объекта не приводит к изменению ссылки на него (т.е. можно менять св-ва объекта например)

Разница между var и let: 
var можно: использовать до объявления, переобъявлять, использовать где угодно, даже если объявили в блоке (if)
с let это все нельзя делать

Что такое функции в JavaScript, и как они объявляются? Приведите пример.

Функции — это блоки кода, которые выполняются по вызову. Они используются для организации кода, повторного использования и создания модулей.

Function Declaration
// Пример функции-объявления
function greet(name) {
   return `Привет, ${name}!`;
}

Function Expression
// Пример функции-выражения
let add = function(a, b) {
   return a + b;
};


// самовызываемая
var sum = (function(a) { return a + b;} )(1, 2);

Стрелочная функция
let multiply = (a, b) => a * b;
multiply();
(вместо function и скобок - равно и стрелки)

Какое значение возвращает функция по умолчанию, если в ней не указан return?
 undefined
Что такое "строгий режим" ('use strict'), и зачем он используется?

«use strict» должен всегда стоять в начале. Всего файла или функции.

Основные изменения в строгом режиме:
Невозможно использовать переменные, которые не были объявлены.
Невозможно дублировать параметры функции. (function sum(a, b, a) {})
Ограничивается использование «this» в функциях, не являющихся методами.
Запрещено использовать зарезервированные слова.

// Без строгого режима
console.log(typeof myVar); // Выведет "undefined"


// С строгим режимом
'use strict';
console.log(typeof myVar); // Выведет "undefined", но выдаст предупреждение

неопределенные переменные
// Без строгого режима: ничего


// С строгим режимом: ошибка
'use strict';
myVar = 5; // Несуществующая переменная

// такой же пример в функции
function foo() {
   'use strict';
   arguments = 42;
}

Что такое объекты в JavaScript, и как добавить к объекту новое свойство?

Объект — это структура данных, которая хранит набор пар ключ-значение. Ключи — это строки (или символы), а значения могут быть любого типа.

var person = new Object();


var person = {};


let person = {
   name: "Alice",
   // метод:
   greet: function() { 
console.log(`Hello, my name is ${this.name}`); 
   }
};


person.greet();

Добавление свойств
person.name = "Ivan"


person['name'] = "Ivan"

Что такое шаблонные строки, и как их использовать? Приведите пример.

Шаблонные строки позволяют вставлять в строки переменные и выражения.

Обозначаются двумя обратными кавычками.
В них можно записывать не только переменные:
console.log(`Результат сложения: ${x + y}`);
console.log(`Привет, я ${person.name}, мне ${person.age} лет.`);

Также позволяют создать многострочные строки:
let multiline = `This is a string
that spans multiple lines.`;

Что такое NaN в JavaScript, и как можно проверить, является ли значение NaN?	В
NaN - специальное значение "не число", которое обычно говорит о том, что была выполнена бессмысленная операция. Результатом практически любой операции, в которой участвует NaN, будет NaN. (!) NaN имеет тип данных number.

NaN === NaN; // false (!)

Как проверить на NaN:
isNaN()
Number.isNaN()  (проверяет только на NaN)

isNaN() вернёт true, если значение в настоящий момент является NaN, или если оно станет NaN после того, как преобразуется в число.
Number.isNaN() вернёт true, только если текущим значением является NaN.

isNaN("hello"); // true


Number.isNaN("hello"); // false
Number.isNaN(NaN); // true
Объясните разницу между == и ===. Почему важно использовать ===?	Н

==   само выполняет преобразование типов
0 == false; // true
'' == false; // true
0 === false; // false, так как сравниваются разные типы


null == undefined; // true
null === undefined; // false, так как сравниваются разные типы

Что такое замыкание, и как оно работает в JavaScript? Приведите пример.
Замыкание - это функция, у которой есть доступ к области видимости функции, которая сформирована вокруг нее.  
Замыкание даёт доступ к контексту внешней функции из внутренней функции (переменным, объявленным во внешней функции и переданным ей аргументам).

function person() {
  let name = 'Peter';
  
  return function displayName() {
    console.log(name);
  };
}
let peter = person();
peter(); // 'Peter'

Внутренняя ф-ция displayName имеет доступ к переменной name внешней ф-ции. 
Как работают замыкания? 
Когда выполняется функция person(), JS-движок создаёт новый контекст выполнения и новое лексическое окружение для этой функции. 
Её лексическое окружение будет выглядеть так:

personLexicalEnvironment = {
  environmentRecord: {
    name : 'Peter', // имя переменной
    displayName: < displayName function reference> // имя ф-ции
  }
  outer: <globalLexicalEnvironment> // 
}

Завершая работу, функция возвращает функцию displayName(), а в переменную peter записывается ссылка на эту функцию.

Контекст выполнения - абстрактное окружение, в котором вычисляется и выполняется JavaScript-код. 
Лексичесое окружение - структура данных, которая хранит сведения о соответствии идентификаторов (имени переменной или функции) и переменных (ссылки на объект). 

Пример у Ани:
function createCounter() {
   let count = 0;
   return function() {
       count++;
       return count;
   };
}


const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2

Как работает метод Array.prototype.map() и чем он отличается от forEach()?	     В

forEach() может быть предпочтительнее, если вы не пытаетесь изменить данные в своем массиве, вместо этого хотите просто что-то сделать с ним — например, сохранить его в базе данных или вывести в консоль:

let arr = ['a', 'b', 'c', 'd'];
arr.forEach((letter) => {
	console.log(letter);
});

В то время как `map()` может быть предпочтительнее при изменении данных. Он не только быстрее, но и возвращает новый массив.

let arr = [1, 2, 3, 4, 5];
let arr2 = arr.map(num => num * 2).filter(num => num > 5);
// arr2 = [6, 8, 10]

Разница 
- map() возвращает новый массив. 
- forEach() выполняет действие, но не возвращает результата.

Как работают методы call, apply, и bind, и в чем между ними разница?	Н

Методы call , apply и bind используются для управления значением this в функциях и позволяют явно задавать контекст выполнения.

const car = {
   model: 'Toyota',
   year: 2007,
   showModel: function(color, engine){
     console.log(this.model, color, engine);
   }
};


const anotherCar = {
   model: 'Benz',
   year: 1998
};


// call: первым аргументом значение this, далее аргументы для метода по отдельности.
car.showModel.call(anotherCar, 'green', 'gas')  // Benz red diesel


// apply: то же самое, только аргументы в виде массива
car.showModel.apply(anotherCar, ['red', 'diesel']);


// bind: позволяет создать новую функцию и записать ее в переменную
const modelShower = car.showModel.bind(anotherCar);
modelShower('black', 'diesel');

Что такое функции обратного вызова (callback functions) и как их использовать?	А

Callback-функция — это функция, передаваемая в другую функцию как аргумент и вызываемая внутри этой функции.
function doOperation(a, b, callback) {
   return callback(a, b);
}


function add(x, y) {
   return x + y;
}


console.log(doOperation(5, 3, add)); // 8

Использование: 
Асинхронные операции:
setTimeout(() => {
   console.log("This message appears after 2 seconds");
}, 2000);

 Обработка массивов:
Методы массивов, такие как map , filter и forEach , принимают callback-функции.
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]


Мы можем вызвать функцию калькулятора ( myCalculator) с обратным вызовом ( myCallback) и позволить функции калькулятора выполнить обратный вызов после завершения вычисления:

function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

// передаем ф-цию  обратного вызова в качестве аргумента
function myCalculator(num1, num2, myCallback) { 
  let sum = num1 + num2;
  myCallback(sum); 
}

myCalculator(5, 5, myDisplayer); // вызываем

В приведенном выше примере myDisplayer  - ф-ция обратного вызова.


Обратные вызовы часто используются при обработке асинхронных событий, таких как сетевые запросы или файловый ввод-вывод . 
Это средство гарантирует, что определенный код не будет запущен, пока заданная задача не будет завершена. Обратные вызовы дают возможность отделить код, который выполняет асинхронные операции, от кода, который имеет дело с результатами таких операций.

Что такое this в JavaScript, и как его значение определяется в разных контекстах?     В

В JavaScript this — это ссылка на какой-то объект. Особенность в том, что объект, на который ссылается this, может меняться в зависимости от контекста вызова.




Если глобально сделать console.log(this), в браузере выведет window, в node - global.
При использовании bind , call и apply : this задается явно
Объясните механизм всплытия (hoisting) в JavaScript. Как это влияет на переменные и функции?	Н

При выполнении скрипта, переменные и функции объявленные через var или function, будут перемещены вверх (всплывут) в пределах своей области видимости. Таким образом, переменные можно использовать до их объявления, а функции - вызывать до их определения.

console.log(myVar);  // undefined
var myVar = 5;
Для let и const это не будет работать (вообще они тоже всплывают, но использовать нельзя)


Как работает деструктуризация объектов и массивов? Приведите примеры использования.	А

Деструктуризация массива — это особый синтаксис, позволяющий извлекать значения из массива и записывать их в новые переменные с минимумом кода.
Например, без использования синтаксиса деструктуризации массива значение элемента массива копируется в новую переменную следующим образом:


const profile = ["Oluwatobi", "Sofela", "codesweetly.com"];

const firstName = profile[0];
const lastName = profile[1];
const website = profile[2];

console.log(firstName); // "Oluwatobi"
console.log(lastName); // "Sofela"
console.log(website); // "codesweetly.com"

А теперь посмотрим, как деструктуризация массива позволит нам сделать код более аккуратным и лаконичным.

const profile = ["Oluwatobi", "Sofela", "codesweetly.com"];

const [firstName, lastName, website] = profile;

console.log(firstName); // "Oluwatobi"
console.log(lastName); // "Sofela"
console.log(website); // "codesweetly.com"

В этом примере повторения меньше что соответствует принципам DRY.
https://habr.com/ru/companies/otus/articles/594541/ - здесь больше примеров дестуктуризации.

У Ани хорошие примеры
Что такое оператор распространения (...), и где его можно использовать?     В

Оператор распространения используется для распаковки элементов из массивов или свойств из объектов.

let obj1 = { foo:` `'bar'``, x: 42 };
let obj2 = { foo:` `'baz'``, y: 13 };
let clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }
let mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }

В этом примере оператор распространения используется для клонирования и объединения объектов.


Как в JavaScript можно клонировать объект, сохранив все его свойства и вложенные объекты?		Н

Для клонирования объекта используется Object.assign. Но если так копировать вложенный объект, то скопируется только ссылка на него:
let user = {
   name: "John",
   sizes: {
     height: 182,
     width: 50
   }
};
let clone = Object.assign({}, user);
console.log( user.sizes === clone.sizes ); // true, тот же объект


// user и clone обладают общим свойством sizes
user.sizes.width++;       // изменяем свойства в первом объекте
console.log(clone.sizes.width); // 51, видим результат в другом

Чтобы исправить это, мы должны сами написать алгоритм «глубокого клонирования». Например:
function deepClone(obj) {
   if (obj === null || typeof obj !== 'object') return obj;
   const clone = Array.isArray(obj) ? [] : {};
   for (let key in obj) {
   	if (obj.hasOwnProperty(key)) {
   		clone[key] = deepClone(obj[key]);
   	}
   }
   return clone;
}
const deepCloneObj = deepClone(original);


Что такое Promise? Как его создать и использовать для обработки асинхронных операций?	А

Promise (промис) - это объект, представляющий результат успешного или неудачного завершения асинхронной операции. 
В сущности, промис - это возвращаемый объект, в который вы записываете два колбэка вместо того, чтобы передать их функции.

Мы называем это асинхронным вызовом функции. У этого соглашения есть несколько преимуществ.




https://learn.javascript.ru/promise-basics 

Promise — это объект, который используется для обработки асинхронных операций в JavaScript.

Создаем промис. 
let promise = new Promise(function(resolve, reject) {
   // resolve или reject
});

Когда он получает результат, сейчас или позже – не важно, он должен вызвать один из этих колбэков:
resolve(value) — если работа завершилась успешно, с результатом value.
reject(error) — если произошла ошибка, error – объект ошибки.

У промиса есть внутри state (состояние) и result (результат), их значения можно поменять только один раз, так что если сделать второй resolve или reject, он просто игнорируется.


Когда мы выполняем промис, обрабатываем его результат с помощью then, catch и finally.

then:
Синтаксис:
promise.then(
   function(result) { /* обработает успешное выполнение */ },
   function(error) { /* обработает ошибку */ }
);


// или так
promise.then(
   result => alert(result), // обработает успешное выполнение
   error => alert(error) // обработает ошибку
);

catch:
Если мы хотим обработать только ошибку.
promise.catch(alert);

finally:
Также как в try-except, то что выполнится в любом случае, вне зависимости от результата.
promise.finally(() => что-то-сделать)

Полный пример (без отдельного объявления промиса)
new Promise((resolve, reject) => {
   // сделать что-то, что займёт время, и после вызвать resolve или reject
   // например:
   setTimeout(() => resolve("done"), 1000);
   // или
   setTimeout(() => reject(new Error("Whoops!")), 1000);
   })
   // выполнится, когда промис завершится, независимо от того, успешно или нет:
   .finally(() => остановить индикатор загрузки)
   // таким образом, индикатор загрузки всегда останавливается, прежде чем мы продолжим
   .then(result => показать результат, err => показать ошибку)



Объясните разницу между async и await. Как их используют в асинхронных функциях?     В

async:
Это ключевое слово, которое объявляет функцию асинхронной.
Функция, помеченная как async, всегда возвращает Promise.
Используется для создания асинхронных функций.
await:
Это оператор, который используется внутри асинхронной функции.
Он позволяет ожидать завершения асинхронной операции перед продолжением выполнения кода.
Может использоваться только внутри асинхронной функции.
async function fetchUserData(userId) {
   const response = await fetch(`https://api.example.com/users/${userId}`);
   const userData = await response.json();
   return userData;
}
async function main() {
   try {
       const userId = '123';
       const user = await fetchUserData(userId);
       console.log(user);
   } catch (error) {
       console.error('Ошибка:', error);
   }
}
main();

В этом примере: fetchUserData - асинхронная функция, которая использует await для выполнения нескольких асинхронных операций. Внутри main, мы используем await для вызова fetchUserData. Если возникает ошибка, она будет перехвачена в блоке catch.
Как работает метод Promise.all() и в чем его особенности по сравнению с Promise.race()?	Н

Promise.all()
Используется, когда нам нужно запустить множество промисов параллельно и дождаться, пока все они выполнятся.


Синтаксис:
let promise = Promise.all(iterable);
Promise.all([
   new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
   new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
   new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
]).then(alert);
// выполнится спустя 3 секунды, его результатом будет массив [1, 2, 3]

Порядок элементов массива в точности соответствует порядку исходных промисов. Даже если первый промис будет выполняться дольше всех, его результат всё равно будет первым в массиве.

Если любой из промисов завершится с ошибкой, то промис, возвращённый Promise.all, немедленно завершается с этой ошибкой.

Promise.all(iterable) разрешает передавать не-промисы в iterable (перебираемом объекте).
Promise.all([
   new Promise((resolve, reject) => {
     setTimeout(() => resolve(1), 1000)
   }),
   2,
   3
]).then(alert); // 1, 2, 3

Promise.race()
Метод очень похож на Promise.all, но ждёт только первый выполненный промис, из которого берёт результат (или ошибку).
Promise.race([
   new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
   new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 2000)),
   new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(alert); // 1

Что такое "цепочка промисов" (promise chaining) и как она работает? Приведите пример.	А 

Короче: если написать then и в нем return, а потом еще then после этого, второму then передается результат из этого return. В конце после всех then пишем catch для ловли ошибки.

Цепочка промисов используется для объединения нескольких асинхронных задач, которые должны быть выполнены последовательно.


В современных функциях мы записываем колбэки в возвращаемые промисы - формируем цепочку промисов, для того, чтобы одна ф-ция вызывала другую, та :

doSomething()
  .then(function (result) {
    return doSomethingElse(result);
  })
  .then(function (newResult) {
    return doThirdThing(newResult);
  })
  .then(function (finalResult) {
    console.log("Итоговый результат: " + finalResult);
  })
  .catch(failureCallback);

Аргументы then необязательны, а catch(failureCallback) - это сокращение для then(null, failureCallback). Вот как это выражено с помощью стрелочных функций:
doSomething()
  .then((result) => doSomethingElse(result))
  .then((newResult) => doThirdThing(newResult))
  .then((finalResult) => {
    console.log(`Итоговый результат: ${finalResult}`);
  })
  .catch(failureCallback);

Всегда возвращайте промисы в return, иначе колбэки не будут сцеплены и ошибки могут быть не пойманы (стрелочные функции неявно возвращают результат, если скобки {} вокруг тела функции опущены).


Какие существуют методы работы с JSON в JavaScript, и как они используются для преобразования данных?     В

- JSON.stringify() 
Этот метод преобразует значение или объект в строку JSON.
const obj = { name: "John", age: 30 };
const jsonString = JSON.stringify(obj);
console.log(jsonString); // Выведет: {"name":"John","age":30}

- JSON.parse() 
Этот метод преобразует строку JSON в объект или массив.
const jsonString = '{"name":"John","age":30}';
const obj = JSON.parse(jsonString);
console.log(obj.name); // Выведет: John
console.log(obj.age); // Выведет: 30

- JSON.stringify() с опциями 
Можно указать форматирование вывода:
const obj = { name: "John", hobbies: ["swimming", "reading"] };
const formattedJson = JSON.stringify(obj, null, 2);
console.log(formattedJson);
// Выведет:
// {
//   "name": "John",
//   "hobbies": [
//     "swimming",
//     "reading"
//   ]
// }

- JSON.parse() с опциями 
Можно указать парсер и  настроить обработку специальных значений:
const jsonString = '"2023-01-01"';
const date = JSON.parse(jsonString, (key, value) =>
typeof value === 'string' && isNaN(value) ? new Date(value) : value);
console.log(date instanceof Date); // true

Что такое модули в JavaScript и как их можно импортировать и экспортировать?	Н

Модуль — это фрагмент кода во внешнем файле, который выполняет определенную задачу или функцию. Обеспечивает повторное использование кода.

export отмечает переменные и функции, которые должны быть доступны вне текущего модуля.
import позволяет импортировать функциональность из других модулей.

Фигурные скобки при импортировании необходимы в случае именованных экспортов, для export default они не нужны.

Импорт всего содержимого
import * as module from './module.js';
console.log(module.name);
module.greet();
Как работает асинхронный генератор, и чем он отличается от обычного генератора? Приведите пример.	А
Генераторы - это специальный тип функции, который работает как фабрика итераторов. Функция становится генератором, если содержит один или более yield операторов и использует function* синтаксис.
Асинхронный генератор использует async/await для выполнения итерирования асинхронно, без пауз.

async function* generateSequence(start, end) {

  for (let i = start; i <= end; i++) {

    // ура, можно использовать await!
    await new Promise(resolve => setTimeout(resolve, 1000));

    yield i;
  }

}
(async () => {
  let generator = generateSequence(1, 5);
  for await (let value of generator) {
    alert(value); // 1, потом 2, потом 3, потом 4, потом 5
  }
})();
Теперь у нас есть асинхронный генератор, который можно перебирать с помощью for await ... of.
Метод generator.next() здесь тоже асинхронный и возвращает промисы. Из обычного генератора мы можем получить значения при помощи result = generator.next(). Для асинхронного нужно добавить await, вот так: 
result = await generator.next(); // result = {value: ..., done: true/false}


Генераторы: https://learn.javascript.ru/generators

Асинхронные: добавляется async/await
result = await generator.next()  тут тоже await

Объясните, как обрабатываются ошибки в асинхронных функциях, и как используется try...catch с async/await.     В
Когда промис завершается успешно, await promise возвращает результат. Когда завершается с ошибкой – будет выброшено исключение. Как если бы на этом месте находилось выражение throw.
Такой код:
async function f() {
  await Promise.reject(new Error("Упс!"));
}

Делает то же самое, что и такой:
async function f() {
  throw new Error("Упс!");
}
Но есть отличие: на практике промис может завершиться с ошибкой не сразу, а через некоторое время. В этом случае будет задержка, а затем await выбросит исключение.
Такие ошибки можно ловить, используя try..catch, как с обычным throw:
async function f() {

  try {
    let response = await fetch('http://no-such-url');
  } catch(err) {
    alert(err); // TypeError: failed to fetch
  }
}
f();
В случае ошибки выполнение try прерывается и управление прыгает в начало блока catch.
Чтобы обрабатывать ошибки в функциях с async await используется конструкция try catch . Необходимо обернуть весь код, содержащийся в функции внутрь try {…} и ловить возможные ошибки внутри catch (err) {…} .

Если у нас нет try..catch, асинхронная функция будет возвращать завершившийся с ошибкой промис (в состоянии rejected). В этом случае мы можем использовать метод .catch промиса, чтобы обработать ошибку:
async function f() {
  let response = await fetch('http://no-such-url');
}
// f() вернёт промис в состоянии rejected
f().catch(alert); // TypeError: failed to fetch
Что такое Event Loop в JavaScript, и как он обеспечивает асинхронное выполнение кода?	  Н

Основы Event Loop в JavaScript / Хабр 

Лучше почитать ссылку, а так вкратце:
Event Loop (цикл событий) — это механизм, обеспечивающий обработку асинхронных операций в JavaScript.

Сначала выполняется обычный код, потом микрозадачи (Promise, async/await), потом макрозадачи (setTimeout, setInterval). После каждой макрозадачи Event Loop проверяет, появились ли новые микрозадачи, если да, то выполняет их.


Какие методы существуют для управления DOM? Назовите основные методы для добавления, удаления и изменения элементов на странице.	А

Браузер создаёт DOM при загрузке страницы, складывает его в переменную document и сообщает, что DOM создан, с помощью события DOMContentLoaded. Объект document содержит большое количество свойств и методов, которые позволяют работать с HTML.

Методы поиска элемента:
getElementById — поиск элемента по идентификатору;
getElementsByClassName — поиск элементов по названию класса;
getElementsByTagName — поиск элементов по названию тега;
querySelector — поиск первого элемента, подходящего под CSS-селектор;
querySelectorAll — поиск всех элементов подходящих под CSS-селектор.


Создание элементов.
Создать новый элемент (узел): createElement()
const paragraph = document.createElement('p');

Текстовый узел можно создать также с помощью метода createTextNode():
const text = document.createTextNode("I'm a text node!");
console.log(text);    // "I'm a text node!"

Методы создают новые элементы и текстовые узлы, однако они не видны на интерфейсе веб-сайта, пока не вставлены в document!

Вставка узлов в DOM.
Чтобы увидеть созданные нами текстовые узлы и элементы на интерфейсе, нужно вставить их в document. Методы appendChild() и insertBefore() используются для добавления элементов в начало, середину или конец родительского элемента, а replaceChild() используется для замены старого узла на новый.
Заменить существующий узел новым: replaceChild()
const modifiedItem = document.createElement('li');
modifiedItem.textContent = "Get Poppin' Jalapeno Doritos";

parentNode.replaceChild(newNode, oldNode);

Заменить элемент списка
list.replaceChild(modifiedItem, list.children[3])
Удаление узлов из DOM
Для удаления узлов из DOM используем removeChild() (чтобы удалить дочерние узлы), или
remove(), чтобы удалить сам узел. 

// Удалить последний элемент списка
list.removeChild(list.lastElementChild);

В качестве альтернативы можно использовать remove(), чтобы удалить сам узел:

// Удалить третий элемент списка
list.children[2].remove();



Изменение атрибутов:
hasAttribute() — возвращает булев тип.
getAttribute() — возвращает значение определенного атрибута.
setAttribute() — добавляет или обновляет значение определенного атрибута.
removeAttribute() — удаляет атрибут из элемента.



Изменение классов


В работе с CSS мы используем классы для применения стилей к нескольким элементам. 


className — получает или задает значение класса.

classList.add() —добавляет значения классов.

classList.toggle() — отобразить/скрыть класс.

classList.contains() — проверяет, существует ли определенное значение.

classList.replace() — заменяет старое значение на новое.

classList.remove() — удаляет значение.



Кратко:
DOM - Document Object Model - нужен, чтобы добавлять что-то в HTML с помощью кода JS.

Основные методы: 
Получение:
document.getElementById(id) — поиск по ID.

Создание:
document.createElement(tagName) — создание нового элемента. parent.appendChild(element) — добавление элемента в конец родительского. parent.insertBefore(newElement, existingElement) — вставка элемента перед другим.

Удаление:
element.remove()

Изменение:
	element.innerHTML — изменение HTML-содержимого.
	element.textContent — изменение текста.



Как в REST API реализуется защита маршрутов (routes) для авторизованных пользователей?     В

Создаем функцию, которая с помощью сессии или JWT-токена проверяет, авторизован ли пользователь. Она вызывает next(), то есть открывает запрашиваемую страницу, если пользователь авторизован, и перебрасывает нас на страницу login (ну или возвращает 401 Unathorized), если нет.

1. JWT (JSON Web Tokens):
	JWT - это стандартный способ аутентификации и авторизации. Он использует токены, которые содержат информацию о пользователе и хранятся клиентом.
2. Сессии:
	Можно использовать сессии для хранения информации о пользователе на сервере.
3. OAuth 2.0:
	Для более сложных систем можно использовать протокол OAuth 2.0, который обеспечивает безопасное взаимодействие между клиентами и серверами.
4. Middleware:
	Многие фреймворки предоставляют готовые middleware для аутентификации и авторизации.
Что такое JWT (JSON Web Token) и как его используют для авторизации?	Н

JWT (JSON Web Token) — это специальный формат токена, который позволяет безопасно передавать данные между клиентом и сервером. Например, клиентом может быть веб-браузер или мобильное приложение.

JWT-токен состоит из трех частей, которые разделены точкой:
Header или заголовок — информация о токене, тип токена и алгоритм шифрования
Payload или полезные данные — данные, которые мы хотим передать в токене. Например, имя пользователя, его роль, истекает ли токен. Эти данные представлены в виде JSON-объекта
Signature или подпись — подпись токена, которая позволяет проверить, что токен не был изменен

Процесс аутентификации и авторизации с JWT-токеном между веб-браузером и веб-приложением выглядит следующим образом:
Веб-браузер отправляет запрос веб-приложению с логином и паролем
Веб-приложение проверяет логин и пароль, и если они верны, то генерирует JWT-токен и отправляет его веб-браузеру. При генерации JWT-токена веб-приложение ставит подпись секретным ключом, который хранится только в веб-приложении
Веб-браузер сохраняет JWT-токен и отправляет его вместе с каждым запросом в веб-приложение
Веб-приложение проверяет JWT-токен и если он верный, то выполняет действие от имени авторизованного пользователя
Безопасность коммуникации между веб-браузером и веб-приложением заключается в том, что токены генерируются и подписываются только со стороны веб-приложения. Злоумышленник не сможет подделать токен, так как не знает секретный ключ, который используется для подписи токена.

33. Как работает шифрование паролей при регистрации пользователей?		А


Bcrypt — это популярный алгоритм для хэширования паролей. 
Он включает: 
- Генерацию соли (случайной строки), которая добавляется к паролю. 
- Многократное хэширование, чтобы усложнить процесс подбора пароля.
bcrypt.hash(paswd)
bcrypt.compare(paswd, hash)



Пароль никогда нельзя хранить в виде обычного текста. Процесс шифрования  включает в себя следующие шаги:
1. Добавление: Генерируется случайная строка (salt), которая уникальным образом ассоциируется с каждым паролем. Эта соль сохраняется вместе с хэшированным паролем. Засолка не позволяет идентичным паролям иметь одинаковый хэш, даже если используется один и тот же алгоритм хеширования.
2. Хэширование: Односторонняя криптографическая хэш—функция (например, bcrypt, Argon2 или scrypt-избегайте MD5 или SHA-1, которые небезопасны) используется для преобразования пароля (в сочетании с солью) в строку символов фиксированной длины. Этот хэш хранится в базе данных. С точки зрения вычислений невозможно изменить хэш, чтобы получить исходный пароль.
3. Хранение: salt и хэш надежно хранятся в базе данных. Исходный пароль никогда не сохраняется.
4. Проверка: Во время входа в систему введенный пароль объединяется с сохраненным значением salt, хэшируется с использованием того же алгоритма и сравнивается с сохраненным хэшем. Если они совпадают, пароль проверяется.

const bcrypt = require('bcrypt');
async function registerUser(password) {
 const salt = await bcrypt.genSalt(10); // Generate a salt (10 rounds recommended)
 const hash = await bcrypt.hash(password + salt, salt); // Hash the password + salt
 // ... store salt and hash in the database ...
}
async function verifyPassword(password, storedSalt, storedHash) {
 const hash = await bcrypt.hash(password + storedSalt, storedSalt); // Hash the entered password
 return bcrypt.compare(hash, storedHash); // Compare the hashes
}


34. Объясните, как работает подключение приложения к базе данных с помощью pg в Node.js (или другой библиотеки).     В

- Создаем нового Client, в который передаем название бд, хост, порт, и т.д.
- client.connect()
- client.query(“select…”)
- client.end()

Подробнее:
Библиотека pg является популярным клиентом PostgreSQL для Node.js. Процесс включает в себя:
1. Установку: npm install pg
2. Подключение: установление соединения с базой данных с параметрами подключения (имя хоста, имя базы данных, имя пользователя, пароль, порт).
3. Выполнение запросов: выполнение SQL-запросов с использованием клиентских методов (например, query()).
4. Обработка результатов: обработка результатов, возвращаемых из базы данных.
5. Обработка ошибок: обработку ошибок для устранения проблем с подключением и сбоев запросов.


35. Как можно реализовать проверку доступа, чтобы только администратор мог добавлять записи в базу данных?	Н

Создать роли, потом в маршруте передать функцию middleware для проверки роли и допускать/не допускать к маршруту пользователя.

С использованием сессий:
function isAdmin(req, res, next) {
   if (req.user && req.user.role === 'admin') {
     next();
   } else {
     res.status(403).json({ message: "Только администраторы могут добавлять записи" });
   }
}


app.post('/api/records', isAdmin, (req, res) => {
   // Логика добавления записи
});

С использованием jwt-токена:
function authenticateAdminToken(req, res, next) {
   const authHeader = req.headers['authorization'];
   const token = authHeader.split(' ')[1];
   const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
   if (decoded.role === 'admin') {
   	next();
   } else {
       return res.status(403).send('Только администратор может просматривать эту страницу.');
       }
}


app.post('/api/records', authenticateAdminToken, (req, res) => {
   // Логика добавления записи
});

36. Какие основные статусы HTTP используются для ответа на запросы и что они означают? Приведите примеры.	А

Код состояния HTTP (англ. HTTP status code) — часть первой строки ответа сервера при запросах по протоколу HTTP.
• 1xx (Informational): 
	* 100 Continue — сервер получил начальную часть запроса, клиент может
	   продолжить отправку.
• 2xx (Successful):
* 200 OK: The request was successful.
* 201 Created: A new resource was created successfully.
• 3xx (Redirection):
* 301 Moved Permanently: The resource has permanently moved to a new location.
* 302 Found: The resource has temporarily moved.
• 4xx (Client Error):
* 400 Bad Request: The request was malformed.
* 401 Unauthorized: The client is not authenticated.
* 403 Forbidden: The client does not have permission to access the resource.
* 404 Not Found: The requested resource was not found.
• 5xx (Server Error):
* 500 Internal Server Error: A generic server error occurred.
* 503 Service Unavailable: The server is temporarily unavailable.
37. Как работает система ролей и прав доступа в веб-приложении, и как её можно реализовать в базе данных?     В
почитать: https://habr.com/ru/articles/217383/
https://habr.com/ru/articles/51327/ 


Делаем отдельную таблицу для ролей и перечисляем, что пользователям с этой ролью разрешено.
38. Как можно управлять сессиями пользователей и сохранять состояние их авторизации? Приведите примеры.		Н

• Файлы cookie: небольшой фрагмент данных, хранящийся в браузере клиента. При успешном входе в систему сервер устанавливает файл cookie, содержащий идентификатор сеанса. Последующие запросы включают этот файл cookie, позволяющий серверу идентифицировать пользователя.

• Аутентификация на основе токенов (JWT): При успешном входе в систему генерируется веб-токен в формате JSON и отправляется клиенту. Клиент включает токен в заголовки последующих запросов. Сервер проверяет действительность токена и извлекает из него информацию о пользователе.

• Хранилище сеансов session (на стороне сервера): сохраняет данные сеанса на сервере (например, в памяти или базе данных). Сервер присваивает уникальный идентификатор сеанса каждому пользователю и сохраняет соответствующие данные (информацию о пользователе и т.д.).

39. Что такое транзакция в базе данных и когда её целесообразно использовать?	А

Транзакция базы данных - это последовательность операций, выполняемых как единая логическая единица работы. Ключевыми свойствами являются:
• Атомарность: все операции в транзакции либо завершаются успешно, либо не выполняется ни одна (все или ничего).
• Согласованность: Транзакция поддерживает ограничения согласованности базы данных.
• Изоляция: параллельные транзакции изолированы друг от друга.
• Долговечность: после фиксации транзакции изменения становятся постоянными, даже если система выходит из строя.
Когда использовать транзакции:
• Несколько операций с базой данных: когда вам необходимо выполнить несколько изменений в базе данных, которые должны быть успешными или завершиться неудачей одновременно (например, перевод денег между счетами).
• Поддержание целостности данных: чтобы гарантировать, что ваша база данных остается непротиворечивой, даже если во время операций возникают ошибки.
• Контроль параллелизма: для предотвращения конфликтов между одновременными транзакциями.


Транзакция - это несколько операций, которые выполняются как одно целое: либо все завершаются успешно, либо ни одна не применяется в итоге.

Свойства транзакций (ACID): 
1. Атомарность: Все операции транзакции выполняются или откатываются. 
2. Согласованность: Разработчик должен следить за теми ошибками, которые база сама проверить не может. Чтобы не нарушалась бизнес-логика. 
3. Изоляция: Результаты транзакции недоступны другим до её завершения. 
4. Долговечность: После завершения транзакции изменения сохраняются.

Когда использовать транзакции:
Их нужно использовать, когда нужно обновить несколько таблиц одновременно, и нет смысла выполнять одну операцию, если другая при этом завершится с ошибкой. 

Например, мы добавляем нового клиента, для этого нужно сделать insert в 3 разные таблицы.
Чтобы не получилось такого, что адрес с телефоном сохранились, а сам клиент — нет. У нас бы появились атрибуты, «висящие в воздухе», никому не принадлежащие.

+ они нужны, чтобы избежать неопределенного поведения при параллельных запросах.


