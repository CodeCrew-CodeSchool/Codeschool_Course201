// This is the very beginning of the Odd Duck Products application. Review the provided code demo as an example.

// This demo should showcase the following features:

// Showcase 2 images, side-by-side that tracks the number of times an image is clicked. After each click, 2 new images are generated.
// Creating many objects and pushing them into an array
// Keeping track of when each image is seen
// keeping track of when each image is clicked

const allProducts = [];
const productNames = ['boots','bathroom','breakfast','bubblegum']
function Product(name,path){
// the constructor will need a name passed and a path passed for the image
this.name=name;
this.path=path;
// we need to keep track of how many times this image was clicked
this.tally=0;
//we need to know how many times this item was shown
this.views=0;

// we need to push these objects in an array
}

// we need a function to build our prouct image strings
function buildAlbum(){
    // this function takes no parameters

    for(let i=0; i < productNames.length;i++){
        new Product(productNames[i], 'assets/imgs/'+productNames[i]+'.jpg')
    }
    
}
