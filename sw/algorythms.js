// Algorythms
// концепции: работы с массивами и строками, использования динамического программирования и указателей.

// 1. Two Sum (LeetCode)
// Задача: Даны массив чисел и целевое число. Найти индексы двух чисел, которые в сумме дают целевое число.

function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

// Объяснение: Используем хэш-таблицу для сохранения числа и его индекса, чтобы в один проход найти пару.


// 2. Valid Parentheses (LeetCode, Codewars)
// Задача: Проверить, является ли строка корректной (скобки правильно закрываются).

function isValid(s) {
    const stack = [];
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    for (const char of s) {
        if (char in map) {
            if (stack.pop() !== map[char]) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0;
}

// Объяснение: Используем стек для проверки последовательности открывающихся и закрывающихся скобок.


// 3. Find the Odd Int (Codewars)
// Задача: Найти число, которое встречается нечетное количество раз в массиве.

function findOdd(A) {
    return A.reduce((acc, num) => acc ^ num, 0);
}

// Объяснение: Используем XOR. Числа, встречающиеся четное количество раз, “схлопываются”, а нечетное число остаётся.


// 4. FizzBuzz (FreeCodeCamp)
// Задача: Написать программу, которая выводит числа от 1 до n. Для кратных 3 — “Fizz”, для кратных 5 — “Buzz”, для обоих — “FizzBuzz”.

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) console.log('FizzBuzz');
        else if (i % 3 === 0) console.log('Fizz');
        else if (i % 5 === 0) console.log('Buzz');
        else console.log(i);
    }
}

// Объяснение: Используем проверку кратности в порядке убывания приоритетов (15, 3, 5).


// 5. Sum of Two Lowest Positive Integers (Codewars)
// Задача: Найти сумму двух наименьших положительных чисел в массиве.

function sumTwoSmallestNumbers(numbers) {
    const [a, b] = numbers.sort((a, b) => a - b);
    return a + b;
}

// Объяснение: Сортируем массив и берём первые два элемента.


// 6. Palindrome Check (Exercism, FreeCodeCamp)
// Задача: Проверить, является ли строка палиндромом.

function isPalindrome(s) {
    const cleanStr = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanStr === cleanStr.split('').reverse().join('');
}

// Объяснение: Очищаем строку от лишних символов и сравниваем её с развёрнутой копией.


// 7. Max Subarray Sum (Kadane’s Algorithm) (LeetCode, Codewars)
// Задача: Найти максимальную сумму подмассива.

function maxSubArray(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}

// Объяснение: Алгоритм Кадане позволяет находить максимальную сумму за линейное время.


// 8. Tribonacci Sequence (Codewars)
// Задача: Реализовать функцию, которая возвращает n элементов трибоначчи.

function tribonacci(signature, n) {
    const result = signature.slice(0, n);
    while (result.length < n) {
        result.push(result.slice(-3).reduce((acc, num) => acc + num, 0));
    }
    return result;
}

// Объяснение: Используем массив, который пополняется суммами трёх последних чисел.


// 9. Merge Two Sorted Lists (LeetCode)
// Задача: Слить два отсортированных связанных списка в один отсортированный список.

function mergeTwoLists(list1, list2) {
    const dummy = { next: null };
    let current = dummy;
    while (list1 && list2) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    current.next = list1 || list2;
    return dummy.next;
}

// Объяснение: Используем указатели для поочерёдного добавления меньшего элемента из двух списков.


// 10. Climbing Stairs (LeetCode)
// Задача: Найти количество способов подняться по лестнице из n ступенек, если за раз можно подняться на 1 или 2 ступеньки.

function climbStairs(n) {
    let prev1 = 1, prev2 = 1;
    for (let i = 2; i <= n; i++) {
        const current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }
    return prev1;
}

// Объяснение: Используем динамическое программирование с оптимизацией памяти (два последних значения).


// 11. Binary Search (LeetCode, FreeCodeCamp)
// Задача: Реализовать алгоритм бинарного поиска в отсортированном массиве.


function binarySearch(nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) return mid;
        else if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

// Объяснение: Постепенно сокращаем диапазон поиска, проверяя средний элемент.


// 12. Move Zeroes (LeetCode, Codewars)
// Задача: Переместить все нули в конце массива, сохраняя порядок остальных элементов.

function moveZeroes(nums) {
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[index++] = nums[i];
        }
    }
    for (let i = index; i < nums.length; i++) {
        nums[i] = 0;
    }
}

// Объяснение: Используем два указателя, чтобы “собрать” ненулевые элементы в начале массива.


// 13. Longest Common Prefix (LeetCode, Codewars)
// Задача: Найти самую длинную общую префиксную строку среди массива строк.

function longestCommonPrefix(strs) {
    if (!strs.length) return '';
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);
            if (!prefix) return '';
        }
    }
    return prefix;
}

// Объяснение: Поочерёдно уменьшаем общий префикс, пока он не совпадает с началом каждой строки.


// 14. Reverse a Linked List (LeetCode)
// Задача: Развернуть односвязный список.

function reverseList(head) {
    let prev = null;
    while (head) {
        const next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
}

// Объяснение: Переворачиваем указатели next, чтобы развернуть список.


// 15. Find Missing Number (LeetCode, FreeCodeCamp)
// Задача: Найти отсутствующее число в массиве от 0 до n.

function missingNumber(nums) {
    const n = nums.length;
    const sum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce((acc, num) => acc + num, 0);
    return sum - actualSum;
}

// Объяснение: Используем формулу суммы арифметической прогрессии.


// 16. Group Anagrams (LeetCode, Codewars)
// Задача: Группировать строки в массиве, которые являются анаграммами.

function groupAnagrams(strs) {
    const map = new Map();
    for (const str of strs) {
        const sorted = str.split('').sort().join('');
        if (!map.has(sorted)) {
            map.set(sorted, []);
        }
        map.get(sorted).push(str);
    }
    return Array.from(map.values());
}

// Объяснение: Используем отсортированную версию строки как ключ для группировки.

// 17. Product of Array Except Self (LeetCode)
// Задача: Для каждого элемента массива найти произведение всех остальных, не используя деление.

function productExceptSelf(nums) {
    const result = [];
    let prefix = 1, postfix = 1;

    for (let i = 0; i < nums.length; i++) {
        result[i] = prefix;
        prefix *= nums[i];
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= postfix;
        postfix *= nums[i];
    }

    return result;
}

// Объяснение: Используем два прохода: слева направо для произведений перед текущим числом и справа налево для последующих.