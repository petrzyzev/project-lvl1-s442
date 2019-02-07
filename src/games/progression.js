import startGame from '..';

const description = 'What number is missing in the progression?';
const progressLength = 10;


const query = () => {
  const firstNum = Math.floor(Math.random() * 50);
  const difference = Math.floor(Math.random() * 10);
  const progression = [];
  for (let i = 0; i < progressLength; i += 1) {
    progression.push(firstNum + difference * i);
  }
  const secretNum = Math.floor(Math.random() * (progressLength - 1));
  const truth = progression[secretNum].toString();
  progression[secretNum] = '..';
  const question = progression.join(' ');
  return [question, truth];
};

export default () => {
  startGame(description, query);
};
