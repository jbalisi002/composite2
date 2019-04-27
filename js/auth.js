var count=2;
var usernameArray = ["admin"];
var passwordArray = ["password"];

function validate(){ // function to validate if user will be redirected to home page

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
function register(){ //function for sign up
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

  window.localStorage.setItem('usernameArray', JSON.stringify(newUser));
  window.localStorage.setItem('passwordArray', JSON.stringify(newPass));


  alert("Sign up was successfull!");
  alert("You may Log in now.");
}

//////////////////////////
function logout(){ //logout funcition
  window.location.replace("../login.html");
}

/////////////////////////

function share(){ //function for the share post button
 var countup = this;
          var newPost = document.createElement('div');
          newPost.className = 'shared-post-box shared-post';
          newPost.innerHTML = document.getElementById('getPost').value;
          document.getElementById('col2').appendChild(newPost);


}
