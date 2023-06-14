var checkbox = document.querySelector('.checkbox');

checkbox.addEventListener('change', function() {
  if (this.checked) {
    document.getElementById('password').type = "text";
  } else {
    document.getElementById('password').type = "password";
  }
});

var username = ['prasadreddyhari2@gmail.com'];
var pass = ['Hari'];
var submit = document.querySelector('.btn');

let userip;
let userpass;

function sub(){
  userip = document.getElementById("email").value;
  userpass = document.getElementById("password").value;
  // console.log(userip);
  // console.log(userpass);
  for(let i=0;i<username.length;i++){
      for(let j=0;j<pass.length;j++){
        if(userip==='' && userpass===''){
          alert("Both input fields are empty");
        }
        else if(userip===''){
          alert("Username field is empty");
        }
        else if(userpass===''){
          alert("Password field is empty");
        }
        else if(username[i]==userip && pass[j]===userpass){
            console.log("You logged In");
            
            location.href = "home.html";
        }
        else{
            alert("Incorrect username or Password\nUsername: prasadreddyhari2@gmail.com\nPassword: Hari");
        }
      }
  }
}

// let useripsignup;
// let userpasssignup;
// function subsig(){
//     useripsignup = document.get
// }