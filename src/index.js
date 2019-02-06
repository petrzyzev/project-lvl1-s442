import readlineSync from 'readline-sync';

const sayHello = () => {
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}`);
  return name;
};

const mapGame = () => {
  console.log('Answer "yes" if number even otherwise answer "no"');
  const name = sayHello();
  let questionNumber;
  let answer;
  const rounds = 3;
  for (let i = 0; i < rounds; i += 1) {
    questionNumber = Math.floor(Math.random() * 100);
    answer = readlineSync
      .question(`Question: ${questionNumber}\nYour answer:`);
    if (answer === 'yes') {
      if (questionNumber % 2 !== 0) {
        console.log(`'yes' is wrong answer ((.Correct answer was 'no'\nLet's try again, ${name}`);
        return;
      }
      console.log('Correct!');
    } else if (answer === 'no') {
      if (questionNumber % 2 === 0) {
        console.log(`'no' is wrong answer ((.Correct answer was 'yes'\nLet's try again, ${name}`);
        return;
      }
      console.log('Correct!');
    } else {
      console.log('Incorrect input. Try again');
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export { sayHello, mapGame };
