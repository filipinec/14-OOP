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

// // Coding Chellenge #3

// // 1)
// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };
// // Link to prototypes
// EV.prototype = Object.create(Car.prototype);
// const tesla = new EV('Tesla', 120, 23);

// // 2).
// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// // 3).
// EV.prototype.accelerate = function () {
//   this.speed = this.speed + 20;
//   this.charge = this.charge - 1;
//   console.log(
//     `${this.make} is going at ${this.speed} km/h, with charge of ${this.charge}%`
//   );
// };
// console.log(tesla);
// tesla.accelerate();

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

// // Inheritance Between Classes: ES6 Classes
// class StudentCL extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     // Always needs to happen first!
//     super(fullName, birthYear);
//     this.course = course; // It's not necessary to write
//   }
//   introduce() {
//     console.log(`My name is ${this.firstName} and I study ${this.course}`);
//   }
//   // Оverwrites calcAge
//   calcAge() {
//     console.log(
//       `I'm ${2024 - this.birthYear} and study ${this.course} and I feel like ${
//         2024 - this.birthYear + 50
//       } `
//     );
//   }
// }

// const martha = new StudentCL('Martha Jones', 1995, 'Computer Science');
// martha.introduce();
// martha.calcAge();
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

// // Coding Chellenge #2

// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     this.speed = this.speed + 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }
//   brake() {
//     this.speed = this.speed - 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }
//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }
// const ford = new CarCl('Ford', 120);
// console.log(ford.speedUS);
// ford.accelerate(); // Result: Ford is going at 130 km/h
// ford.accelerate(); // Result: Ford is going at 140 km/h
// ford.brake(); // Result: Ford is going at 135 km/h
// ford.speedUS = 50;
// console.log(ford.speedUS);
// console.log(ford);

///////////////////////////////////////////////

// // Inheritance Between "Classses" : Construction function

// // 1 st class
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// // Person function
// Person.prototype.calcAge = function () {
//   console.log(2024 - this.birthYear);
// };

// // 2 st class - using Person class in student class
// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// // Linking prototypes Student to Person
// Student.prototype = Object.create(Person.prototype);
// // Linking prototypes Person to Student
// Person.prototype = Object.create(Student.prototype);

// // Student Function
// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const filip = new Person('Filip', 1995);
// const mike = new Student('Mike', 1999, 'Computer Science');
// mike.introduce();
// console.log(mike);
// console.log(filip);
// mike.calcAge();
// filip.introduce();

///////////////////////////////////////////////

// Another Class Example

// 1). Public fields
// 2). Private fields
// 3). Public methods
// 4). Private methods

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.locale = navigator.language;
    //Protected property
    this._movements = [];
    this._pin = pin;

    console.log(`Thanks for opening new account, Mr. ${owner}`);
  }

  // Public interface
  getMovements() {
    return this._movements;
  }

  deposit(val) {
    this._movements.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }
  // Intrernal function
  _approveLoan(val) {
    if (this._pin === 1111) {
      return true;
    }
  }
  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}
const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
