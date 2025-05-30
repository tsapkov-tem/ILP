# Практические задания по функциям в JavaScript

## Упражнение 1: Базовые функции

**Задача:** Напишите функцию `calculateAverage`, которая принимает массив чисел и возвращает их среднее значение.

```javascript
function calculateAverage(numbers) {
  // Ваш код здесь
}

console.log(calculateAverage([1, 2, 3, 4, 5])); // Должно вернуть 3
```

## Упражнение 2: Функции обратного вызова

**Задача:** Создайте функцию `processArray`, которая принимает массив и функцию-обработчик, применяя её к каждому элементу.

```javascript
function processArray(arr, callback) {
  // Ваш код здесь
}

const squaredNumbers = processArray([1, 2, 3], x => x * x);
console.log(squaredNumbers); // Должно вернуть [1, 4, 9]
```

## Упражнение 3: Замыкания

**Задача:** Реализуйте функцию-счётчик `createCounter`, которая при каждом вызове возвращает число на 1 больше предыдущего.

```javascript
function createCounter() {
  // Ваш код здесь
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```

## Упражнение 4: Рекурсия

**Задача:** Напишите рекурсивную функцию `fibonacci`, которая возвращает n-ное число Фибоначчи.

```javascript
function fibonacci(n) {
  // Ваш код здесь
}

console.log(fibonacci(7)); // Должно вернуть 13
```

## Упражнение 5: Каррирование

**Задача:** Создайте каррированную функцию `multiply`, которую можно вызывать как `multiply(2)(3)`.

```javascript
function multiply(a) {
  // Ваш код здесь
}

console.log(multiply(2)(3)); // Должно вернуть 6
```

## Упражнение 6: Методы функций

**Задача:** Напишите функцию `greet`, которую можно вызвать с контекстом объекта.

```javascript
function greet() {
  // Ваш код здесь
}

const person = { name: 'Alice' };
greet.call(person); // Должно вывести "Hello, Alice!"
```

## Упражнение 7: Генераторы

**Задача:** Создайте генератор `randomNumberGenerator`, который возвращает случайные числа в заданном диапазоне.

```javascript
function* randomNumberGenerator(min, max) {
  // Ваш код здесь
}

const randomGen = randomNumberGenerator(1, 100);
console.log(randomGen.next().value); // Случайное число между 1 и 100
```

## Упражнение 8: Асинхронные функции

**Задача:** Напишите асинхронную функцию `fetchData`, которая получает данные по URL.

```javascript
async function fetchData(url) {
  // Ваш код здесь
}

fetchData('https://api.example.com/data')
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

## Упражнение 9: Чистые функции

**Задача:** Перепишите функцию, чтобы сделать её чистой.

```javascript
let total = 0;
function addToTotal(amount) {
  total += amount;
  return total;
}

// Чистая версия:
function pureAdd(currentTotal, amount) {
  // Ваш код здесь
}
```

## Упражнение 10: Функции высшего порядка

**Задача:** Реализуйте свою версию метода `filter`.

```javascript
function myFilter(arr, callback) {
  // Ваш код здесь
}

const numbers = [1, 2, 3, 4, 5];
const even = myFilter(numbers, x => x % 2 === 0);
console.log(even); // Должно вернуть [2, 4]
```

## Проверка решений

Для проверки своих решений вы можете:
1. Использовать консоль браузера или Node.js
2. Написать тесты (например, с помощью Jest)
3. Проверить на различных входных данных

Пример теста для первого упражнения:
```javascript
console.assert(calculateAverage([10, 20, 30]) === 20, 
  "Тест не пройден: calculateAverage([10, 20, 30]) должно возвращать 20");
```

## Дополнительные задания

1. Напишите функцию `memoize` для кэширования результатов
2. Создайте функцию-декоратор `logExecutionTime`, которая измеряет время выполнения
3. Реализуйте функцию `pipe` для композиции функций
4. Напишите функцию `throttle`, которая ограничивает частоту вызовов

**Пример решения для упражнения 1:**
```javascript
function calculateAverage(numbers) {
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}
```