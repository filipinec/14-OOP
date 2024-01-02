'use strict';

//  Construction Function and the new Operator

// 1. New {} is created
// 2. Function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const Person = function (firstName, birthYear) {
  // Instance Property
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Create Method - NEVER DO THIS
  this.calcAge = function () {
    console.log(2024 - this.birthYear);
  };
};
const filip = new Person('Filip', 1995);
console.log(filip); // Result: Person {firstName: 'Filip', birthYear: 1995}
const gabriela = new Person('Gabriela', 1999);
console.log(gabriela); // Result: Person {firstName: 'Gabriela', birthYear: 1999}
const benito = new Person('Benito', 1962);
console.log(benito); // Result: Person {firstName: 'Benito', birthYear: 1962}

// Check if same object is instance of Person
console.log(filip instanceof Person); // Result: True

///////////////////////////////////////////

// Prototypes

// Prototypes - Correct way of write Methods
Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};
filip.calcAge(); // Result: 29
gabriela.calcAge(); // Result: 25
benito.calcAge(); // Result: 62

//Check if same Method is instance of Person
console.log(Person.prototype.isPrototypeOf(filip)); // Result: True
console.log(filip.__proto__ === Person.prototype); // Is the same

// Also can use property with prototypes
Person.prototype.placeOfBird = 'Republic of Macedonia';
console.log(filip.placeOfBird); // Result:Republic of Macedonia
console.log(gabriela.placeOfBird); // Result:Republic of Macedonia

// Checking
console.log(filip.hasOwnProperty('firstName')); // Result: True
console.log(filip.hasOwnProperty('placeOfBird')); // Result: False
