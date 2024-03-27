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


function continueGame(){
    // generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('Your Random Alphabet:', alphabet);

    // set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
}


// use functions
function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}


//-------------- Another way ---------------

// function play(){
//     // step-1 : hide the home screen, add the hidden class on home section.
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     // show playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }