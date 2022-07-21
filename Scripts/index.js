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


let comment = [
    {
        image: "https://assets-global.website-files.com/5d03b4e130118314af624b20/5d96607e740addd99bf570ae_star.svg",
        head: "Freshly has changed our lives!",
        para: "With Freshly, we don’t have to go anywhere or wait for delivery, and our monthly food bill has been cut nearly in half. We love it",
        cmtname: "Dave"
    },
    {
        image: "https://assets-global.website-files.com/5d03b4e130118314af624b20/5d96607e740addd99bf570ae_star.svg",
        head: "10 stars! Awesome! Love it!",
        para:"We love Freshly because it takes two minutes to prepare, the food is great and we don’t have to spend time cleaning up.",
        cmtname: "Sheri"
    },
    {
        image: "https://assets-global.website-files.com/5d03b4e130118314af624b20/5d96607e740addd99bf570ae_star.svg",
        head: "One of the easiest decisions I've made",
        para: "With Freshly, I don’t have to think about what I’m going to eat for lunch each day and feel good knowing that I’m eating a healthy meal. I love the convenience!",
        cmtname: "Cindi"
    },
    {
        image: "https://assets-global.website-files.com/5d03b4e130118314af624b20/5d96607e740addd99bf570ae_star.svg",
        head: "Freshly has changed our lives!",
        para: "With Freshly, we don’t have to go anywhere or wait for delivery, and our monthly food bill has been cut nearly in half. We love it",
        cmtname: "Dave"
    },
    {
        image: "https://assets-global.website-files.com/5d03b4e130118314af624b20/5d96607e740addd99bf570ae_star.svg",
        head: "10 stars! Awesome! Love it!",
        para:"We love Freshly because it takes two minutes to prepare, the food is great and we don’t have to spend time cleaning up.",
        cmtname: "Sheri"
    },
    {
        image: "https://assets-global.website-files.com/5d03b4e130118314af624b20/5d96607e740addd99bf570ae_star.svg",
        head: "One of the easiest decisions I've made",
        para: "With Freshly, I don’t have to think about what I’m going to eat for lunch each day and feel good knowing that I’m eating a healthy meal. I love the convenience!",
        cmtname: "Cindi"
    },
    {
        image: "https://assets-global.website-files.com/5d03b4e130118314af624b20/5d96607e740addd99bf570ae_star.svg",
        head: "Freshly has changed our lives!",
        para: "With Freshly, we don’t have to go anywhere or wait for delivery, and our monthly food bill has been cut nearly in half. We love it",
        cmtname: "Dave"
    },
    {
        image: "https://assets-global.website-files.com/5d03b4e130118314af624b20/5d96607e740addd99bf570ae_star.svg",
        head: "10 stars! Awesome! Love it!",
        para:"We love Freshly because it takes two minutes to prepare, the food is great and we don’t have to spend time cleaning up.",
        cmtname: "Sheri"
    },
    {
        image: "https://assets-global.website-files.com/5d03b4e130118314af624b20/5d96607e740addd99bf570ae_star.svg",
        head: "One of the easiest decisions I've made",
        para: "With Freshly, I don’t have to think about what I’m going to eat for lunch each day and feel good knowing that I’m eating a healthy meal. I love the convenience!",
        cmtname: "Cindi"
    }
]