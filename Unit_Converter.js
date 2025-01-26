const operationSelect = document.getElementById("operation");
const input1 = document.getElementById("input1");
const executeButton = document.getElementById("execute");
const resultDisplay = document.getElementById("result");

executeButton.addEventListener('click', () => {

    const operation = operationSelect.Value;
    const num1 = parseFloat(input1.value);

    if (isNaN(num1)) {
        resultDisplay.textContent = "Please enter a valid number"
        return;
    }

    let result;

    switch (operation) {
         case "MetersToFeet":
             result = num1 * 3.281;
             break;
         case "MetersToInches":
             result = num1 * 39.37;
             break;
         case "FeetToInches":
             result = num1 * 12;
             break;
         case "NauticalMilesPerHourToKilometersPerHour":
             result = num1 * 1.852;
             break;
         case "NauticalMilesPerHourToKnots":
             result = num1 * 1; 
             break;
         case "StatuteMilesPerHourToKilometersPerHour":
             result = num1 * 1.60934; 
             break;  
         case "StatuteMilesPerHourToKnots":
             result = num1 * 1.151; 
             break;     
         case "KilometersPerHourToKnots":
             result = num1 / 1.852; 
             break;
         case "LitersToKilograms":
             result = num1 * 1; 
             break;
         case "LitersToGrams":
             result = num1 * 1; 
             break;
         case "MillilitersToKiloGrams":
             result = num1 * 1; 
             break;
         case "MillilitersToGrams":
             result = num1 * 1; 
             break;
         default:
             result = "Invalid Operation.";
    }

    resultDisplay.textContent = `${result}`;
});

function pageReset(){
    location.reload()
};