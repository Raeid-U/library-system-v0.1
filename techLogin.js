var libTechLogUser;
var libTechLogPass;

var usernames = ["Parth", "Joel", "Raeid"];
var passwords = ["123","456","Bald"];

function loginFunc(logForm){
libTechLogUser = logForm.usernames.value;
libTechLogPass = logForm.password.value;

if(!libTechLogUser || !libTechLogPass){
    alert("Please fill out all the fields");
}
    

}

//     libTechLogUser = [logForm.username.value, " "];
//     libTechLogPass = [logForm.password.value, " "];

//     if(!libTechLogUser || !libTechLogPass){
//         alert("Please fill out all the fields");
//     }else{
//         localStorage.setItem("libTechUser", JSON.stringify(libTechLogUser));
//         localStorage.setItem("libTechPass", JSON.stringify(libTechLogPass));

// var techUserTemp = JSON.parse(localStorage.getItem("libTechUser"))
// var techPassTemp = JSON.parse(localStorage.getItem("libTechPass"))

//     for(let i = 0; i > usernames.length; i++){
//         if(techUserTemp[0] === usernames[i] && techPassTemp[0] === passwords[i]){
//             window.location.href = tHome.html
//          } else {
//             wrongcount++
//          }
//      }
//      if(wrongcount === 3){
//         alert("Incorrect Username/Password")
//      }
//    }   

