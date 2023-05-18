var libTechBookNum = [ ];
var libTechTitle = [ ];
var libTechAuthor = [ ];
var libTechType = [ ];
var libTechPubDate = [ ];

var i = 0;

function addNewBook(addBookForm){

libTechBookNum.push(addBookForm.numBookL.value);
libTechTitle.push(addBookForm.tilBookL.value);
libTechAuthor.push(addBookForm.autBookL.value);
libTechType.push(addBookForm.typBookL.value);
libTechPubDate.push(addBookForm.pubBookL.value);
    // libTechBookNum[i] = addBookForm.numBookL.value;
    // libTechTitle[i] = addBookForm.tilBookL.value;
    // libTechAuthor[i] = addBookForm.autBookL.value;
    // libTechType[i] = addBookForm.typBookL.value;
    // libTechPubDate[i] = addBookForm.pubBookL.value;

    // if(!libTechBookNum[i] || !libTechTitle[i] || !libTechAuthor[i] || !libTechType[i] || !libTechPubDate[i]){
    //     alert("Please fill out all the fields");
    // }else{
        localStorage.setItem("libTechBookNumKey", JSON.stringify(libTechBookNum));
        localStorage.setItem("libTechTitleKey", JSON.stringify(libTechTitle));
        localStorage.setItem("libTechAuthorKey", JSON.stringify(libTechAuthor));
        localStorage.setItem("libTechTypeKey", JSON.stringify(libTechType));
        localStorage.setItem("libTechPubDateKey", JSON.stringify(libTechPubDate));
   // }
    i++
alert(i)
}