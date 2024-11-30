// Strings. Примеры

// Ф-ция принимает параметр со строкой и преобразовывает в следующий вид:
// гласные должны стать lower

// "Привет, Мир!" => "Азбука Вкуса"
// "Азбука Вкуса" => "АзбУкА ВкУсА"

// Function Declaration
function strChanger(str) {
    let result = "";
    let letters = ["a", "u", "i", "o", "e"];

    for (let i = 0; i < str.length; i += 1) {
        if (letters.includes(str[i])) {
            result = result + str[i].toLowerCase();
        } else {
            result = result + str[i].toUpperCase();
        } 
    }
    return result;
}

console.log(strChanger("hello, world!"))


// конкатенация строк

function greet(name){
    return `Hello, ${name} how are you doing today?`;
}
const greet = name => `Hello, ${name} how are you doing today?`;

function greet(name) {
    return "Hello, " + name + " how are you doing today?";
}


// литералы

const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `Мне нравится песня ${song}. 
Я оценил её на ${(score / highestScore) * 100}%.`;
console.log(output); // "Мне нравится песня Fight the Youth. Я оценил её на 90%."

