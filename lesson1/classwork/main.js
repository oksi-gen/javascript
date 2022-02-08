// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor).
// Скласти результат цих чисел в змінній result.
let num1 = Math.floor(Math.random() * 100);
let num2 = Math.floor(Math.random() * 100);
let num3 = Math.floor(Math.random() * 100);
let num4 = Math.floor(Math.random() * 100);
let num5 = Math.floor(Math.random() * 100);
let num6 = Math.floor(Math.random() * 100);
let num7 = Math.floor(Math.random() * 100);
let num8 = Math.floor(Math.random() * 100);
let num9 = Math.floor(Math.random() * 100);
let num10 = Math.floor(Math.random() * 100);
let array1 = [num1, num2, num3, num4, num5, num6, num7, num8, num9, num10]
let result = num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9 + num10
console.log(result);

// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
let book1 = {
    name: '"Pride and Prejudice"',
    pages: 364,
    genre: 'romance novel'
}
console.log(book1);

// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
let book2 = {
    name: '"Shantaram"',
    pages: 936,
    genre: 'novel',
    author: 'Gregory David Roberts'
}
console.log(book2);

// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. ' +
// 'Вивести кожну книгу як окремий об'єкт
let books = [
    {
        name: '"Pride and Prejudice"',
        pages: 364,
        genre: 'romance novel',
        author: 'Jane Austen'
    },
    {
        name: '"Shantaram"',
        pages: 936,
        genre: 'novel',
        author: 'Gregory David Roberts'
    },
    {
        name: '"Perfume: The Story of a Murderer"',
        pages: 263,
        genre: 'novel',
        author: 'Patrick Süskind'
    }];
console.log(books[0]);
console.log(books[1]);
console.log(books[2]);

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.
let height = 23;
let width = 10;
let s = height * width;
console.log(s);

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.
let heightC = 10;
let dC = 4;
let v = Math.PI * Math.pow((dC / 2), 2) * heightC;
console.log(v);


// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь)
// або оператор зведення в ступінь **).
let n = 3;
let m = 4;
let k = Math.sqrt(Math.pow(n, 2) + Math.pow(m, 2));
console.log(k);

