var studBookNum;
var studTitle;
var studAuthor;
var studType0;
var studType1;
var studType2;
var studPubDate;

var searchTerms;

function getStudentSearchData(searchForm){
    studBookNum = searchForm.numBookS.value;
    studTitle = searchForm.tilBookS.value;
    studAuthor = searchForm.autBookS.value;
    studType0 = searchForm.typBookS0.checked;
    studType1 = searchForm.typBookS1.checked;
    studType2 = searchForm.typBookS2.checked;
    studPubDate = searchForm.pubBookS.value;

if(!studBookNum || !studTitle || !studAuthor || !studPubDate){
    alert("Please fill out all the fields")
} else {
    localStorage.setItem("studBookNumKey", studBookNum);
    localStorage.setItem("studTitleKey", studTitle);
    localStorage.setItem("studAuthorKey", studAuthor);
    localStorage.setItem("studTypeKey0", studType0);
    localStorage.setItem("studTypeKey1", studType1);
    localStorage.setItem("studTypeKey2", studType2);
    localStorage.setItem("studPubDateKey", studPubDate);

    searchTerms = [localStorage.getItem("studBookNumKey"), localStorage.getItem("studTitleKey0"),
        localStorage.getItem("studTitleKey1"), localStorage.getItem("studTitleKey2"),
        localStorage.getItem("studAuthorKey"), localStorage.getItem("studPubDateKey")];
}   
}