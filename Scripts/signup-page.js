document.getElementById("form1").addEventListener("click", addtoSign);
let sgnData = JSON.parse(localStorage.getItem("signUpData")) || [];

function addtoSign() {
  let obj = {
    email: document.querySelector("#email").value,
    pin: document.querySelector("#pin").value,
  };
  if (obj.email == "" || obj.password == "") {
    alert("*Fields are Empty!");
  } else {
    sgnData.push(obj);
    localStorage.setItem("signUpData", JSON.stringify(sgnData));
    alert("Subscription Successful!")
  }
}

//navbar
document.querySelector("#freshly").addEventListener("click", gotoHome)
document.querySelector("#logIn").addEventListener("click", toLogin)

function gotoHome(){
  window.location.href = "index.html"
}
function toLogin(){
  window.location.href = "login-page.html"
}