document.addEventListener("DOMContentLoaded",function(){
    function isPasswordValid(password){
        const passwordRegex= /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;
            return passwordRegex.test(password);
    }
    function displayErrorMessage(message){
        alert(message);
    }
    function handleSubmit(event) {
        event.preventDefault();

        const email=document.getElementById("Email").value;
        const newPassword=document.getElementById("newpassword").value;
        const confirmNewPassword=document.getElementById("confirmnewpassword").value;

        if(!isPasswordValid(newPassword)){
            displayErrorMessage("Password should be a min of 6 Characters including (Numeric/Alphabet/Special characters).");
            return;
        }
        if (newPassword!==confirmNewPassword){
            displayErrorMessage("Password and confirmation Password does not match")
            return;
        }
        alert("Password changed succesfully.")
        window.location.href='../index.html';
        }
        const form=document.querySelector('.log-form');
        form.addEventListener("submit",handleSubmit);
});