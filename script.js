// 1) Розкласти за цифрами п'ятизначне число і вивести у вихідному порядку через пробіл
// Приклад:
// 10369
// 1 0 3 6 9
let num = String(10369);
console.log(num[0] + " " + num[1] + " " + num[2] + " " + num[3] + " " + num[4]);

function divideNum() {
    let num = prompt ('Enter five-digit number');
    alert (`${num[0]} ${num[1]} ${num[2]} ${num[3]} ${num[4]}`);
}
divideNum();

// 2) Створити скрипт для складання, віднімання, множення та поділу
// двох чисел та виведення результатів.
function calc () {
    let a = +(prompt ('Enter first number'));
    let b = +(prompt ('Enter second number'));

    let sum = a + b;
    let difference = a - b;
    let product = a * b;
    let quotient = a/b;
    alert (`
        sum = ${sum}
        difference = ${difference}
        product = ${product}
        quotient = ${quotient}
    `)
}
calc ();

// 3*) Зробити функцію, яка викликатиме діалогове вікно (prompt) для введення імені.
//     Завжди робити першу букву великої та виводити її в новому повідомленні (alert).

function inputName() {
    let name = prompt ('Enter your name');
    let firstSymbol = name.charAt(0).toUpperCase();
    let restSymbols = name.slice(1);
    alert(`${firstSymbol}${restSymbols}`);
}
inputName();