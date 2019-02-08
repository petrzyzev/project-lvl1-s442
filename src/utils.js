export default (highBorder, lowBorder = 0) => Math.floor(Math.random()
* (highBorder - lowBorder)) + lowBorder;
