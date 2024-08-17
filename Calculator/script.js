// script.js

const buttons = document.querySelectorAll('.btn');
const display = document.getElementById('result');
let currentInput = '';
let previousInput = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (value === 'C') {
            currentInput = '';
            previousInput = '';
            operator = '';
            display.textContent = '';
        } else if (value === '=') {
            if (currentInput && previousInput) {
                currentInput = eval(previousInput + operator + currentInput);
                display.textContent = currentInput;
                previousInput = '';
                operator = '';
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            if (currentInput) {
                previousInput = currentInput;
                currentInput = '';
                operator = value;
            }
        } else {
            currentInput += value;
            display.textContent = currentInput;
        }
    });
});
