Задача 1
Напишите функцию findObjectByProperty, которая принимает массив объектов,
имя свойства и значение. Функция должна возвращать первый объект, у которого
указанное свойство имеет данное значение.
Например:
const items = [{ id: 1, name: 'item1'}, { id: 2, name: 'item2'}, ];
Корректный поиск объекта по свойству и значению - 10 баллов.
Правильная работа с массивом и возврат результата - 5 баллов.
Задача 2
Напишите функцию sumProperty, которая принимает массив объектов и имя
числового свойства, а затем возвращает сумму всех значений этого свойства.
Например:
const data = [{id: 1, amount: 10 }, {id: 2, amount: 20 }, {id: 3, amount: 15 }, };
Правильное вычисление суммы значений указанного свойства - 15 баллов.
Умение работать с массивом объектов - 5 баллов.
Задача 3
Напишите функцию fetchDataWithTimeoutAndRetry, которая выполняет fetch
запрос и принимает URL, максимальное количество попыток и время ожидания. Если
запрос не успевает завершиться за указанное время, он должен повторяться
указанное количество раз. Если все попытки неудачны, вернуть ошибку.
Правильное использование Promise. race для ограничения времени - 15 баллов.
Повторная попытка при превышении времени ожидания и возврат ошибки - 10
баллов.
Задача 4
Напишите функцию fetchAndTransform, которая принимает массив URL и загружает
данные по каждому URL параллельно. Данные должны быть преобразованы в массив
объектов, содержащих поля id и title. Если один из запросов завершился ошибкой,
функция должна возвращать "Ошибка загрузки".
Правильное преобразование данных в массив объектов - 10 баллов.
Обработка ошибок и корректный возврат при неудаче - 10 баллов.
Задача 5
Реализуйте асинхронный генератор paginatedFetchWithStop, который принимает
URL и максимальное количество страниц. Генератор должен завершаться, если ответ
пустой или если достигнуто maxPages.