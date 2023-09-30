function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function clearEntry() {
    const currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue.slice(0, -1);
}

function calculateResult() {
    const input = document.getElementById('display').value;
    try {
        const result = evaluateExpression(input);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function evaluateExpression(expression) {
    return new Function('return ' + expression)();
}

// Keyboard support
document.addEventListener('keydown', function (event) {
    const key = event.key;

    if (/[0-9+\-*/.=]|Enter|Backspace|Escape|Delete/.test(key)) {
        event.preventDefault();
        switch (key) {
            case 'Enter':
                calculateResult();
                break;
            case '=':
                calculateResult();
                break;
            case 'Backspace':
                clearEntry();
                break;
            case 'Escape':
                clearDisplay();
                break;
            case 'Delete':
                clearDisplay();
                break;
            default:
                appendToDisplay(key);
                break;
        }
    } else if (key === ',') {
        appendToDisplay('.');
    }
});
