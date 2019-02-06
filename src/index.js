import readlineSync from 'readline-sync';


const rounds = 3;
const ans = question => readlineSync.question(`Question: ${question}\nYour answer:`);
const player = () => {
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}`);
  return name;
};


export default (rules, ques, trueAns, predicate) => {
  console.log(rules);
  const name = player();
  if (!ques) {
    return;
  }
  for (let i = 0; i < rounds; i += 1) {
    const question = ques();
    const answer = ans(question);
    const truth = trueAns(question);
    if (predicate(answer)) {
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
