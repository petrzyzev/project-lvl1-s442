import startGame from '..';
import generateNum from '../utils';

const description = 'Find the greatest common divisor of given numbers';
const dividers = [];
const findCommonDivider = (firstNum, secondNum) => {
  const commonDivisor = (first, second, divider) => first % divider === 0 && second % divider === 0;
  const maxDivider = firstNum > secondNum ? secondNum : firstNum;
  for (let i = 1; i <= maxDivider; i += 1) {
    if (commonDivisor(firstNum, secondNum, i)) {
      dividers.push(i);
    }
  }
  return dividers[dividers.length - 1];
};
const query = () => {
  const firstNum = generateNum(50);
  const secondNum = generateNum(50);
  const question = `${firstNum} ${secondNum}`;
  const divider = findCommonDivider(firstNum, secondNum).toString();
  return [question, divider];
};

export default () => {
  startGame(description, query);
};
