let word = prompt("Sentence?");
let chance = Math.trunc(Math.random() * prompt("Chance? (only an number)"));
let output;
let letter;
let upperCaseLetter = "";
let numberOfLetter = 1;
for (let i = 0; i < word.length + 1; i++) {
  letter = word.charAt(numberOfLetter);
  chance = Math.trunc(Math.random() * 2);
  numberOfLetter++;
  if (chance == 1) {
    upperCaseLetter = letter.toUpperCase();
    word = word.replace(letter, upperCaseLetter);
    console.log([i]);
  }
}
alert(word);
