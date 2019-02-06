import readlineSync from 'readline-sync';

const player = () => {
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}`);
  return name;
};

const sayHello = () => {
  console.log('Welcome to the Brain Games!');
  player();
};

const rounds = 3;
const isEven = q => q % 2 === 0;

const mapGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no"');
  const name = player();
  for (let i = 0; i < rounds; i += 1) {
    const question = Math.floor(Math.random() * 100);
    const answer = readlineSync
      .question(`Question: ${question}\nYour answer:`);
    const truth = isEven(question) ? 'yes' : 'no';
    if (answer !== 'yes' && answer !== 'no') {
      console.log('Incorrect input. Try again');
      return;
    }
    if (answer !== truth) {
      console.log(`${answer} is wrong answer ((. Correct answer is ${truth}. Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export { sayHello, mapGame };
