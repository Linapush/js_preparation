// Напишите функцию reverseString, которая принимает строку и возвращает её в обратном порядке.

// 1 вариант - с встроенными методами 
function reverseString(str) {
    return str.split('').reverse().join('')
}

function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]

    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"

    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}

reverseString("hello");

// String.prototype.split() - метод split() разбивает объект String на массив строк, разделяя строку на подстроки
// Array.prototype.reverse() - метод reverse() переворачивает массив на месте. Первый элемент массива становится последним, а последний — первым.
// Array.prototype.join() - метод join() объединяет все элементы массива в строку.

// 2 вариант - с циклом for перебирая каждый раз для var i = str.length - 1;

// with loop for
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
reverseString('hello');

function reverseString(str) {
    // Step 1. Create an empty string that will host the new created string
    var newString = "";

    // Step 2. Create the FOR loop
    /* The starting point of the loop will be (str.length - 1) which corresponds to the 
        last character of the string, "o"
        As long as i is greater than or equals 0, the loop will go on
        We decrement i after each iteration */
    for (var i = str.length - 1; i >= 0; i--) { 
        newString += str[i]; // or newString = newString + str[i];
    }
    /* Here hello's length equals 5
        For each iteration: i = str.length - 1 and newString = newString + str[i]
        First iteration:    i = 5 - 1 = 4,         newString = "" + "o" = "o"
        Second iteration:   i = 4 - 1 = 3,         newString = "o" + "l" = "ol"
        Third iteration:    i = 3 - 1 = 2,         newString = "ol" + "l" = "oll"
        Fourth iteration:   i = 2 - 1 = 1,         newString = "oll" + "e" = "olle"
        Fifth iteration:    i = 1 - 1 = 0,         newString = "olle" + "h" = "olleh"
    End of the FOR Loop*/

    // Step 3. Return the reversed string
    return newString; // "olleh"
}

reverseString('hello');

// 3 вариант - с условным оператором

// Условный (тернарный) оператор:
function reverseString(str) {
    return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}
reverseString("hello");