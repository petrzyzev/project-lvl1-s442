import startGame from '..';
import generateNum from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const isPrime = (num) => {
  const minimalSimpleNum = 2;
  const isNoDivisionReminder = (numerator, divider) => numerator % divider === 0;
  for (let i = minimalSimpleNum; i < num; i += 1) {
    if (isNoDivisionReminder(num, i)) {
      return false;
    }
  }
  return num >= minimalSimpleNum;
};
const query = () => {
  const num = generateNum(20, -10);
  const question = `${num}`;
  const trueAnswer = isPrime(num) ? 'yes' : 'no';
  return [question, trueAnswer];
};

export default () => {
  startGame(description, query);
};
