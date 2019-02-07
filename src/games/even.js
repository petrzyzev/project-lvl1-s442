import startGame from '..';

const isEven = q => q % 2 === 0;
const description = 'Answer "yes" if number even otherwise answer "no"';
const trueAnswer = q => (isEven(q) ? 'yes' : 'no');
const query = () => {
  const question = Math.floor(Math.random() * 100);
  const truth = trueAnswer(question);
  return [question, truth];
};

export default () => {
  startGame(description, query);
};
