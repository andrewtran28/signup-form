const pwd_input = document.querySelector("#password");
const confirm_pwd_input = document.querySelector("#confirm-password");
const pwd_msg = document.querySelector(".message");
const form = document.querySelector("form");

let invalid = "2px solid rgb(221, 0, 0)"

form.addEventListener("submit", e => {
    const pwd = document.querySelector('#password').value;
    const confirm_pwd = document.querySelector('#confirm-password').value;
    const pwd_msg = document.querySelector('.pwd-msg'); 

    if (pwd != confirm_pwd) {
        pwd_input.style.border = invalid;
        confirm_pwd_input.style.border = invalid;
        pwd_msg.style.color = "red";
        pwd_msg.textContent = "Passwords do not match.";
        e.preventDefault();
    }
})