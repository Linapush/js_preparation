// Что такое this в JavaScript, и как его значение определяется в разных контекстах?     В
// В JavaScript this — это ссылка на какой-то объект. Особенность в том, что объект, на который ссылается this, может меняться в зависимости от контекста вызова.

// Если глобально сделать console.log(this), в браузере выведет window, в node - global.
// При использовании bind , call и apply : this задается явно


// Как работают методы call, apply, и bind, и в чем между ними разница?	Н
// Методы call , apply и bind используются для управления значением this в функциях и позволяют явно задавать контекст выполнения.


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
