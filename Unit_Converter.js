const operationSelect = document.getElementById("operation");
const input1 = document.getElementById("input1");
const executeButton = document.getElementById("execute");
const resultDisplay = document.getElementById("result");

executeButton.addEventListener('click', () => {

    const operation = operationSelect.ariaValueMax;
    const num1 = parseFloat(input1.value);

    if (isNaN(num1)) {
        resultDisplay.textContent = "Please enter a valid number"
        return;
    }
