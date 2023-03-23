let passWord = document.querySelector("#pword");
let confirmPassWord = document.querySelector("#Cpword");
let errorMsg = document.querySelector(".error");
let successMsg = document.querySelector(".success");
let passwordField = document.querySelectorAll('[type="password"]');

const formEl = document.forms.loginForm;

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  loginSuccess();
  let inputs = [...formEl.elements];
  inputs.forEach((element) => {
    element.value = "";
  });
});

// checking passwords
passwordField.forEach((each) => {
  each.addEventListener("keyup", () => {
    if (passWord.value === "" || confirmPassWord === "") return;
    passWord.value === confirmPassWord.value ? match() : misMatch();
  });
});

// passwd mismatch
function misMatch() {
  errorMsg.classList.add("error");
  passWord.classList.add("invalid-border");
  confirmPassWord.classList.add("invalid-border");
}

// passwd match
function match() {
  errorMsg.classList.remove("error");
  passWord.classList.remove("invalid-border");
  confirmPassWord.classList.remove("invalid-border");
}

function loginSuccess() {
  successMsg.style.transform = "scale(1)";
  setTimeout(() => {
    successMsg.style.transform = "scale(0)";
  }, 3000);
}

// console.log(formEl);
