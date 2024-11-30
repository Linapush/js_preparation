// Напишите функцию fetchData, которая имитирует запрос к API с использованием Promise. 
// Если данные успешно получены (рандомно), возвращайте объект, иначе выбрасывайте ошибку.

// Ход решения:
// 	1.	Создаём новый Promise с функцией, принимающей resolve и reject.
// 	2.	Используем setTimeout для симуляции задержки.
// 	3.	Генерируем случайное число, чтобы решить, вызывать ли resolve или reject.


function fetchData() {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.2;
            if (success) {
                resolve({ data: "Данные получены"});
            } else {
                reject(new Error("Ошибка получения данных"))
            }
        }, 1000);
    })
    
}