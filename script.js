'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this b/c if we have 1000 object it will create 1000 function it will create serious issue for the performance instead we will use prototypal inheritance
  this.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
};

const jonas = new Person('Jonas', '1991 ');
console.log(jonas);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return  {}

const matilda = new Person('matilda', 2017);
const jack = new Person('Jack', 2017);
console.log(matilda, jack);

// Never crete a method inside of a constructor fun.
