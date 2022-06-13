'use strict';
// console.log('We are connected');

// Learn how to write some object literals 
// objects can contain any value type

// define the object
const Jordan = {
     // define the properties and methods of this object

    //assign value to a variable
    //properties
    name : "Jordan",
    age: 67,
    hobbbies:['game(COD:WZ)',"Swimming","Programming","Singssss"],
    // methods are functions INSIDE an object
    // assign a function to a variable
    talk: function(){
        alert('Hello my name is Jordan and I am talking to the class about object literals')
    },
    sing: function(){
        console.log(Jordan.age)
        console.log('I am singing 4 The Kidz');
    },

}

// use these objects

// we access the properties of an object with dot notation
// object.property

// we write the name of the object, after that we write a dot and after the dot the particular property
function singForTheKidz(PersonObject){

let person = PersonObject;
person.sing()

}

singForTheKidz(Jordan)

// objects are mutable
// how would we do that:
// dot notation 
let newHobby = Jordan.hobbbies;
// newHobby = "Learning"
console.log(newHobby)

// 'this' is a keyword
// when we use this keyword we are referencing the object 

// Lets work with the DOM

// What is it???

// Document Object Model is..... Document is representation of the HTML file 
// We can use to interact with our HTML
// The DOM is the remote to CHANGE the elements of our HTML page.
let mainContainer = document.getElementById('main'); // this is our div

// we need an article element created in JS
// createElement 
let articleTag = document.createElement('article'); // <article></article>


mainContainer.append(articleTag); // article is now inside of the div

let studentName = document.createElement('h2'); // this creates an h2 element
studentName.innerHTML = `${Jordan.name}`; //Adding text to the name 

articleTag.append(studentName); // attches h2 inside article tag!

//p inside article element
let pElement = document.createElement('p'); // create p element

// put text inside p element
pElement.innerText = 'My Hobbies Include';

// console.log(pElement);

// attach p element to article tag

articleTag.append(pElement); // attaches e element to article


let ul = document.createElement('ul'); // creates ul tag

let li = document.createElement('li'); // creates li tag

 
li.textContent = `${Jordan.hobbbies[0]}`; // returns COD

ul.append(li); // attachs list element to unordered list

articleTag.append(ul); //attachs ul to article































