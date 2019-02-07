import startGame from '..';
import readlineSync from 'readline-sync';

const operators = ['+', '-', '*'];
const description = 'Welcome to the Brain Games!\nWhat is the result of the expression?';
const asking = question => readlineSync.question(`Question: ${question}\nYour answer:`);
const trueAnswer = (q) => {
  const number = q.split(' ');
  switch (number[1]) {
    case '+':
      return (Number(number[0]) + Number(number[2])).toString();
    case '-':
      return (Number(number[0]) - Number(number[2])).toString();
    default:
      return (Number(number[0]) * Number(number[2])).toString();
  }
};
const query = () => {
  const first = Math.floor(Math.random() * 10);
  const second = Math.floor(Math.random() * 10);
  const operator = operators[Math.floor(Math.random() * 3)];
  const question = `${first} ${operator} ${second}`;
  const answer = asking(question);
  const truth = trueAnswer(question);
  return [answer, truth];
};
export default () => {
  startGame(description, query);
};
