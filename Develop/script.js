// Assignment Code
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function(){

    // variables for prompt answers determining character types
    var pLength = window.prompt("How many characters should the new password be? (8-128)")
    var pCapital = window.confirm("Include capital letters? (select ok to include)")
    var pLower = window.confirm("Include lowercase letters? (select ok to include)")
    var pNumber = window.confirm("Include numbers? (select ok to include)")
    var pSpecial = window.confirm("Include special characters? (select ok to include)")

    // variables for character strings
    var charCap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var charLower = "abcdefghijklmnopqrstuvwxyz";
    var charNum = "0123456789";
    var charSpecial = "!#$%&*+,-./:;<?@\_"
    var characters

    // Determines the list of characters available, based on the prompt answers
    if(pCapital && pLower && pNumber && pSpecial) {
    characters = charCap + charLower + charNum + charSpecial;
    console.log(characters);
}
    else if(pCapital && pLower && pNumber) {
    characters = charCap + charLower + charNum;
}
    else if(pCapital && pLower && pSpecial) {
    characters = charCap + charLower + charSpecial;
}
    else if(pCapital && pNumber && pSpecial){
    characters = charCap + charNum + charSpecial;
}
    else if(pLower && pNumber & pSpecial){
    characters = charLower + charNum + charSpecial;
}
    else if(pCapital && pLower){
    characters = charCap + charLower;
}
    else if(pCapital && pNumber){
    characters = charCap + charNum;
}
    else if(pCapital && pSpecial){
    characters = charCap + charSpecial;
}
    else if(pLower && pNumber){
    characters = charLower + charNum;
}
    else if(pLower && pSpecial){
    characters = charLower + charSpecial;
}
    else if(pNumber && pSpecial){
    characters = charNum + charSpecial;
}
    else if(pCapital){
    characters = charCap;
}
    else if(pLower){
    characters = charLower;
}
    else if(pNumber){
    characters = charNum;
}
    else if(pSpecial){
    characters = charSpecial;
}
for(var i = 0; i < pLength; i++) {
  var password = [Math.floor(Math.random() * pLength)]
}

var passwordText = document.querySelector("#password");
passwordText.textContent = password;

})
