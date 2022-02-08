// - Створити змінні. Присвоїти кожному з них значення:
//     'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
let str1 = 'hello';
console.log(str1);
alert(str1);
let str2 = 'owu';
console.log(str2);
alert(str2);
let str3 = 'com';
console.log(str3);
alert(str3);
let str4 = 'ua';
console.log(str4);
alert(str4);
let num1 = 1;
console.log(num1);
alert(num1);
let num2 = 10;
console.log(num2);
alert(num2);
let num3 = -999;
console.log(num3);
alert(num3);
let num4 = 123;
console.log(num4);
alert(num4);
let num5 = 3.14;
console.log(num5);
alert(num5);
let num6 = 2.7;
console.log(num6);
alert(num6);
let num7 = 16;
console.log(num7);
alert(num7);
let boolean1 = true;
console.log(boolean1);
alert(boolean1);
let boolean2 = false;
console.log(boolean2);
alert(boolean2);
document.write(`<h1>${str1} ${str2}.${str3}.${str4}</h1>`);
document.write(`<p>${num1}; ${num2}; ${num3}; ${num4}; ${num5}; ${num6}; ${num7}</p>`);
document.write(`${boolean1}; ${boolean2}<br/>`);

// - Переприсвоїти кожній змінній з завдання значення на довільне.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
str1 = 'love';
console.log(str1);
alert(str1);
str2 = 'of';
console.log(str2);
alert(str2);
str3 = 'my';
console.log(str3);
alert(str3);
str4 = 'life';
console.log(str4);
alert(str4);
num1 = 420;
console.log(num1);
alert(num1);
num2 = -777;
console.log(num2);
alert(num2);
num3 = 13;
console.log(num3);
alert(num3);
num4 = 666;
console.log(num4);
alert(num4);
num5 = 31.03;
console.log(num5);
alert(num5);
num6 = 11.11;
console.log(num6);
alert(num6);
num7 = 407;
console.log(num7);
alert(num7);
boolean1 = 20 === 20;
console.log(boolean1);
alert(boolean1);
boolean2 = 5 > 7;
console.log(boolean2);
alert(boolean2);
document.write(`<h1>${str1} ${str2} ${str3} ${str4}</h1>`);
document.write(`<p>${num1}; ${num2}; ${num3}; ${num4}; ${num5}; ${num6}; ${num7}</p>`);
document.write(`${boolean1}; ${boolean2}<br/>`);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
let firstName = 'Oksana';
let middleName = 'Oleksandrivna';
let lastName = 'Danyliuk';
let person = `${firstName} ${middleName} ${lastName}`;
console.log(person);

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
let firstName1 = prompt('What is your first name?');
let middleName1 = prompt('What is your middle name?');
let age = prompt('What is your age?');
console.log(`Hello, ${firstName1} ${middleName1}. You're ${age} years old.`);
document.write(`<h2>Hello, ${firstName1} ${middleName1}. You're ${age} years old.</h2>`);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
let a1 = 100;
let b = '100';
let c = true;
console.log(typeof a1);
console.log(typeof b);
console.log(typeof c);

// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
5 < 6 //-> true
5 > 6 //-> false
5 >= 6 //-> false
5 === 6 //-> false
10 === 10 //-> true
10 <= 10 //-> true
10 !== 10 //-> false
10 < 10 //-> false
10 > 10 //-> false
123 === '123' //-> false
123 !== '123' //-> true

// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
let str = "20";
let a = 5;
document.write(str + a + "<br/>"); //205 (стрінга), відбулася конкатинація, бо стрінга заражає все, як вірус
document.write(str - a + "<br/>"); //15 (число), відбувається автоматичне перетворення стрінги в число
document.write(str * "2" + "<br/>"); //40 (число)
document.write(str / 2 + "<br/>"); //10 (число)