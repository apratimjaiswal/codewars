/**
Morse code decoder.

The Morse code table is preloaded for you as a dictionary, feel free to use it:
Coffeescript/C++/Go/JavaScript/Julia/PHP/Python/Ruby/TypeScript: 

MORSE_CODE['.--']
 */
function MORSE_CODE(char) {
  return "a";
}

function decodeMorse(morse) {
  let words = morse.trim().split("   ");
  // ".... . -.--", ".--- ..- -.. ."
  let decodedStr = "";

  for (let word of words) {
    let characters = word.split(" ");

    decodedWord = word.split(" ").map(MORSE_CODE).join("");
    console.log("Check this: ", word.split(" ").map(MORSE_CODE).join(""));
    // "....", ".", "-.--"

    // let decodedWord = "";
    // for (let character of characters) {
    //   decodedWord = `${decodedWord}${MORSE_CODE(character)}`;
    // }
    decodedStr = `${decodedStr} ${decodedWord}`;
  }

  console.log(`The decoded morse code is: ${decodedStr.trim()}`);
  return morse;
}

let morseCode = ".... . -.--   .--- ..- -.. .";
decodeMorse(morseCode);
