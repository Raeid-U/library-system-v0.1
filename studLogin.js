// Array storing valid usernames and passwords
var validCredentials = [
    { username: "Mikael", password: "123" },
    { username: "Vanish", password: "456" },
    { username: "James Byron Luchak", password: "789" }
  ];
  
  // Function to check if the entered credentials are valid
  function checkCredentials(username, password) {
    for (i = 0; i < validCredentials.length; i++) {
      var storedUsername = validCredentials[i].username;
      var storedPassword = validCredentials[i].password;
  
      if (username === storedUsername && password === storedPassword) {
        return true; // Valid credentials found
      }
    }
    return false; // No valid credentials found
  }
  
  // Event listener for form submission
  document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
      event.preventDefault(); 
      // Get the entered username and password values
      var enteredUsername = document.getElementById("UsernameL").value;
      var enteredPassword = document.getElementById("PasswordL").value;
      var isValid = checkCredentials(enteredUsername, enteredPassword);
  
      if (isValid) {
        localStorage.setItem("sID", enteredUsername)
        window.location.href = "sHome.html";
      } else {
        alert("Invalid Login. Please try again.");
      }
    });
  });