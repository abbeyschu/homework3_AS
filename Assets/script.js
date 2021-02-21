// variable referring to the button in the html
var generateBtn = document.querySelector("#generate");

// when the button is clicked the below function will begin
generateBtn.addEventListener("click", function(){

    // variables for prompt answers determining character types
    var pLength = window.prompt("How many characters should the new password be? (8-128)")
    var pCapital = window.confirm("Include capital letters? (select ok to include)")
    var pLower = window.confirm("Include lowercase letters? (select ok to include)")
    var pNumber = window.confirm("Include numbers? (select ok to include)")
    var pSpecial = window.confirm("Include special characters? (select ok to include)")

    // log password length in console for review purposes
    console.log(pLength);

    // variables for character strings
    var charCap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var charLower = "abcdefghijklmnopqrstuvwxyz";
    var charNum = "0123456789";
    var charSpecial = "!#$%&*+,-./:;<?@\_"
    var characters

    // Determines the list of characters available, based on the prompt answers. Logs them to the console for review purposes.
    if(pCapital && pLower && pNumber && pSpecial) {
    characters = charCap + charLower + charNum + charSpecial;
    console.log(characters);
}
    else if(pCapital && pLower && pNumber) {
    characters = charCap + charLower + charNum;
    console.log(characters);
}
    else if(pCapital && pLower && pSpecial) {
    characters = charCap + charLower + charSpecial;
    console.log(characters);
}
    else if(pCapital && pNumber && pSpecial){
    characters = charCap + charNum + charSpecial;
    console.log(characters);
}
    else if(pLower && pNumber & pSpecial){
    characters = charLower + charNum + charSpecial;
    console.log(characters);
}
    else if(pCapital && pLower){
    characters = charCap + charLower;
    console.log(characters);
}
    else if(pCapital && pNumber){
    characters = charCap + charNum;
    console.log(characters);
}
    else if(pCapital && pSpecial){
    characters = charCap + charSpecial;
    console.log(characters);
}
    else if(pLower && pNumber){
    characters = charLower + charNum;
    console.log(characters);
}
    else if(pLower && pSpecial){
    characters = charLower + charSpecial;
    console.log(characters);
}
    else if(pNumber && pSpecial){
    characters = charNum + charSpecial;
    console.log(characters);
}
    else if(pCapital){
    characters = charCap;
    console.log(characters);
}
    else if(pLower){
    characters = charLower;
    console.log(characters);
}
    else if(pNumber){
    characters = charNum;
    console.log(characters);
}
    else if(pSpecial){
    characters = charSpecial;
    console.log(characters);
}
// clear any previously generated passwords
password = "";

// determines random string, limited to length entered
for(var i = 0; i < pLength; i++) {
  password += characters[Math.floor(Math.random() * characters.length)]
}

// replaces original text with the generated password
var passwordText = document.querySelector("#password");
passwordText.textContent = password;

})
