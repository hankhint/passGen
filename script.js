const passLengthBoxEl = document.getElementById("passLengthBox");
const passLengthSliderEl = document.getElementById("passLengthSlider");

passLengthBoxEl.addEventListener('input', syncCharacterAmount)
passLengthSliderEl.addEventListener('input', syncCharacterAmount)

//keeps the slider and the input box synced with the same number
function syncCharacterAmount(e) {
    const value = e.target.value;
    passLengthSliderEl.value = value;
    passLengthBoxEl.value = value;
}
//get user input for password parameters
// which characters?  
// how many characters? var = chacterAmount

//create an array of all potential password characters var = passwordChar
// use if statements and concat it together


// use a for loop with max value of characterAmount
// generate a random number between 0 and passwordChar.length
// use the random number to pull one random character from passwordChar array
// append the random character from passwordChar to var = password

var generateBtn = document.querySelector("#generateBtn");

function getPassLengthBox () {
console.log(passLengthBoxEl.value)
};

generateBtn.addEventListener("click", getPassLengthBox);

// Assignment Code



// Write password to the #password output
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
