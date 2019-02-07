import startGame from '..';
import generateNum from '../utils';

const operators = ['+', '-', '*'];
const description = 'What is the result of the expression?';
const trueAnswer = (number) => {
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
  const first = generateNum(10);
  const second = generateNum(10);
  const operator = operators[generateNum(3)];
  const question = `${first} ${operator} ${second}`;
  const truth = trueAnswer([first, operator, second]);
  return [question, truth];
};

export default () => {
  startGame(description, query);
};
