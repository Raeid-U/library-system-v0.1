//These are the variables for the information of added books
var bookNumLib;
var bookTitleLib;
var bookAuthorLib;
var bookTypeLib;
var bookPubDateLib;

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
    bookNumLib = localStorage.getItem("libTechBookNumKey");
    bookTitleLib = localStorage.getItem("libTechTitleKey");
    bookAuthorLib = localStorage.getItem("libTechAuthorKey");
    bookTypeLib = localStorage.getItem("libTechTypeKey");
    bookPubDateLib = localStorage.getItem("libTechPubDateKey");

//Student Search Terms
    bookNumStud = localStorage.getItem("studBookNumKey");
    bookTitleStud = localStorage.getItem("studTitleKey");
    bookAuthorStud = localStorage.getItem("studAuthorKey");
    bookTypeStud0 = localStorage.getItem("studTypeKey0");
    bookTypeStud1 = localStorage.getItem("studTypeKey1");
    bookTypeStud2 = localStorage.getItem("studTypeKey2");
    bookPubDateStud = localStorage.getItem("studPubDateKey");


//If statement for search terms
    if(bookNumLib === bookNumStud || bookTitleLib === bookTitleStud || bookAuthorLib === bookAuthorStud || bookPubDateLib === bookPubDateStud || bookTypeLib === bookTypeStud0 || bookTypeLib === bookTypeStud1 || bookTypeLib === bookTypeStud2){
        document.getElementById("display1").innerHTML = (`Book Number: ${bookNumLib} \nTitle: ${bookTitleLib} \nAuthor: ${bookAuthorLib} \nBook Type: ${bookTypeLib} \nPublication Date: ${bookPubDateLib}`);
    }else if (bookNumLib !== bookNumStud && bookTitleLib !== bookTitleStud && bookAuthorLib !== bookAuthorStud && bookPubDateLib !== bookPubDateStud && (bookTypeLib !== bookTypeStud0 && bookTypeLib !== bookTypeStud1 && bookTypeLib !== bookTypeStud2)){
        document.getElementById("display2").innerHTML = (`No Search Terms Match`);
    } 
}

