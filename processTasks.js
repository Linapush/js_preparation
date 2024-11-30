// Напишите функцию processTasks, которая выполняет три асинхронных операции 
// последовательно.

// Ход решения:
// 	1.	Каждый вызов fetchData() возвращает промис.
// 	2.	Используем цепочку .then() для последовательной обработки результатов.
// 	3.	В случае ошибки вызывается .catch().

// Разбор:
// Цепочками промисов и обрабатка ошибок.

function processTasks() {
    return fetchData()
        .then(result => {
            console.log(result.data);
            return fetchData();
    })
        .then(result => {
            console.log(result.data);
            return fetchData();
    })
        .then(result => {
            console.log(result.data);
    })
        .catch(error => {
            console.error("Ошибка:", error.message);
    });
}

