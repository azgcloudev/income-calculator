let display75Box = document.querySelector("#display75");
let display15Box = document.querySelector("#display15");
let display10Box = document.querySelector("#display10");
let activeCurrency = document.querySelector("#currency-select");
let inputIncome = document.querySelector("#input-income");
let calculateButton = document.querySelector("#calculate-btn");

calculateButton.onclick = function () {
    if (isInputValid(inputIncome)) {
        display75Box.innerText = `Gastos: ${activeCurrency.value}${calculate(parseInt(inputIncome.value), 75)}`;
        display15Box.innerText = `Inversión: ${activeCurrency.value}${calculate(parseInt(inputIncome.value), 15)}`;
        display10Box.innerText = `Ahorros: ${activeCurrency.value}${calculate(parseInt(inputIncome.value), 10)}`;
    } else {
        alert("Input is not valid");
    }
}

const isInputValid = value => {
    // value should be numbers only
    value = parseInt(value);

    return value ===  NaN ? false : true;
}