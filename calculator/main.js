const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
const clear = document.getElementById('clear');
const backspace = document.getElementById('backspace');
const equals = document.getElementById('equals');

let expression = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.id === 'clear') {
            expression = '';
            display.value = '';
        } else if (button.id === 'backspace') {
            expression = expression.slice(0, -1);
            display.value = expression;
        } else if (button.id === 'equals') {
            try {
                const result = eval(expression);
                display.value = result;
                expression = result.toString();
            } catch (error) {
                display.value = 'Error';
                expression = '';
            }
        } else {
            expression += button.textContent;
            display.value = expression;
        }
    });
});

buttons.forEach(button => {
    button.classList.add('gradient');
});