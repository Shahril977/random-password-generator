const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let boxOne = document.getElementById("pass-el-1")
let boxTwo = document.getElementById("pass-el-2")

// Define the desired password length as a constant
const PASSWORD_LENGTH = 15;

// Function to generate a random password
function generateRandomPassword() {
    let password = ""; // Start with an empty string to build the password
    for (let i = 0; i < PASSWORD_LENGTH; i++) { // Loop for the desired password length
        let randomIndex = Math.floor(Math.random() * characters.length); // Pick a random index from the characters array
        password += characters[randomIndex]; // Append the random character to the password string
    }
    return password; // Return the fully generated password
}

// Function to update the password boxes
function updatePasswords() {
    let passwordOne = generateRandomPassword(); // Generate first password
    let passwordTwo = generateRandomPassword(); // Generate second password

    boxOne.textContent = passwordOne; // Update boxOne with the first password
    boxTwo.textContent = passwordTwo; // Update boxTwo with the second password
}
