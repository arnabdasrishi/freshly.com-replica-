// script for index page
document.querySelector("#signup").addEventListener("click", addToSignUp)
let signUp = JSON.parse(localStorage.getItem("signUpData"))|| []


function addToSignUp() {
    let obj = {
        email : document.querySelector("#email").value,
        pin : document.querySelector("#pincode").value
    }

    signUp.push(obj);
    localStorage.setItem("signUpData",JSON.stringify(signUp));
}