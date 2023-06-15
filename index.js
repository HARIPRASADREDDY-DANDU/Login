var checkbox = document.querySelector('.checkbox');

checkbox.addEventListener('change', function() {
  if (this.checked) {
    document.getElementById('password2').type = "text";
  } else {
    document.getElementById('password2').type = "password";
  }
});

var user = ['prasadreddyhari2@gmail.com'];
var pass = ['Hari'];
function retrieveCredentials() {
  var username = localStorage.getItem("username");
  var password = localStorage.getItem("password");

  if (username && password) {
      user.push(username);
      pass.push(password);
    }
    sub();
  }

  // window.onload = retrieveCredentials;


var submit = document.querySelector('.btn');

var userip;
var userpass;
var item = false;
function sub(){
  userip = document.getElementById("username1").value;
  userpass = document.getElementById("password2").value;
  for(let i=0;i<user.length;i++){
      for(let j=0;j<pass.length;j++){
        if(user[i]==userip && pass[j]===userpass){
            item = true;
            break;
        }
      }
  }
  if(item){
    location.href = "home.html";
  }
  else{
    alert("Incorrect username or Password");
  }
}

  
