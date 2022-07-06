const peopleArray = [];


// JavaScript classes are used when I want to make a bunch of instances of the same type of object

// syntax
class Person {
    // properties
    constructor(firstName, lastName, age, placeOfBirth){
      this.firstName = firstName;
      this.secondName = lastName;
      this.yearsOld = age;
      this.birthplace = placeOfBirth;
      peopleArray.push(this);
    }
    // methods
    sayHello(){
      return(console.log(`Hello World! My name is ${this.firstName || this.lastName}, it is so lovely to meet you! `))
    }

    sayBye(){
        return(console.log(`Goodbye World! My name is ${this.firstName}, it was so lovely to meet you! `))
    } 
    

  
  }


// syntax for extending a class
  class Student extends Person {
    constructor(firstName, lastName, age, placeOfBirth,classRoom,grade){
        super(firstName, lastName, age, placeOfBirth);
        this.classRoom = classRoom;
        this.grade = grade;

    }
  }

  class Doctor extends Person {
    constructor(lastName,field){
    super(lastName);
    this.field = field
    }
  }




  let studentOne = new Student('hilly','bocker',34,'Freedman Hospital','UN-123',99);
  let doc = new Doctor('Who','Pediatrician')
  doc.sayHello()

 studentOne.sayHello()










// object literal notation
let personOne = {
  firstName: "Richy",
  lastName: "Lou",
  age: 21,
  placeOfBirth: "The Med",
};

let personTwo = {
  firstName: "Vicky",
  lastName: "Lou",
  age: 11,
  placeOfBirth: "lebonheur",
};

let personThree = {
  firstName: "Alfred",
  lastName: "Seagram",
  age: 31,
  placeOfBirth: "Baptist Memorial",
};
// push all our 'literal' person objects to the array
peopleArray.push(personThree, personTwo, personOne);

// constructor functions are used when I want to make a bunch of instances of the same type of object

function PersonConst(firstName, lastName, age, placeOfBirth) {
  this.firstName = firstName;
  this.secondName = lastName;
  this.yearsOld = age;
  this.birthplace = placeOfBirth;
  peopleArray.push(this);
  this.makeperson = function(){

  }
}

let personFour = new PersonConst("Lindsey", "McGrady", 21, "Rock and Roll Town");
//______________________________________________________________________________//



let personFive = new Person('Hindi','Monsorrat',2054,'India');

personFive.sayHello();


console.log(peopleArray)
