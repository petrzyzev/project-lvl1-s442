import startGame from '..';

export default () => {
  const isEven = q => q % 2 === 0;
  const rules = 'Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no"';
  const ques = () => Math.floor(Math.random() * 100);
  const trueAns = q => (isEven(q) ? 'yes' : 'no');
  const predicate = a => a !== 'yes' && a !== 'no';
  startGame(rules, ques, trueAns, predicate);
};
