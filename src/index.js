import readlineSync from 'readline-sync';

const rounds = 3;
const player = () => {
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}`);
  return name;
};

export default (description, ques) => {
  console.log(description);
  const name = player();
  for (let i = 0; i < rounds; i += 1) {
    const [answer, truth] = ques();
    if (answer !== truth) {
      console.log(`${answer} is wrong answer ((. Correct answer is ${truth}. Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
