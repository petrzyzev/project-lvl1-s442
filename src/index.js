import readlineSync from 'readline-sync';

const rounds = 3;
const askPlayerName = () => {
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}`);
  return name;
};
const askQuestion = question => readlineSync.question(`Question: ${question}\nYour answer:`);

export default (description, query) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const name = askPlayerName();
  for (let i = 0; i < rounds; i += 1) {
    const [question, trueAnswer] = query();
    const answer = askQuestion(question);
    if (answer !== trueAnswer) {
      console.log(`${answer} is wrong answer ((. Correct answer is ${trueAnswer}. Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
