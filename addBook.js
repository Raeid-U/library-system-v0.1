var libTechBookNum;
var libTechTitle;
var libTechAuthor;
var libTechType;
var libTechPubDate;

var bookValues;

function addNewBook(addBookForm){
    libTechBookNum = addBookForm.numBookL.value;
    libTechTitle = addBookForm.tilBookL.value;
    libTechAuthor = addBookForm.autBookL.value;
    libTechType = addBookForm.typBookL.value;
    libTechPubDate = addBookForm.pubBookL.value;

    if(!libTechBookNum || !libTechTitle || !libTechAuthor || !libTechType || !libTechPubDate){
        alert("Please fill out all the fields");
    }else{
        localStorage.setItem("libTechBookNumKey", libTechBookNum);
        localStorage.setItem("libTechTitleKey", libTechTitle);
        localStorage.setItem("libTechAuthorKey", libTechAuthor);
        localStorage.setItem("libTechTypeKey", libTechType);
        localStorage.setItem("libTechPubDateKey", libTechPubDate);

        bookValues = [localStorage.getItem("libTechBookNumKey"), localStorage.getItem("libTechTitleKey"), 
            localStorage.getItem("libTechAuthorKey"), localStorage.getItem("libTechTypeKey"), 
            localStorage.getItem("libTechPubDateKey")];
    }
}