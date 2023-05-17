/*
in this example, i have created a functional calculator using the Factory pattern and the functional paradigm of 
higher-order functions. The calculator has add and multiply methods that emit "result" events 
when the corresponding operation is performed. i have used the Observer pattern (EventEmitter) to attach an observer 
to the "result" event and display the result in the console. Additionally, i have used the binaryOperator 
function as a higher-order function to create addition and multiplication operators, and then used them in 
the createCalculator function to create calculators specific to each operation.
*/


// Functional Paradigm - Higher-Order Functions
function binaryOperator(func) {
  return function (a, b) {
    return func(a, b);
  };
}

function addition(a, b) {
  return a + b;
}

function multiplication(a, b) {
  return a * b;
}

// Factory Pattern
function createCalculator(operation) {
  return function (a, b) {
    return operation(a, b);
  };
}

// Observer Pattern (EventEmitter)
const EventEmitter = require("events");

class Calculator extends EventEmitter {
  add(a, b) {
    const result = a + b;
    this.emit("result", result);
  }

  multiply(a, b) {
    const result = a * b;
    this.emit("result", result);
  }
}

// Create an instance of the calculator
const calculator = new Calculator();

// Attach observers to the "result" event
calculator.on("result", (result) => {
  console.log("The result is:", result);
});

// Use the calculator functionally
const additionOperator = binaryOperator(addition);
const multiplicationOperator = binaryOperator(multiplication);

const calculateAddition = createCalculator(additionOperator);
const calculateMultiplication = createCalculator(multiplicationOperator);

console.log(calculateAddition(5, 3)); // Output: The result is: 8
console.log(calculateMultiplication(4, 2)); // Output: The result is: 8
