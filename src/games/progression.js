import startGame from '..';
import generateNum from '../utils';

const description = 'What number is missing in the progression?';
const progressLength = 10;

const query = () => {
  const firstNum = generateNum(50);
  const difference = generateNum(10);
  const progression = [];
  for (let i = 0; i < progressLength; i += 1) {
    progression.push(firstNum + difference * i);
  }
  const hiddenElementPosition = generateNum(progressLength - 1);
  const trueAnswer = progression[hiddenElementPosition].toString();
  progression[hiddenElementPosition] = '..';
  const question = progression.join(' ');
  return [question, trueAnswer];
};

export default () => {
  startGame(description, query);
};
