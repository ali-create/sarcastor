let word = prompt("Sentence?");
let promptAnswer = prompt("Chance? (only an number)");
let chance = Math.trunc(Math.random() * promptAnswer);
let output;
let letter;
let upperCaseLetter = "";
let numberOfLetter = 1;
for (let i = 0; i < word.length + 1; i++) {
  console.log(chance);
  letter = word.charAt(numberOfLetter);
  chance = Math.trunc(Math.random() * promptAnswer);
  numberOfLetter++;
  if (chance == 1) {
    upperCaseLetter = letter.toUpperCase();
    word = word.replace(letter, upperCaseLetter);
    letter = word.charAt(numberOfLetter);
  }
}
alert(word);
