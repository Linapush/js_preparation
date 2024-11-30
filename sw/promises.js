// Промисы в JavaScript:

// Промис — это объект, который представляет собой результат асинхронной операции, которая может завершиться успешно или с ошибкой. 
// Промис находится в одном из трех состояний:
// 	1.	Pending (Ожидание): начальное состояние, операция еще не завершена.
// 	2.	Fulfilled (Выполнен): операция завершена успешно, результат доступен.
// 	3.	Rejected (Отклонен): операция завершена с ошибкой, доступна причина неудачи.

// Промис создается с помощью конструктора Promise, который принимает функцию executor с двумя параметрами: resolve (если операция завершена успешно) и reject (если операция завершена с ошибкой).

// Пример:

const myPromise = new Promise((resolve, reject) => {
  let success = true;  // Симуляция условия
  
  if(success) {
    resolve("Задача выполнена!");
  } else {
    reject("Что-то пошло не так.");
  }
});

myPromise
  .then(result => console.log(result))  // если промис выполнен
  .catch(error => console.error(error));  // если промис отклонен

	// •	.then() используется для обработки успешного завершения промиса.
	// •	.catch() используется для обработки ошибки (отклонения).

// Кроме того, в современном JavaScript для работы с промисами используется синтаксис async/await, который позволяет писать асинхронный код в синхронном стиле:

async function exampleFunction() {
  try {
    const result = await myPromise;
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

// Примеры задач:

// 	1.	Codewars:
// 	•	Задача: “Обработка ошибки промиса”
// 	•	Описание: Нужно обработать промис, который может завершиться с ошибкой.

function handlePromise(promise) {
  return promise
    .then(result => result)
    .catch(error => 'Ошибка: ' + error);
}

// 2.	LeetCode:
// •	Задача: “Асинхронное выполнение”
// •	Описание: Реализовать функцию, которая симулирует несколько асинхронных операций с использованием промисов.

function asyncOperations() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Первая операция завершена");
      resolve();
    }, 1000);
  }).then(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Вторая операция завершена");
        resolve();
      }, 1000);
    });
  });
}
asyncOperations();

// 3.	Exercism:
// •	Задача: “Создание цепочки промисов”
// •	Описание: Нужно создать цепочку промисов, чтобы симулировать последовательность операций.
// •	Решение:

function chainPromises() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Шаг 1 выполнен"), 1000);
  })
  .then((result) => {
    console.log(result);
    return new Promise((resolve) => setTimeout(() => resolve("Шаг 2 выполнен"), 1000));
  })
  .then((result) => {
    console.log(result);
    return "Последний шаг выполнен";
  });
}
chainPromises().then(console.log);


// 4.	FreeCodeCamp:
// •	Задача: “Цепочка промисов”
// •	Описание: Использовать .then() для создания цепочки промисов, где каждый следующий промис возвращает новый.


function makeBreakfast() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Яйца готовы"), 1000);
  })
  .then(result => {
    console.log(result);
    return new Promise(resolve => setTimeout(() => resolve("Тост готов"), 1000));
  })
  .then(result => {
    console.log(result);
    return "Завтрак готов!";
  });
}

makeBreakfast().then(console.log);

