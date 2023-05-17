/* 
In this program, i utilize two design patterns:
Singleton Pattern: The Singleton object allows creating a single instance of a class. In this case, i create an instance 
of the Singleton object that is shared across all getInstance() calls, ensuring that only a single instance exists.

Factory Pattern: The VehicleFactory class acts as a factory to create instances of different vehicle types 
(Car and Motorcycle). Depending on the specified type, the corresponding vehicle is created.

Additionally, i use two programming paradigms:
Object-Oriented Paradigm: i define classes (Vehicle, Car, Motorcycle) that encapsulate related properties and methods. 
i create an instance of Car using the factory and invoke the drive() method.

Functional Paradigm: The calculateSum function performs a sum of two numbers and returns the result. 
i invoke the function passing the values 5 and 3, and display the result in the console.

This example demonstrates how design patterns and programming paradigms can be combined in a JavaScript program.
*/


// Singleton Pattern
const Singleton = (function () {
  let instance;

  function createInstance() {
    const object = new Object("Instance");
    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

// Factory Pattern
class Vehicle {
  constructor(name) {
    this.name = name;
  }

  drive() {
    console.log(`${this.name} is driving.`);
  }
}

class Car extends Vehicle {
  constructor(name) {
    super(name);
  }
}

class Motorcycle extends Vehicle {
  constructor(name) {
    super(name);
  }
}

function VehicleFactory() {}

VehicleFactory.prototype.createVehicle = function (type, name) {
  switch (type) {
    case "car":
      return new Car(name);
    case "motorcycle":
      return new Motorcycle(name);
    default:
      return null;
  }
};

// Object-Oriented Paradigm
const carFactory = new VehicleFactory();
const car = carFactory.createVehicle("car", "Toyota");
car.drive(); // Output: Toyota is driving.

// Functional Paradigm
function calculateSum(a, b) {
  return a + b;
}

const sum = calculateSum(5, 3);
console.log(sum); // Output: 8
