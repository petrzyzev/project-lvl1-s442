import startGame from '..';

const operators = ['+', '-', '*'];
const description = 'What is the result of the expression?';
const trueAnswer = (q) => {
  const number = q.split(' ');
  switch (number[1]) {
    case '+':
      return (Number(number[0]) + Number(number[2])).toString();
    case '-':
      return (Number(number[0]) - Number(number[2])).toString();
    default:
      return (Number(number[0]) * Number(number[2])).toString();
  }
};
const query = () => {
  const first = Math.floor(Math.random() * 10);
  const second = Math.floor(Math.random() * 10);
  const operator = operators[Math.floor(Math.random() * 3)];
  const question = `${first} ${operator} ${second}`;
  const truth = trueAnswer(question);
  return [question, truth];
};

export default () => {
  startGame(description, query);
};
