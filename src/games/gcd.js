import startGame from '..';
import generateNum from '../utils';

const commonDivisor = (first, second, divider) => first % divider === 0 && second % divider === 0;
const description = 'Find the greatest common divisor of given numbers';
const dividers = [];
const fidingCommonDivider = (first, second) => {
  const maxDivider = first > second ? second : first;
  for (let i = 1; i <= maxDivider; i += 1) {
    if (commonDivisor(first, second, i)) {
      dividers.push(i);
    }
  }
  return dividers[dividers.length - 1];
};
const query = () => {
  const first = generateNum(50);
  const second = generateNum(50);
  const question = `${first} ${second}`;
  const divider = fidingCommonDivider(first, second).toString();
  return [question, divider];
};

export default () => {
  startGame(description, query);
};
