// Что такое функции обратного вызова (callback functions) и как их использовать?	А

// Callback-функция — это функция, передаваемая в другую функцию как аргумент и вызываемая внутри этой функции.


function doOperation(a, b, callback) {
   return callback(a, b);
}

function add(x, y) {
   return x + y;
}

console.log(doOperation(5, 3, add)); // 8


// Использование: 
// Асинхронные операции:
setTimeout(() => {
   console.log("This message appears after 2 seconds");
}, 2000);


//  Обработка массивов:
// Методы массивов, такие как map , filter и forEach , принимают callback-функции.
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]



// Мы можем вызвать функцию калькулятора ( myCalculator) с обратным вызовом ( myCallback) и позволить функции калькулятора выполнить обратный вызов после завершения вычисления:

function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

// передаем ф-цию  обратного вызова в качестве аргумента
function myCalculator(num1, num2, myCallback) { 
  let sum = num1 + num2;
  myCallback(sum); 
}

myCalculator(5, 5, myDisplayer); // вызываем


// В приведенном выше примере myDisplayer  - ф-ция обратного вызова.

// Обратные вызовы часто используются при обработке асинхронных событий, таких как сетевые запросы или файловый ввод-вывод . 
// Это средство гарантирует, что определенный код не будет запущен, пока заданная задача не будет завершена. Обратные вызовы дают возможность отделить код, который выполняет асинхронные операции, от кода, который имеет дело с результатами таких операций.