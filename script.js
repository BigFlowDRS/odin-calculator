let number1 = "";
let number2 = "";

let sign = "";

const screen = document.querySelector(".screen");

function add(a, b) {
    let num1 = parseFloat(a);
    let num2 = parseFloat(b);

    if (isNaN(num1)) num1 = 0;
    if (isNaN(num2)) num2 = 0;
    return (num1 + num2).toFixed(2);
}

function sub(a, b) {
    let num1 = parseFloat(a);
    let num2 = parseFloat(b);

    if (isNaN(num1)) num1 = 0;
    if (isNaN(num2)) num2 = 0;
    return (num1 - num2).toFixed(2);
}

function mul(a, b) {
    let num1 = parseFloat(a);
    let num2 = parseFloat(b);

    if (isNaN(num1)) num1 = 0;
    if (isNaN(num2)) num2 = 0;
    return (num1 * num2).toFixed(2);
}

function divide(a, b) {
    let num1 = parseFloat(a);
    let num2 = parseFloat(b);

    if (isNaN(num1)) num1 = 0;
    if (isNaN(num2)) num2 = 1;

    return (num1 / num2).toFixed(2);
}

function change(e) {
    console.log("hi");
    if (sign != "") {
        number2 += e.target.innerHTML;
        screen.innerHTML = number1 + sign + number2;
    } else {
        number1 += e.target.innerHTML;
        screen.innerHTML = number1 + sign + number2;
    }
    console.log(number1);
    console.log(number2);
}

function calc() {
    if (sign == "+") {
        number1 = add(number1, number2);
    } else if (sign == "-") {
        number1 = sub(number1, number2);
    } else if (sign == "/") {
        number1 = divide(number1, number2);
    } else if (sign == "*") {
        number1 = mul(number1, number2);
    }
    screen.innerHTML = number1;

    number2 = "";
    sign = "";
}

function change_sign(e) {
    if (sign != "") {
        if (number2 != "") {
            calc();
        }
    }
    sign = e.target.innerHTML;
    screen.innerHTML = number1 + sign;
}

const number_key = document.querySelectorAll(".number");
number_key.forEach((button) => {
    button.addEventListener("click", change);
});

const sign_key = document.querySelectorAll(".arithmetic");
sign_key.forEach((button) => {
    button.addEventListener("click", change_sign);
});

const equate = document.querySelector("#equal");
equate.addEventListener("click", calc);

const reset = document.querySelector("#AC");
reset.addEventListener("click", () => {
    number1 = "";
    number2 = "";
    sign = "";
    screen.innerHTML = "";
});

const sign_change = document.querySelector("#sign");
sign_change.addEventListener("click", () => {
    if (number2 != "") number2 = mul(number2, "-1");
    else number1 = mul(number1, "-1");

    screen.innerHTML = number1 + sign + number2;
});

const percentage = document.querySelector("#percentage");
percentage.addEventListener("click", () => {
    if (number2 != "") number2 = divide(number2, "100");
    else number1 = divide(number1, "100");

    screen.innerHTML = number1 + sign + number2;
});