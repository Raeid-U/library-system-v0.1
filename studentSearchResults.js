//These are the variables for the information of added books
var bookNumLib = [ ]
var bookTitleLib = [ ]
var bookAuthorLib = [ ]
var bookTypeLib = [ ]
var bookPubDateLib = [ ]

//These are the variables for the information that the student entered for the search
var bookNumStud;
var bookTitleStud;
var bookAuthorStud;
var bookTypeStud0;
var bookTypeStud1;
var bookTypeStud2;
var bookPubDateStud;

function displayResults(){
//Add a book information
    bookNumLib = JSON.parse(localStorage.getItem("libTechBookNumKey"));
    bookTitleLib = JSON.parse(localStorage.getItem("libTechTitleKey"));
    bookAuthorLib = JSON.parse(localStorage.getItem("libTechAuthorKey"));
    bookTypeLib = JSON.parse(localStorage.getItem("libTechTypeKey"));
    bookPubDateLib = JSON.parse(localStorage.getItem("libTechPubDateKey"));

//Student Search Terms
    bookNumStud = JSON.parse(localStorage.getItem("studBookNumKey"));
    bookTitleStud = JSON.parse(localStorage.getItem("studTitleKey"));
    bookAuthorStud = JSON.parse(localStorage.getItem("studAuthorKey"));
    bookTypeStud0 = JSON.parse(localStorage.getItem("studTypeKey0"));
    bookTypeStud1 = JSON.parse(localStorage.getItem("studTypeKey1"));
    bookTypeStud2 = JSON.parse(localStorage.getItem("studTypeKey2"));
    bookPubDateStud = JSON.parse(localStorage.getItem("studPubDateKey"));

//New If statement for search terms
let results = [ ]

for (i = 0; i < bookNumLib.length; i++){
    if (bookNumLib[i] === bookNumStud || 
        bookTitleLib[i] === bookTitleStud || 
        bookAuthorLib[i] === bookAuthorStud || 
        bookPubDateLib[i] === bookPubDateStud || 
        bookTypeLib[i] === bookTypeStud0 || 
        bookTypeLib[i] === bookTypeStud1 || 
        bookTypeLib[i] === bookTypeStud2){
            results.push(bookNumLib[i])
    }  
}

localStorage.setItem("resultsKey", JSON.stringify(results))

var resultChecker = JSON.parse(localStorage.getItem("resultsKey"))
//display the Search Results
var table = ' ';
    for (x = 0; x < bookNumLib.length; x++) {
        //this if the IF statement for the search results to be displayed depending on the search inputs put in by the student
        if (resultChecker[x] === bookNumLib[x]) {
            //making all of the rows of the table with the values of the [x] index in the arrays if a match is found
            //opening table row
            table += "<tr>";
            //result number
            table += "<td style='border: 1px solid black;height: 120px;'>" + (x + 1) + "</td>";
            //book title
            table += "<td style='border: 1px solid black;height: 120px;'>" + bookTitleLib[x] + "</td>";
            //book number
            table += "<td style='border: 1px solid black;height: 120px;'>" + bookNumLib[x] + "</td>";
            //book author
            table += "<td style='border: 1px solid black;height: 120px;'>" + bookAuthorLib[x] + "</td>";
            //book type
            table += "<td style='border: 1px solid black;height: 120px;'>" + bookTypeLib[x] + "</td>";
            //book genre
            table += "<td style='border: 1px solid black;height: 120px;'>" + bookGenreLib[x] + "</td>";
            //book publication date
            table += "<td style='border: 1px solid black;height: 120px;'>" + bookPubDateLib[x] + "</td>";
            //closing the table row
            table += "</tr>";
        }
    }
table += "</table>";
document.getElementById("display1").innerHTML += table;

    // document.getElementById("display1").innerHTML = (`Book Number: ${bookNumLib[i]} \nTitle: ${bookTitleLib[i]} \nAuthor: ${bookAuthorLib[i]} \nBook Type: ${bookTypeLib[i]} \nPublication Date: ${bookPubDateLib[i]}`);

//If statement for search terms
    // if(bookNumLib === bookNumStud || bookTitleLib === bookTitleStud || bookAuthorLib === bookAuthorStud || bookPubDateLib === bookPubDateStud || bookTypeLib === bookTypeStud0 || bookTypeLib === bookTypeStud1 || bookTypeLib === bookTypeStud2){
    //     document.getElementById("display1").innerHTML = (`Book Number: ${bookNumLib} \nTitle: ${bookTitleLib} \nAuthor: ${bookAuthorLib} \nBook Type: ${bookTypeLib} \nPublication Date: ${bookPubDateLib}`);
    // }else if (bookNumLib !== bookNumStud && bookTitleLib !== bookTitleStud && bookAuthorLib !== bookAuthorStud && bookPubDateLib !== bookPubDateStud && (bookTypeLib !== bookTypeStud0 && bookTypeLib !== bookTypeStud1 && bookTypeLib !== bookTypeStud2)){
    //     document.getElementById("display2").innerHTML = (`No Search Terms Match`);
    // } 
}

