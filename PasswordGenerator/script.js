var generator = document.querySelector(".generate");
var number = document.querySelector('.InputRange');
var resultDisplay = document.getElementById('resultDisplay');


function makePassword(){
    // 92 ASCII characters
    const array = [
        "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", 
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", "<", "=", ">", "?", 
        "@", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", 
        "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "[", "]", "^", "_", 
        "`", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", 
        "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "{", "|", "}", "~"
      ];
function random() {
    return Math.floor(Math.random() * number.value);
}
var characterArray = [
    "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", 
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", "<", "=", ">", "?", 
    "@", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", 
    "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "[", "]", "^", "_", 
    "`", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", 
    "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "{", "|", "}", "~"
  ];


let randomString = "";
for ( var i = 0; i < number.value; i++) {
    randomString += characterArray[ random() ];

};

return randomString;
}


generator.addEventListener('click', function(){
    var output = makePassword();
    console.log(output)
    resultDisplay.innerText = output;
    resultDisplay.style.backgroundColor = "white";
});