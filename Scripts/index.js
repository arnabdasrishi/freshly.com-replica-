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


//navbar links
document.querySelector("#lgin").addEventListener("click",loginherf);
document.querySelector("#sgnup").addEventListener("click",signherf);
document.querySelector("#plans").addEventListener("click",plans_menu);

function loginherf() {
    window.location.href = "login-page.html"
}
function signherf() {
    window.location.href = "signup-page.html"
}
function plans_menu() {
    window.location.href = "plans-menus.html"
}