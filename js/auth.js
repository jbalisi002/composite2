var count=2;
var usernameArray = ["admin"];
var passwordArray = ["123"];

function validate(){

  var user = document.login.username.value;
  var pass = document.login.password.value;
  var valid = false;


  for(var i = 0; i < usernameArray.length; i++)
{

  if((user == usernameArray[i]) && (pass == passwordArray[i]))
  {
    valid = true;
    break;
  }

}
  if(valid){
    alert("Login was successful");
    window.location.replace("sub/home.html");
    return false;
  }
  var again = " tries";
  if (count == 1)
  {
    again = " try";
  }
  if (count >= 1)
  {
      alert("Wrong password or username");
      count--;
  }

  else{
      alert("Create an account!");
      document.login.username.value = "";
      document.login.password.value = "";
      return false;
  }

}

///////////////////////////
function register(){
  var newUser = document.getElementById('newUser').value;
  var newPass = document.getElementById('newPass').value;

  usernameArray.push(newUser);
  passwordArray.push(newPass);

  var uval = "";
  var pval = "";

  for(i=0; i < usernameArray.length; i++){
    uval = uval + usernameArray[i];
  }

  for(p=0; p < passwordArray.length; p++){
    pval = pval + passwordArray[i];
  }


  alert("Sign up was successfull!");
}

//////////////////////////
function logout(){
  window.location.replace("../login.html");
}

/////////////////////////

function share(){
  var post = document.getElementById("getPost").value;
  var newRow = document.createElement("div");

  newRow.setAttribute("class", "post");




}
