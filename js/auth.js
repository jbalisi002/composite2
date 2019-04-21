var count=2;

function validate(){

  var user = document.login.username.value;
  var pass = document.login.password.value;
  var valid = false;
  var usernameArray = ["admin", "Monty"];
  var passwordArray = ["123", "321"];

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
    window.location.replace("profile.html");
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

  }

}

function logout(){
  window.location.replace("login.html");
}
