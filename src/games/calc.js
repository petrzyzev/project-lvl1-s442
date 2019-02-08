import startGame from '..';
import generateNum from '../utils';

const operators = ['+', '-', '*'];
const description = 'What is the result of the expression?';
const findOperationResult = (number) => {
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
  const firstNum = generateNum(10);
  const secondNum = generateNum(10);
  const operator = operators[generateNum(3)];
  const question = `${firstNum} ${operator} ${secondNum}`;
  const trueAnswer = findOperationResult([firstNum, operator, secondNum]);
  return [question, trueAnswer];
};

export default () => {
  startGame(description, query);
};
