// Object–
// An Object is a unique entity that contains property and methods.
// real world eg car

//Defining with Object Literal
const obj = {
  first_name: "Mukul",
  last_name: "Latiyan",

  //method
  getFunction: function () {
    return `The name of the person is ${this.first_name} ${this.last_name}`;
  },

  //object within object
  phone_number: {
    mobile: "12345",
    landline: "6789",
  },
};

// creating new instance of class person

const me = Object.create(obj);

me.first_name = "kiran";
me.last_name = "M P";

// console.log(me.getFunction());
// console.log(obj.phone_number.landline);

// class
//  Classes are blueprint of an Object.
//  A class can have many Object, because
//  class is a template while Object are instances of the class

// here is no classes in JavaScript we have only Object.
// To be more precise, JavaScript is a prototype based object
// oriented language, which means it doesn’t have classes
// rather it define behaviors using constructor function
// and then reuse it using the prototype.

// Defining class using es6
class Vehicle {
  constructor(name, maker, engine) {
    this.name = name;
    this.maker = maker;
    this.engine = engine;
  }
  getDetails() {
    return `The name of the bike is ${this.name}.`;
  }
}
// Making object with the help of the constructor
let bike1 = new Vehicle("Hayabusa", "Suzuki", "1340cc");
let bike2 = new Vehicle("Ninja", "Kawasaki", "998cc");

// console.log(bike1.name); // Hayabusa
// console.log(bike2.maker); // Kawasaki
// console.log(bike1.getDetails());

// Encapsulation –
// The process of wrapping property and function within
// a single unit is known as encapsulation.

class person {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
  add_Address(add) {
    this.add = add;
  }
  getDetails() {
    console.log(`Name is ${this.name},Address is: ${this.add}`);
  }
}

let person1 = new person("Mukul", 21);
person1.add_Address("Delhi");
person1.getDetails();

// Inheritance –
// It is a concept in which some property and methods of an Object
// is being used by another Object. Unlike most of the OOP languages
// where classes inherit classes, JavaScript Object inherits Object

//Inheritance example
class person {
  constructor(name) {
    this.name = name;
  }
  //method to return the string
  toString() {
    return `Name of person: ${this.name}`;
  }
}
class student extends person {
  constructor(name, id) {
    //super keyword to for calling above class constructor
    super(name);
    this.id = id;
  }
  toString() {
    return `${super.toString()},Student ID: ${this.id}`;
  }
}
let student1 = new student("Mukul", 22);
console.log(student1.toString());

// class
// object
// encapsulation
// abstraction
// inheritance
// polymorphism
