// Putting the elements in a container
let container = document.querySelector(".container");
let header = document.querySelector(".header");
let head = document.querySelector(".head");
let form = document.querySelector(".form");
let mainForm = document.querySelector(".main-form");
let formP = document.querySelector(".form-p");
let inputSec = document.querySelector(".input-sec");
let inputBtn = document.querySelector(".input-btn");
let result = document.querySelector(".result");
let pr1 = document.querySelector(".pr1");
let pr2 = document.querySelector(".pr2");
let pr3 = document.querySelector(".pr3");


// initializing some values
let numWin=1;
let numLost = 1;


// Creating a function that will generate a random number in the range 1 to 5
function generateRandomNumber() {
    return Math.floor(Math.random() * 5) + 1; // Generate a random integer between 1 and 5
}


// Function to handle the input
function inputTaker(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    let finalNumber = generateRandomNumber();
console.log("Final Number:", finalNumber);


    let input = inputSec.value;
    console.log(input); // Log the input value
    matchNumber(finalNumber, input); // Call matchNumber function with the finalNumber and input
    // Storing the generated random number

}

// Adding event listener to the form
mainForm.addEventListener("submit", inputTaker);





// Function to match the input with the generated random number
function matchNumber(finalNumber, input) {
    if (finalNumber === parseInt(input)) { // Parse input to ensure it's treated as a number
        pr1.textContent = `You have won ${numWin++} times `;
    } else {
        pr2.textContent = `You have lost ${numLost++} times`;
        pr3.textContent=`The random Number was ${finalNumber}`
    }
}


// this code is finished
