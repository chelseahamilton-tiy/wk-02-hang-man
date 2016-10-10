
//this was taken from here: http://stackoverflow.com/questions/1431094/how-do-i-replace-a-character-at-a-particular-index-in-javascript
//it allows us to replace a character within a string
String.prototype.replaceAt = function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}

//loop through the list of common words in reverse
for(var i = commonWords.length - 1; i >= 0; i--) {
    //see if the word is less than three characters
    if(commonWords[i].length < 3) {
        //remove that word
        commonWords.splice(i, 1);
    }
}

//choose a random word
var randomWord = commonWords[Math.floor(Math.random()*commonWords.length)];

//write to console so we know what it is (for testing)
console.log(randomWord);

var mysteryWord = '';
//go through each letter in the random word
for(var i = 0; i < randomWord.length; i++) {
    //create a underline for each one
    mysteryWord = mysteryWord + '_';
}

//start with 5 turns
var turns = 5;

function guess() {
    //ask them for a letter
    var guess = prompt('Guess a letter (a-z). You have ' + turns + ' turns left and the word is: ' + mysteryWord);

    //go through each character in the word
    for(var i = 0; i < randomWord.length; i++) {
        //see if their guess is in that word
        if(randomWord[i] === guess) {
            //update the mystery word (the underlined one) with the characters they guessed
            mysteryWord = mysteryWord.replaceAt(i, guess);
        }
    }
    //update the number of turns they have left
    turns--;
}

//let them guess for every turn
for(var i = turns - 1; i >= 0; i--) {
    if(mysteryWord === randomWord) {
        alert('You won!');
        break;
    }
    else {
        guess();
    }
}

if(mysteryWord !== randomWord) {
    alert('You lost!');
}
