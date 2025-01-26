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

    let result;

    switch (operation) {
         case "MetersToFeet":
             result = num1 * 3.281;
             break;
         case "MetersToInches":
             result = num1 * 39.37;
             break;
         case "FeetToMeters":
             result = num1 / 3.281;
             break;
         case "FeetToInches":
             result = num1 * 12;
             break;
         case "InchesToMeters":
             result = num1 / 39.3701;
             break;
         case "InchesToFeet":
             result = num1 / 12;
             break;
         case "NauticalMilesPerHourToKilometersPerHour":
             result = num1 * 1.852;
             break;
         case "NauticalMilesPerHourToKnots":
             result = num1 * 1; 
             break;
         case "StatuteMilesPerHourToKnots":
             result = num1 * 1.151; 
             break;
         case "StatuteMilesPerHourToKilometersPerHour":
             result = num1 * 1.60934; 
             break;             
         case "KilometersPerHourToNauticalMilesPerHour":
             result = num1 / 0.53995680345572;
             break;
         case "KilometersPerHourToKnots":
             result = num1 / 1.852; 
             break;
         case "KnotsToNauticalMilesPerHour":
             result = num1 * 1; 
             break;
         case "KnotsToKilometersPerHour":
             result = num1 * 1.852;
             break;
         case "KnotsToStatuteMilesPerHour":
             result = num1 * 1.15;
             break;
         case "LitersToKilograms":
             result = num1 * 1; 
             break;
         case "KilogramsToLiters":
             result = num1 * 1; 
             break;
         case "MillilitersToGrams":
             result = num1 * 1; 
             break;
         case "GramsToMilliliters":
             result = num1 * 1; 
             break;
         case "MiliLitersToKilograms":
             result = num1 / 1000; 
             break;
         case "KilogramsToMiliLiters":
             result = num1 * 1000; 
             break;
         case "MillilitersToGrams":
             result = num1 * 1; 
             break;
         case "GramsToMilliliters":
             result = num1 * 1; 
             break;
    }


})