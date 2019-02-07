import startGame from '..';
import generateNum from '../utils';

const isEven = q => q % 2 === 0;
const description = 'Answer "yes" if number even otherwise answer "no"';
const trueAnswer = q => (isEven(q) ? 'yes' : 'no');
const query = () => {
  const question = generateNum(100);
  const truth = trueAnswer(question);
  return [question, truth];
};

export default () => {
  startGame(description, query);
};
