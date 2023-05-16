var libTechLogUser;
var libTechLogPass;

var usernames = ["Parth", "Joel", "Raeid"];
var passwords = ["123","456","Bald"];

var values;
var wrongcount = 0;

function loginFunc(logForm){
    libTechLogUser = logForm.username.value;
    libTechLogPass = logForm.password.value;

    if(!libTechLogUser || !libTechLogPass){
        alert("Please fill out all the fields");
    }else{
        localStorage.setItem("libTechUser", libTechLogUser);
        localStorage.setItem("libTechPass", libTechLogPass);
    for(let i = 0; i < usernames.length; i++){
        if(localStorage.getItem("libTechUser") === usernames[i] && localStorage.getItem("libTechPass") === passwords[i]){
//alert("You will be redirected");
            replace('tHome.html');
         } else {
            wrongcount++
         }
     }
     if(wrongcount === 3){
        alert("Incorrect Username/Password")
     }
   }     
}

