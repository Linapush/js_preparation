// Односвязный список (Singly Linked List)

// Односвязный список — это структура данных, состоящая из узлов. Каждый узел содержит два компонента:
// 	1.	Данные — это значение, которое хранится в узле.
// 	2.	Ссылка на следующий узел — указатель на следующий узел в списке. Для последнего узла эта ссылка будет null.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  printList() {
    let current = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
}

// Пример использования
const list1 = new SinglyLinkedList();
list1.add(10);
list1.add(20);
list1.add(30);
list1.printList(); // Выведет: 10, 20, 30



// Двусвязный список (Doubly Linked List)

// Двусвязный список — это структура данных, в которой каждый узел содержит три компонента:
// 	1.	Данные — значение, которое хранится в узле.
// 	2.	Ссылка на следующий узел — указатель на следующий узел.
// 	3.	Ссылка на предыдущий узел — указатель на предыдущий узел.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  printList() {
    let current = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }

  printReverse() {
    let current = this.tail;
    while (current !== null) {
      console.log(current.value);
      current = current.prev;
    }
  }
}

// Пример использования
const list2 = new DoublyLinkedList();
list2.add(10);
list2.add(20);
list2.add(30);
list2.printList(); // Выведет: 10, 20, 30
list2.printReverse(); // Выведет: 30, 20, 10


// Задачи на Linked Lists на в задачниках:

// 	1.	Codewars:
// 	•	Написать алгоритм, который объединяет два отсортированных односвязных списка в один отсортированный.
// 	•	Задача: «Merge two sorted linked lists».
// 	2.	Leetcode:
// 	•	Найти цикл в односвязном списке.
// 	•	Задача: «Linked List Cycle» — определить, есть ли цикл в списке.
// 	3.	Exercism:
// 	•	Реализовать односвязный список с операциями добавления, удаления, поиска и реверсирования.
// 	4.	FreeCodeCamp:
// 	•	Задача: Написать алгоритм для реверсирования односвязного списка.


// Задача:
// Дано число n, нужно создать односвязный список с n элементами, содержащими числа от 1 до n, и вернуть его голову.

function createLinkedList(n) {
  if (n <= 0) return null;

  let head = new Node(1);
  let current = head;

  for (let i = 2; i <= n; i++) {
    const newNode = new Node(i);
    current.next = newNode;
    current = newNode;
  }

  return head;
}

// Пример использования
const listHead = createLinkedList(5);
let current = listHead;
while (current) {
  console.log(current.value); // Выведет: 1, 2, 3, 4, 5
  current = current.next;
}