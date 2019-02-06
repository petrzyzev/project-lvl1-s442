import startGame from '..';

const operators = ['+', '-', '*'];

export default () => {
  const rules = 'Welcome to the Brain Games!\nWhat is the result of the expression?';
  const ques = () => {
    const first = Math.floor(Math.random() * 10);
    const second = Math.floor(Math.random() * 10);
    const operator = operators[Math.floor(Math.random() * 3)];
    return `${first} ${operator} ${second}`;
  };
  const trueAns = (q) => {
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
  const predicate = () => false;
  startGame(rules, ques, trueAns, predicate);
};
