'use strict';
// This is the very beginning of the Odd Duck Products application. Review the provided code demo as an example.

// global varriables

// Showcase 2 images, side-by-side that tracks the number of times an image is clicked. After each click, 2 new images are generated.
// Creating many objects and pushing them into an array
// Keeping track of when each image is seen
// keeping track of when each image is clicked
// Randc


// this array is going to hold all of our product objects
let allProducts = [];

let maxClicks = 25;
let totalClicks = 0

// this array is going to hold all our product names
let productNames = ['bag', 'banana', 'bathroom', 'boots','chair','pen','pet-sweep','scissors'];

// Create a constructor function
// that creates an object associated with each product, and has the following properties:
function Product(name, path) {
    // Name of the product
    // File path of image
    // Times the image has been shown
    this.timesShown = 0;
    this.timesClicked = 0;
    this.name = name;
    this.path = path;
    allProducts.push(this);
}


// Create an algorithm that will randomly generate three unique product images
//  from the images directory and display them side-by-side-by-side in the browser window.

// an algorithm is a step by step list of instructions to be executed
function getRandomImage() {
    // gives me a whole number
    return Math.floor(Math.random() * productNames.length);
}


// get elements from html file
const imageContainer = document.getElementById('image-container');
const resultContainer = document.getElementById('results');
let img_one = document.querySelector('#image-container img:first-child')
let img_two = document.querySelector('#image-container img:nth-child(2)')
let resultsButton = document.getElementById('results-button')


// add event listeners
resultsButton.addEventListener('click',showResults) 

// instance variable -> Objects

let bag = new Product('bag', './assets/bag.jpg');
let banana = new Product('banana', './assets/banana.jpg');



function constructImages() {

    // let bag0 = new Product(productNames[0],'./assets' + productNames[0] + '.jpg' ) // how to get it out the array


    // call the random function to get a random index number;
    // store the return value
    let img1 = getRandomImage(); // returns a random index number not exceeding the length of the array
    let img2 = getRandomImage();// returns a random index number not exceeding the length of the array
    
    while(img1 === img2){
      // while these images are the same 
      // reassign the value of one of the to change it again
      // this while loop will run as long as these images are the same
      //  if theyre not the same then it will execute the code below
      img2 = getRandomImage()
    }
    // i want to make an image for every name in the productname array

   
    // add the src attribute to the images

    img_one.setAttribute('src', './assets/'+ productNames[img1] +'.jpg');
    img_two.setAttribute('src', './assets/'+ productNames[img2] +'.jpg');
    img_one.setAttribute('alt', img1);
    img_two.setAttribute('alt', img2);

    img_one.addEventListener('click', function () {
        trackClicks(bag)
    });

    img_two.addEventListener('click', function () { trackClicks(banana) });
    timesShown(bag)
    timesShown(banana)
    
    
}




// make a function to keep track of the times a certain obj was clicked
function trackClicks(product) {
    // need to pass an object to this function
    // IF the object is clicked  ->
    // check the timesClicked property against the max clicks
    if (product.timesClicked < 25) {
        // THEN increase the value of timesClicked by one per click
        product.timesClicked++
        totalClicks++
        console.log(product.timesClicked)
    }
    else {
        alert('too many clicks')
    }

}

// make a function that keeps track of how many times an image was shown
function timesShown(product) {
    // we need to pass an obj to this function
    // check if the image is here
    if (product.name === img_one.alt) {

        // IF the image is shown on the document ->
        // THEN increase the value of timesShown by one
        console.log(product.name + ' is on the page')
        product.timesShown++
        console.log(product.timesShown)
    }

    else if (product.name === img_two.alt) {
        // IF the image is shown on the document ->
        // THEN increase the value of timesShown by one
        console.log(product.name + ' is on the page')
        product.timesShown++
        console.log(product.timesShown)
    }
    else {
        console.log('there is no image here')
    }



}

// make a function that displays the results on the results div
function displayResults(productsArray) {

    for (let i = 0; i < productsArray.length; i++) {
        let product = productsArray[i]
        // console.log(product)
        let resultMessage = `this product was clicked ${product.timesClicked} times
        this product was shown ${product.timesShown} times
        this product is called  ${product.name}
        you can find this product at : ${product.path} !!!`

        let p = document.createElement('p');
        p.textContent = resultMessage; 
        resultContainer.appendChild(p)
    }
}

function showResults () {
    // check to see if the max clicks are met
    if(totalClicks === maxClicks){
        displayResults(allProducts)
    }
}


// ___ EXECUTABLE CODE ___

constructImages()
