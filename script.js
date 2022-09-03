const inputErrorButtonTag = document.querySelector(".inputErrorButton");
const buttonTag = document.querySelector(".button");
const inputEmailTag = document.querySelector(".inputEmail");
const errorMsgTag = document.getElementById("errorMsg");
const errorImgTag = document.getElementById("errorImg")


    inputEmailTag.addEventListener("keyup", (event) => {
        const emailValue = event.target.value;
        if (!emailValue.includes("@")) {
            errorMsgTag.innerHTML = "Please provide a valid email";
            errorImgTag.style.display = "block";
        } else {
            errorMsgTag.innerHTML = "";
            errorImgTag.style.display = "none"
        }
    })
