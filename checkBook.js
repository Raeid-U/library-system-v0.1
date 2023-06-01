//These are the variables for the information of added books
var bookNumLib = [ ]
var bookTitleLib = [ ]
var bookAuthorLib = [ ]
var bookTypeLib = [ ]
var bookPubDateLib = [ ]
var bookAvailLib = [ ]

var bookIDForm;



function checkoutBook(formID){

    bookNumLib = JSON.parse(localStorage.getItem("libTechBookNumKey"));
    bookTitleLib = JSON.parse(localStorage.getItem("libTechTitleKey"));
    bookAuthorLib = JSON.parse(localStorage.getItem("libTechAuthorKey"));
    bookTypeLib = JSON.parse(localStorage.getItem("libTechTypeKey"));
    bookPubDateLib = JSON.parse(localStorage.getItem("libTechPubDateKey"));
    bookAvailLib = JSON.parse(localStorage.getItem("libTechAvailKey"));

bookIDForm = JSON.stringify(formID.numCBook.value)

 for(i = 0; i < bookNumLib.length; i++){
    if(bookNumLib[i] === JSON.parse(bookIDForm)){
        if (bookAvailLib[i] === "Yes"){
            bookAvailLib[i] = "No"
            localStorage.setItem("libTechAvailKey", JSON.stringify(bookAvailLib))
            alert(`Book ${bookTitleLib[i]} has been checked out.`)
        } else {
            alert(`Book ${bookNumLib[i]} is not available.`)
        }
    }
 }
}