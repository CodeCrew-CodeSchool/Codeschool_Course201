const students = ['Jordan', 'Curtrick', 'Storm', 'Tyler', 'Linsdey', 'Michael', 'Zion'];

const colors = ['Blue', 'Green', 'Yellow', 'Red', 'Pink', 'Turquoise', 'Orange'];

// row
// header
// row
// data

// my students to be printed as a table header

// my colors to be printed in my table body

// My table footer to have copyright symbols with name.


let studentTable = document.getElementById("student-table"); // ref to our table

let tableHeaderContainer = document.createElement('thead'); // table element container

let tableHeaderEl = document.createElement('th'); // table header el

let tableRow = document.createElement('tr'); // table row 

function renderTableHeader(){
    // go through each name in array
    for(i=0; i < students.length; i++){
        // Jordan
        tableHeaderEl = document.createElement('th'); // create new th 
        tableHeaderEl.textContent = `${students[i]}`; // Add a name to our th
        // tableRow = document.createElement('tr'); // create a row
      
        tableRow.append(tableHeaderEl); // attach table header to table row
        tableHeaderContainer.append(tableRow); // attach row to header
       

    }
    studentTable.append(tableHeaderContainer); // attach header to student table
    

}

renderTableHeader();

