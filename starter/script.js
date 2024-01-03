'use strict';

//  Construction Function and the new Operator

// 1. New {} is created
// 2. Function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

// const Person = function (firstName, birthYear) {
//   // Instance Property
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // Create Method - NEVER DO THIS
//   this.calcAge = function () {
//     console.log(2024 - this.birthYear);
//   };
// };
// const filip = new Person('Filip', 1995);
// console.log(filip); // Result: Person {firstName: 'Filip', birthYear: 1995}
// const gabriela = new Person('Gabriela', 1999);
// console.log(gabriela); // Result: Person {firstName: 'Gabriela', birthYear: 1999}
// const benito = new Person('Benito', 1962);
// console.log(benito); // Result: Person {firstName: 'Benito', birthYear: 1962}

// // Check if same object is instance of Person
// console.log(filip instanceof Person); // Result: True

// ///////////////////////////////////////////

// // Prototypes

// // Prototypes - Correct way of write Methods
// Person.prototype.calcAge = function () {
//   console.log(2024 - this.birthYear);
// };
// filip.calcAge(); // Result: 29
// gabriela.calcAge(); // Result: 25
// benito.calcAge(); // Result: 62

// //Check if same Method is instance of Person
// console.log(Person.prototype.isPrototypeOf(filip)); // Result: True
// console.log(filip.__proto__ === Person.prototype); // Is the same

// // Also can use property with prototypes
// Person.prototype.placeOfBird = 'Republic of Macedonia';
// console.log(filip.placeOfBird); // Result:Republic of Macedonia
// console.log(gabriela.placeOfBird); // Result:Republic of Macedonia

// // Checking
// console.log(filip.hasOwnProperty('firstName')); // Result: True
// console.log(filip.hasOwnProperty('placeOfBird')); // Result: False

// ////////////////////////////////////////

// // Coding Challenge #1

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };
// Car.prototype.accelerate = function () {
//   this.speed = this.speed + 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };
// Car.prototype.brake = function () {
//   this.speed = this.speed - 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);
// bmw.accelerate(); //Result: BMW is going at 130 km/h
// bmw.accelerate(); //Result: BMW is going at 140 km/h
// bmw.brake(); //Result: BMW is going at 135 km/h
// bmw.accelerate(); //Result: BMW is going at 145 km/h

// mercedes.accelerate(); //Result: Mercedes is going at 105 km/h
// mercedes.brake(); //Result: Mercedes is going at 100 km/h
// mercedes.brake(); //Result: Mercedes is going at 95 km/h

/////////////////////////////////////////////////////

// // ES6 Classes

// //class declaration
// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
//   calcAge() {
//     console.log(2024 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }
// }

// const filip = new PersonCl('Filip', 1995);
// console.log(filip); //Result: PersonCl {firstName: 'Filip', birthYear: 1995}
// filip.calcAge(); // Result: 29
// filip.greet(); //Result: Hey Filip

////////////////////////////////////////////////////

// // Setters and Getters

// const account = {
//   owner: 'jonas',
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },
//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// account.latest = 50;
// console.log(account.latest); //Result: 300
// console.log(account.movements);

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   calcAge() {
//     console.log(2024 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hey ${this._fullName}`);
//   }

//   //Set a property that arleady exists
//   get age() {
//     return 2024 - this.birthYear;
//   }
//   set fullName(name) {
//     if (name.includes(' ')) {
//       this._fullName = name;
//     } else {
//       alert(`${name} is not a full name`);
//     }
//   }

//   get username() {
//     return this.fullName;
//   }

//   // Static method
//   static hey() {
//     console.log('Hey there!');
//   }
// }

// const filip = new PersonCl('Filip Tasevski', 1995);
// const gabriela = new PersonCl('Gabriela', 1999);
// console.log(filip.age); // Result: 29
// console.log(filip); //Result: PersonCl {firstName: 'Filip Tasevski', birthYear: 1995}
// filip.calcAge(); // Result: 29
// filip.greet(); //Result: Hey Filip Tasevski
// PersonCl.hey(); // Result: Hey there!
// /////////////////////////////////////////////////////////////////////

// // Static Methods
// const Person = function (firstName, birthYear) {};

// // Create Static function
// Person.hey = function () {
//   console.log('Hey there!!');
// };

// //Calling Static function
// Person.hey();

///////////////////////////////////////

// // Object.create

// const PersonProto = {
//   calcAge() {
//     console.log(2024 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const gabriela = Object.create(PersonProto);
// console.log(gabriela);
// gabriela.init('gabriela', 1999);
// gabriela.calcAge(); // Result: 25

// const filip = Object.create(PersonProto);
// filip.init('filip', 1995);
// filip.calcAge();
// console.log(filip); // Result: 29

////////////////////////////////////////////

// ES6 Classes

// //class declaration
// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
//   calcAge() {
//     console.log(2024 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }
// }

// const filip = new PersonCl('Filip', 1995);
// console.log(filip); //Result: PersonCl {firstName: 'Filip', birthYear: 1995}
// filip.calcAge(); // Result: 29
// filip.greet(); //Result: Hey Filip

// // Coding Challenge #1

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };
// Car.prototype.accelerate = function () {
//   this.speed = this.speed + 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };
// Car.prototype.brake = function () {
//   this.speed = this.speed - 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);
// bmw.accelerate(); //Result: BMW is going at 130 km/h
// bmw.accelerate(); //Result: BMW is going at 140 km/h
// bmw.brake(); //Result: BMW is going at 135 km/h
// bmw.accelerate(); //Result: BMW is going at 145 km/h

// mercedes.accelerate(); //Result: Mercedes is going at 105 km/h
// mercedes.brake(); //Result: Mercedes is going at 100 km/h
// mercedes.brake(); //Result: Mercedes is going at 95 km/h

class CarCl {
  constuctor(make, speed) {
    this.make = make;
    this.speed = speed;
  }}
  accelerate() {
    this.speed = this.speed + 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
  brake() {
    this.speed = this.speed - 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
  get speedUS() {
    return this.speed / 1.6;
  }
}
const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
