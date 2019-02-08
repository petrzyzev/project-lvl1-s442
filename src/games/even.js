import startGame from '..';
import generateNum from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no"';
const query = () => {
  const isEven = q => q % 2 === 0;
  const question = generateNum(100);
  const trueAnswer = isEven(question) ? 'yes' : 'no';
  return [question, trueAnswer];
};

export default () => {
  startGame(description, query);
};
