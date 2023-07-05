'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this b/c if we have 1000 object it will create 1000 function it will create serious issue for the performance instead we will use prototypal inheritance
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const jonas = new Person('Jonas', '1991 ');
console.log(jonas);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return  {}

const matilda = new Person('matilda', 2017);
const jack = new Person('Jack', 2017);
// console.log(matilda, jack);

// console.log(matilda instanceof Person);

// Never crete a method inside of a constructor fun.

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

matilda.calcAge();
jonas.calcAge();

console.log(jonas);

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototypeOfLinkedObjects

Person.prototype.species = 'Home Species';
console.log(jonas, matilda);
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

console.log(jonas.__proto__);
// Object.prototype ( top of prototype chain )
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

// constructor property will point back at person
// console.log(Person.prototype.constructor);
console.dir(Person.prototype.constructor);

const arr = [1, 21, 1, 21, 321, 3, 4]; // new Array === []

// this array doesn't have any method but it will herit these method from prototype

// Array here is prototype
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());
