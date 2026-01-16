console.log("Script Running");

console.log("Script Running");

// Step 1: Create a helper function that moves a penguin across the grid
// The function accepts a penguin element and a column position. 
// It only allows movement while the column position is less than or equal to 6.
function movePenguin(penguin, position) {
  if (position <= 6) {
    penguin.style.gridColumn = position;  // Update the penguin's position on the grid
  }
}

// Step 2: Create position variables for each penguin and set them all to 1 (the starting column)
let tuxPosition = 1;
let daisyPosition = 1;
let rockyPosition = 1;

// Step 3: Query selectors for all buttons and penguins
const tux = document.querySelector("#tux");
const daisy = document.querySelector("#daisy");
const rocky = document.querySelector("#rocky");

const tuxButton = document.querySelector("#tuxButton");
const daisyButton = document.querySelector("#daisyButton");
const rockyButton = document.querySelector("#rockyButton");

const resultMessage = document.querySelector("#result");

// Step 4: Function to move Tux forward
function moveTux() {
  if (tuxPosition <= 6) {
    tuxPosition++;  // Increase Tux's position
    movePenguin(tux, tuxPosition);  // Update Tux's position on the grid
    checkWinner("Tux");  // Check if Tux has won
  }
}

// Step 5: Function to move Daisy forward
function moveDaisy() {
  if (daisyPosition <= 6) {
    daisyPosition++;  // Increase Daisy's position
    movePenguin(daisy, daisyPosition);  // Update Daisy's position on the grid
    checkWinner("Daisy");  // Check if Daisy has won
  }
}

// Step 6: Function to move Rocky forward
function moveRocky() {
  if (rockyPosition <= 6) {
    rockyPosition++;  // Increase Rocky's position
    movePenguin(rocky, rockyPosition);  // Update Rocky's position on the grid
    checkWinner("Rocky");  // Check if Rocky has won
  }
}

// Step 7: Function to check if a penguin reached column 6
// If so, display the winner message and disable all buttons.
function checkWinner(winner) {
  if (tuxPosition === 6) {
    resultMessage.textContent = "Tux got the fish! 🐟";
    disableButtons();
  } else if (daisyPosition === 6) {
    resultMessage.textContent = "Daisy got the fish! 🐟";
    disableButtons();
  } else if (rockyPosition === 6) {
    resultMessage.textContent = "Rocky got the fish! 🐟";
    disableButtons();
  }
}

// Step 8: Function to disable all buttons when a winner is found
function disableButtons() {
  tuxButton.disabled = true;
  daisyButton.disabled = true;
  rockyButton.disabled = true;
}

// Step 9: Add event listeners for each button to trigger its movement function
tuxButton.addEventListener("click", moveTux);
daisyButton.addEventListener("click", moveDaisy);
rockyButton.addEventListener("click", moveRocky);
