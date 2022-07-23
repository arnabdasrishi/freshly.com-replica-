document.querySelector("#Loginbtn").addEventListener("click",loginData)
let Logindata = JSON.parse(localStorage.getItem("LoginData"))|| [] 

function loginData(){
    let obj = {
        email:document.getElementById("logEmail").value,
        password: document.getElementById("password").value
    }
    if(obj.email=="" || obj.password == ""){
        alert("*Fields are Empty!")
    } else {
        Logindata.push(obj);
        localStorage.setItem("LoginData",JSON.stringify(Logindata))
    }
}

// navbar links
document.querySelector("#sgnbtn").addEventListener("click",goSignUp)
document.querySelector("#logo").addEventListener("click", goToHome)

function goSignUp(){
    window.location.href = "signup-page.html"
}
function goToHome() {
    window.location.href = "index.html"
}
