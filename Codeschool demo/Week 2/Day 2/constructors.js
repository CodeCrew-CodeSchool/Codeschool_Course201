// what are constructor functions 

// write some constructors
function Person(name,age){
    // constructors encapsulate all the data(properties) and functionality(methods) that an object needs to operate
    // the input that it can take are properties that needs to be passed in
    this.name = name;
    this.age = age;
    this.isLearning = true;
    this.singAlong = function(){
        return `${this.name } is singing along`
    }
}

let Tyler = new Person('Tyler',21);
let Zion = new Person('Zion',21);

let Storm = new Person('Storm',21);
let Lindsey = new Person('Lindsey',21);

console.log(Zion);
console.log(Zion.age) // expecting to see 21
Zion.age = 65; // change it
console.log(Zion.age)



// console.log(Zion)
console.log(Tyler)
console.log(Storm)
console.log(Lindsey)
Lindsey.isCodingTillTheSunComesUp = true;
// how can constructors make our js cde more efficient and more automated

let singlePerson = {
    name: "your_name_here",
    age : 20,
    "my-name-is-this-here":"",
    4:'07/25/2002',
    singAlong:function(){
        return `${this.name} is singing along`
    }
}
singlePerson["my-name-is-this-here"]
// to access properties and methods of an object we use dot-notation
// if the property is a number, we use bracket notation object[property]
// if the property is a hyphenated, we use bracket notation object[property]

































