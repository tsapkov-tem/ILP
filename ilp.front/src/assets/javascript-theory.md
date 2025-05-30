# Функции в JavaScript: Полное руководство

## 1. Основы функций

**Функция** - это блок кода, который можно выполнять многократно.

```javascript
// Объявление функции
function greet(name) {
  return `Hello, ${name}!`;
}

// Вызов функции
console.log(greet('Alice')); // "Hello, Alice!"
```

### Особенности:
- Могут принимать параметры
- Могут возвращать значения (через `return`)
- Выполняются в момент вызова

## 2. Типы функций

### 2.1 Function Declaration (Объявление функции)
```javascript
function sum(a, b) {
  return a + b;
}
```
- Поднимается (hoisted) - можно вызывать до объявления

### 2.2 Function Expression (Функциональное выражение)
```javascript
const multiply = function(a, b) {
  return a * b;
};
```
- Не поднимается
- Может быть анонимной

### 2.3 Стрелочные функции (ES6+)
```javascript
const divide = (a, b) => a / b;
```
- Нет своего `this`
- Не имеют `arguments`
- Если тело одно выражение - `return` подразумевается

### 2.4 IIFE (Immediately Invoked Function Expression)
```javascript
(function() {
  console.log('Выполняется сразу!');
})();
```

## 3. Параметры и аргументы

### Параметры по умолчанию (ES6+)
```javascript
function greet(name = 'Guest') {
  console.log(`Hello, ${name}`);
}
```

### Rest-параметры
```javascript
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
```

## 4. Замыкания (Closures)

Функция "запоминает" окружение, где была создана:

```javascript
function createCounter() {
  let count = 0;
  return function() {
    return ++count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```

## 5. Рекурсия

Функция, вызывающая саму себя:

```javascript
function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}
```

## 6. Callback-функции

Функции, передаваемые как аргументы:

```javascript
function processData(data, callback) {
  // Обработка данных
  callback(result);
}
```

## 7. Методы функций

### call/apply/bind
```javascript
const person = { name: 'Alice' };

function greet() {
  console.log(`Hello, ${this.name}`);
}

greet.call(person); // Вызов с контекстом
```

## 8. Генераторы (ES6)

Функции, которые можно приостанавливать:

```javascript
function* idGenerator() {
  let id = 1;
  while(true) {
    yield id++;
  }
}

const gen = idGenerator();
console.log(gen.next().value); // 1
```

## 9. Асинхронные функции (ES8)

```javascript
async function fetchData() {
  try {
    const response = await fetch('url');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
```

## 10. Чистые функции

Функции без побочных эффектов:
- Не изменяют внешние переменные
- Для одних и тех же аргументов возвращают одинаковый результат
- Не зависят от внешнего состояния

```javascript
// Чистая функция
function square(x) {
  return x * x;
}
```

## 11. Каррирование

Преобразование функции с несколькими аргументами в последовательность функций:

```javascript
const multiply = a => b => a * b;
const double = multiply(2);
console.log(double(5)); // 10
```

## 12. Функции высшего порядка

Функции, которые:
- Принимают другие функции как аргументы
- Или возвращают функции

```javascript
// Пример с Array.map
const numbers = [1, 2, 3];
const squared = numbers.map(x => x * x);
```

## 13. Мемоизация

Оптимизация через кэширование результатов:

```javascript
function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    return cache[key] || (cache[key] = fn(...args));
  };
}
```

## 14. Функции-конструкторы

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const alice = new Person('Alice', 30);
```

## 15. Современные возможности (ES6+)

### Деструктуризация параметров
```javascript
function printUser({name, age}) {
  console.log(`${name}, ${age} years`);
}
```

### Значения параметров по умолчанию
```javascript
function createUser(name = 'Anonymous', role = 'user') {
  // ...
}
```

## Лучшие практики

1. Давайте функциям осмысленные имена
2. Делайте функции небольшими и специализированными
3. Избегайте побочных эффектов
4. Используйте чистые функции где возможно
5. Ограничьте количество параметров (3-4 максимум)
6. Документируйте сложные функции с помощью JSDoc

```javascript
/**
 * Рассчитывает площадь прямоугольника
 * @param {number} width - Ширина
 * @param {number} height - Высота
 * @returns {number} Площадь
 */
function getArea(width, height) {
  return width * height;
}
```