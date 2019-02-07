import readlineSync from 'readline-sync';

const rounds = 3;
const player = () => {
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}`);
  return name;
};
const asking = question => readlineSync.question(`Question: ${question}\nYour answer:`);

export default (description, query) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const name = player();
  for (let i = 0; i < rounds; i += 1) {
    const [question, truth] = query();
    const answer = asking(question);
    if (answer !== truth) {
      console.log(`${answer} is wrong answer ((. Correct answer is ${truth}. Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
