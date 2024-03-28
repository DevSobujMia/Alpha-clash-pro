function hideElementById(elementId){
   const element = document.getElementById(elementId);
   element.classList.add('hidden');
};

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
};


// Random number genaretor function

function getARandomAlphabet(){
    // get or create an alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // console.log(alphabets);
    
    // get a random index between 0 - 25
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    // console.log(index, alphabet);
    return alphabet;

}

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

// function for score and life
function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}

// capture keyboard key press
function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;
    //console.log('player pressed', playerPressed);

    // stop the game if player pressed 'Esc'
    if(playerPressed === 'Escape'){
        gameOver();
    }

    // player pressed the expected key
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    //console.log(playerPressed, expectedAlphabet);

    // check , Right or Wrong key pressed
    if(playerPressed === expectedAlphabet){
        console.log('you got a point!');

        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);

        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    } else{
        console.log('You lost a Life');
        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        if(updatedLife === 0){
            gameOver();
        }
    }

}

document.addEventListener('keyup', handleKeyboardKeyUpEvent);


function continueGame(){
    // generate a random alphabet
    const alphabet = getARandomAlphabet();
    //console.log('Your Random Alphabet:', alphabet);

    // set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    
    // set background color
    setBackgroundColorById(alphabet);
}


// Call or use common functions for result
function play(){
    // hide everything, show only the playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    // reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score', lastScore);

    const currentAlphabet = getElementTextById('current-alphabet');
    // console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);
}