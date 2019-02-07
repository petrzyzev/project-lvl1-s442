import startGame from '..';

const commonDivisor = (first, second, divider) => first % divider === 0 && second % divider === 0;
const description = 'Find the greatest common divisor of given numbers';
const dividers = [];
const trueAnswer = (first, second) => {
  const maxDivider = first > second ? second : first;
  for (let i = 1; i <= maxDivider; i += 1) {
    if (commonDivisor(first, second, i)) {
      dividers.push(i);
    }
  }
  return dividers[dividers.length - 1].toString();
};
const query = () => {
  const first = Math.floor(Math.random() * 50);
  const second = Math.floor(Math.random() * 50);
  const question = `${first} ${second}`;
  const truth = trueAnswer(first, second);
  return [question, truth];
};

export default () => {
  startGame(description, query);
};
