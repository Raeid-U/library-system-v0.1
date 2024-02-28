var studBookNum;
var studTitle;
var studAuthor;
var studType0;
var studType1;
var studType2;
var studPubDate;

function getStudentSearchData(searchForm){
    studBookNum = searchForm.numBookS.value;
    studTitle = searchForm.tilBookS.value;
    studAuthor = searchForm.autBookS.value;
    studType0 = searchForm.typBookS0.checked;
    studType1 = searchForm.typBookS1.checked;
    studType2 = searchForm.typBookS2.checked;
    studPubDate = searchForm.pubBookS.value;


    localStorage.setItem("studBookNumKey", JSON.stringify(studBookNum));
    localStorage.setItem("studTitleKey", JSON.stringify(studTitle));
    localStorage.setItem("studAuthorKey", JSON.stringify(studAuthor));

if(studType0){
    studType0 = "Fiction"
} 
if(studType1){
    studType1 = "Non-Fiction"
}
if(studType2){
    studType2 = "Graphic Novel"
}

    localStorage.setItem("studTypeKey0", JSON.stringify(studType0));
    localStorage.setItem("studTypeKey1", JSON.stringify(studType1));
    localStorage.setItem("studTypeKey2", JSON.stringify(studType2));
    
    localStorage.setItem("studPubDateKey", JSON.stringify(studPubDate));

}
