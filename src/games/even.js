import startGame from '..';
import readlineSync from 'readline-sync';


const isEven = q => q % 2 === 0;
const asking = question => readlineSync.question(`Question: ${question}\nYour answer:`);
const description = 'Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no"';
const trueAnswer = q => (isEven(q) ? 'yes' : 'no');
const query = () => {
  const question = Math.floor(Math.random() * 100);
  const answer = asking(question);
  const truth = trueAnswer(question);
  return [answer, truth];
};
export default () => {
  startGame(description, query);
};
