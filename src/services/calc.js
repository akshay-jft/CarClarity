const { evaluateInfix } = require('calculator-lib');
const evaluate = (expression) =>{
  const filteredExpression = expression.replace(/x/g, "*");
  return evaluateInfix(filteredExpression);
}

export default evaluate;