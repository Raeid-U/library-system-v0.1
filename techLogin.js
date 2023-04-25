var libTechLogUser;
var libTechLogPass;
var usernames = ["Parth", "Joel", "Raeid"];
var passwords = ["123","456","Bald"];

var values;
function loginFunc(logForm){
    libTechLogUser = logForm.username.value;
    libTechLogPass = logForm.password.value;

    if(!libTechLogUser || !libTechLogPass){
        alert("Please fill out all the fields");
    }else{
        localStorage.setItem("libTechUser", libTechLogUser);
        localStorage.setItem("libTechPass", libTechLogPass);
        values = [localStorage.getItem("libTechUser"), localStorage.getItem("libTechPass")];
    }

    for(let i = 0; i < usernames.length; i++){
        if(values[0] === usernames[i] && values[1] === passwords[i]){
            window.location.href = "/Users/raeidusmanali/Documents/Coding/ICS3UO Projects/Course Assignment v0.1/tHome.html";
        } else {
            window.location.href = "techLogin.html";
        }
   }     
}