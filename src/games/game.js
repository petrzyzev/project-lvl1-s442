import readlineSync from 'readline-sync';

const description = 'Welcome to the Brain Games!';
const player = () => {
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}`);
  return name;
};

export default () => {
  console.log(description);
  player();
};
