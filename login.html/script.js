// Function to show the password
function showPassword() {
  var passw = document.getElementById("psw");
if (passw.type === "password") {
  passw.type = "text";
} else {
  passw.type = "password";
  }
}

// Database of usernames and passwords
const database = {
    usernames: ["admin", "username123", "skibidi"],
    passwords: ["admin", "password", "toilet"],
}

// Checking the database for the username and password and seeing if they're correct to show the secret button
function checkDatabase() {
    var usernameEntered = document.getElementById("lgin");
    var passwordEntered = document.getElementById("psw");
    var username = database.usernames;
    var password = database.passwords;
    const user = {usr:username, usrEntered:usernameEntered};
    const pass = {pswd:password, pswEntered:passwordEntered};

    if (user.usr.includes(user.usrEntered.value) && pass.pswd.includes(pass.pswEntered.value)) {
        window.location.href = '../94199925-7986-498e-ab8e-8809b8b6133e.html/';
        console.log(user);
        console.log(pass);
    } else {
        console.log(user);
        console.log(pass);
    }
}