// Blacklisted IP's
const blacklists = ["", ""];

// Blacklist system
fetch('https://api.db-ip.com/v2/free/self')
.then(response => response.json())
.then(data => {
  var ip = data.ipAddress;
  if (blacklists.includes(ip)) {
    alert("Your IP Address (" + ip + ") has been blacklisted from this website.");
    window.open('https://blocked.goguardian.com/teacher/block.html/', '_self').focus();
  }
})

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
  usernames: ["admin", "username123", "skibidi", "yamal", "25dgarcia@htps.org"],
  passwords: ["admin", "password", "toilet", "155555", "2025david"],
}

// Checking the database for the username and password and seeing if they're correct to show the secret button
function checkDatabase() {
  var usernameEntered = document.getElementById("lgin");
  var passwordEntered = document.getElementById("psw");
  var username = database.usernames;
  var password = database.passwords;
  const user = { usr: username, usrEntered: usernameEntered };
  const pass = { pswd: password, pswEntered: passwordEntered };
  if (user.usr.includes(user.usrEntered.value) && pass.pswd.includes(pass.pswEntered.value)) {
    window.location.href = '../94199925-7986-498e-ab8e-8809b8b6133e.html/';
    console.log(user);
    console.log(pass);
  } else {
    document.getElementById("iplog").innerText = (
      fetch('https://api.db-ip.com/v2/free/self')
        .then(response => response.json())
        .then(data => {
          const info = data;
          const ip = data.ipAddress;
          console.log(info);
          document.getElementById("iplog").innerText = "IPv4 Address: " + ip;
        })
      )
    }
  }
