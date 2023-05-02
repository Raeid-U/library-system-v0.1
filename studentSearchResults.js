var bookNum;
var bookTitle;
var bookAuthor;

function displayResults(){
    bookNum = localStorage.getItem("libTechBookNumKey")
    bookTitle = localStorage.getItem("libTechTitleKey")
    bookAuthor = localStorage.getItem("libTechAuthorKey")
    document.getElementById("display").innerHTML = (`Book Number: ${bookNum} \nTitle: ${bookTitle} \nAuthor: ${bookAuthor}`);
}

