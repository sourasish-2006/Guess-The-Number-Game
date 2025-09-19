// Game setup
const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

// Get elements from the HTML
const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const message = document.getElementById('message');
const guessCount = document.getElementById('guessCount');

// Listen for button click
guessButton.addEventListener('click', function() {
    const userGuess = parseInt(guessInput.value);
    
    // Validate input
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = '⚠️ Please enter a number between 1 and 100.';
        message.style.color = 'orange';
        return;
    }
    
    attempts++;
    guessCount.textContent = `Guesses: ${attempts}`;
    
    if (userGuess > secretNumber) {
        message.textContent = '⬇️ Too high! Try a lower number.';
        message.style.color = '#e74c3c'; // Red
    } else if (userGuess < secretNumber) {
        message.textContent = '⬆️ Too low! Try a higher number.';
        message.style.color = '#3498db'; // Blue
    } else {
        message.textContent = `🎉 You got it! The number was ${secretNumber}!`;
        message.style.color = '#2ecc71'; // Green
        guessButton.disabled = true; // Disable button after winning
        guessInput.disabled = true;
    }
    
    guessInput.value = ''; // Clear the input box
    guessInput.focus(); // Focus back on the input box
});
