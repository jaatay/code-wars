function high(sentence){
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let words = sentence.replace('  ', ' ').split(' ');
if (sentence === '') {
  return 0;
}

if(words[0] === '') {
  words[0] = '0'
}
let letters = words.map(x => x.split(''));

let finalScore = []
let reduceThis = (acc, cur) => acc + cur;

for (let i = 0; i < letters.length; i++){
  let score = [];
  for (let j = 0; j < letters[i].length; j++) {
    
    score.push(alphabet.indexOf(letters[i][j])+ 1);
    if(alphabet.indexOf(letters[i][j]) === ''){
      score.push(0)}
    }
    let newScore = score.reduce(reduceThis);
    finalScore.push(newScore);
    }

  let findThis = finalScore.indexOf(Math.max(...finalScore));
  return  words[findThis];
}
  
  
console.log(high('man i need a taxi up to ubud'));
console.log(high('what time are we climbing up the volcano')); 
console.log(high('ake me to semynak')); 
console.log(high(''))