import startGame from '..';
import generateNum from '../utils';

const commonDivisor = (num, divider) => num % divider === 0;
const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const isPrime = (num) => {
  const dividers = [];
  for (let i = 1; i <= num; i += 1) {
    if (commonDivisor(num, i)) {
      dividers.push(i);
    }
  }
  return dividers.length > 2 ? 'no' : 'yes';
};
const query = () => {
  const num = generateNum(100);
  const question = `${num}`;
  const trueAnswer = isPrime(num);
  return [question, trueAnswer];
};

export default () => {
  startGame(description, query);
};
