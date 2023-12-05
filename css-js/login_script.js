
//to make the eye emoji change and also make the password entered visible so that user can check if passwrd is correct.
function togglePassword() {
   var passwordInput = document.getElementById ("password");
   var passwordToggle=document.querySelector(".passwrd-toggle");

 if (passwordInput.type == "password") {
       passwordInput.type= "text";
       passwordToggle.innerHTML ="&#128064;&#65039;";
   } else{
       passwordInput.type="password";
       passwordToggle.innerHTML="&#128065;&#65039";
   }
}
