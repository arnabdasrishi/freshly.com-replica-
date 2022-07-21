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
    alert("Sign-Up Success")
    window.location.reload();
}

document.querySelector("#lastform").addEventListener("click",addLastSign)

function addLastSign(){
    let obj1 = {
        email: document.querySelector("#Email").value,
        pin: document.querySelector("#Zip").value
    }

    signUp.push(obj1);
    localStorage.setItem("signUpData",JSON.stringify(signUp));
    alert("Sign-Up Success")
    window.location.reload();
}
