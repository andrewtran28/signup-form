const pwd = document.querySelector("#password");
const confirm_pwd = document.querySelector("#confirm-password");
const pwd_msg = document.querySelector(".message");


if (pwd != confirm_pwd) {
    pwd_msg.style.color= "red";
    pwd_msg.textContent = "Passwords do not match.";
}