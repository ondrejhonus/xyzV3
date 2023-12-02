var generator = document.querySelector(".generate");
var number = document.querySelector('.InputRange');
var resultDisplay = document.getElementById('resultDisplay');
var advancedCheckbox = document.getElementById('advanced');

function makePassword() {
    var selectedArray = advancedCheckbox.checked ? advancedCharacterArray : simpleCharacterArray;

    function random() {
        return Math.floor(Math.random() * number.value);
    }

    let randomString = "";
    for (var i = 0; i < number.value; i++) {
        randomString += selectedArray[random() + (Math.floor(Math.random() * (100-number.value)))];
    }

    return randomString;
}

const simpleCharacterArray = [
    'i', 'x', '5', 'r', 'h', '2', 'U', 'j', '9', 'o', 
    'W', 't', '4', '3', 'M', 'f', '8', 'k', 'c', 'e', 
    '0', 'q', 'z', 'A', 'a', 's', '1', 'B', 'l', '5', 
    'v', '6', 'g', 'd', 'O', 'n', '2', 'N', 'p', 'T', 
    'u', 'w', '7', 'b', '7', 'V', 'R', 'm', 'Z', 'L', 
    'X', 'K', 'P', 'C', 'S', 'E', 'y', '3', 'Y', '4', 
    'Q', 'G', '6', 'D', '8', '5', 'F', 'H', '0', 'a', 
    'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 
    'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 
    'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 
];
const advancedCharacterArray = 
[
"!", "A", "#", "č", "=", "j", "l", "r", "W", "4", 
"@", "N", "V", "o", "M", "U", "b", "0", "P", "2", 
"k", "@", "7", "Z", "Y", "6", "Q", "&", "c", "X", 
"3", "1", "ž", "1", "d", "s", "5", "h", "n", "y", 
"8", "t", "i", "ú", "f", "ř", "v", "g", "á", "x", 
"ě", "w", "u", "p", "o", "š", "q", "k", "ý", ",", 
"]", ":", "?", "!", "<", ">", "B", "L", "]", "^", 
"-", "č", "`", "R", "_", "á", "(", ")", "[", "í", 
"]", "ž", "ě", "ř", "š", "ý", "a", "b", "c", "d", 
"e", "f", "-", "h", "i", "j", "k", "l", "m", "n", 
];


generator.addEventListener('click', function () {
    var output = makePassword();
    if (output.length > 0) {
        resultDisplay.innerText = output;
        resultDisplay.style.backgroundColor = "white";
    } else {
        resultDisplay.innerText = "Why do you hate yourself?";
        resultDisplay.style.backgroundColor = "white";
    }
});
