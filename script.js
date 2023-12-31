'use strict';

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // Never do this b/c if we have 1000 object it will create 1000 function it will create serious issue for the performance instead we will use prototypal inheritance
//   // this.calcAge = function () {
//   //   console.log(2037 - this.birthYear);
//   // };
// };

// Person.hey = function () {
//   console.log('Hey there');
//   console.log(this);
// };
// Person.hey();
// const jonas = new Person('Jonas', '1991 ');
// console.log(jonas);

// // 1. New {} is created
// // 2. function is called, this = {}
// // 3. {} linked to prototype
// // 4. function automatically return  {}

// const matilda = new Person('matilda', 2017);
// const jack = new Person('Jack', 2017);
// // console.log(matilda, jack);

// // console.log(matilda instanceof Person);

// // Never crete a method inside of a constructor fun.

// // Prototypes
// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// matilda.calcAge();
// jonas.calcAge();

// console.log(jonas);

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(matilda));
// console.log(Person.prototype.isPrototypeOf(Person));

// // .prototypeOfLinkedObjects

// Person.prototype.species = 'Home Species';
// console.log(jonas, matilda);
// console.log(jonas.species, matilda.species);

// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species'));

// console.log(jonas.__proto__);
// // Object.prototype ( top of prototype chain )
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__);

// // constructor property will point back at person
// // console.log(Person.prototype.constructor);
// console.dir(Person.prototype.constructor);

// const arr = [1, 21, 1, 21, 321, 3, 4]; // new Array === []

// // this array doesn't have any method but it will herit these method from prototype

// // Array here is prototype
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// // ES6 classes
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Methods will be added to .prototype property or instance method
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }

//   // Static Method
//   static hey() {
//     console.log('Hey there');
//     console.log(this);
//   }

//   // Set a property that already exists
//   set fullName(name) {
//     console.log(name, 'name');
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }
//   get fullName() {
//     return this._fullName;
//   }
// }

// const jessica = new PersonCl('Jessica Davis', 1996);
// console.log(jessica);

// jessica.calcAge();
// console.log(jessica.age);
// console.log(jessica.__proto__ === PersonCl.prototype);

// // PersonCl.prototype.greet = function () {
// //   console.log(`Hey ${this.firstName}`);
// // };
// jessica.greet();
// const walter = new PersonCl('Walter White', 1965);

// PersonCl.hey();
// // 1. Classes are NOT hoisted
// // 2. Classes are first-class citizens
// // 3. Classes are executed in strict mode

// // Setters and Getters
// const account = {
//   owner: 'jonas',
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     return this.movements.push(mov);
//   },
// };
// account.latest = 200;
// console.log(account.movements);

// // Object.create
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();

// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979);
// sarah.calcAge();

// Inheritance Between Classes Constructor Functions
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   // Person.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   // this.firstName = firstName;
//   // this.birthYear = birthYear;
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// // Linking prototypes it inherit
// Student.prototype = Object.create(Person.prototype);

// // Wrong wat todo it. it doesnt inherit
// // Student.prototype = Person.prototype;

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student('Mike', 2020, 'Computer Science');
// console.log(mike);
// mike.introduce();
// mike.calcAge();

// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);

// console.log(mike instanceof Student);
// console.log(mike instanceof Person);
// console.log(mike instanceof Object);

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

// Inheritance between classes: ES6 Classes

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Methods will be added to .prototype property or instance method
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }

//   // Static Method
//   static hey() {
//     console.log('Hey there');
//     console.log(this);
//   }

//   // Set a property that already exists
//   set fullName(name) {
//     console.log(name, 'name');
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }
//   get fullName() {
//     return this._fullName;
//   }
// }

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }
// }
// const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');

// martha.introduce();
// martha.calcAge();

// Inheritance between classes: Object.create

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);

// const studentProto = Object.create(PersonProto);
// studentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// studentProto.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
//   //   introduce() {
//   //     console.log(`My name is ${this.fullName} and I study ${this.course}`);
// };

// // console.log(studentProto);
// // console.dir(studentProto);
// const jay = Object.create(studentProto);
// jay.init('Jay', 2010, 'Computer Science');
// jay.introduce();
// jay.calcAge();

// 01) Public fields
// 02) Private fields
// 03) Public methods
// 04) Private methods

class Account {
  // 1) Public fields (instances)
  locale = navigator.language;

  // 2) Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected property
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;
  }

  // 3) Public methods

  // These method are interfaces of the Objectn  also call this api or Public interface
  getMovement() {
    return this.#movements;
  }
  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }
  _approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
      return this;
    }
  }

  // 4) Private methods
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'Eur', 1111);

// acc1._movements.push(250);
// acc1._movements.push(-50);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
// acc1.approveLoan(1000);
console.log(acc1);
// console.log(acc1.getMovement());

// console.log(acc1.#movements);
// console.log(acc1.#pin);

// Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovement());
