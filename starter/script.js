'use strict';
const Person = function (firstName, birthYear) {
  this.myName = firstName;
  this.yearOfBirth = birthYear;
};
const filip = new Person('Filip', 1995);
console.log(filip);

// 1. New {} is created
// 2. Function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}
