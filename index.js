const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = titleCased.map((tutorials) => {
//   return tutorials[0].toUpperCase() + tutorials.substring(1);
// });
const titleCased = () => {
  return tutorials.map((words) => {
    const word = words.split(' ');
    const captializedWord = word.map((letter) => { 
      console.log(letter[0].toUpperCase() + letter.substring(1));
      return letter[0].toUpperCase() + letter.substring(1);
    })
  return captializedWord.join(' ')})}

console.log(titleCased);
// tutorials.map(word)