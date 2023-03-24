let passWord = document.querySelector("#pword");
let confirmPassWord = document.querySelector("#Cpword");
let errorMsg = document.querySelector(".error");
let successMsg = document.querySelector(".success");
let passwordField = document.querySelectorAll('[type="password"]');
const alertBox = document.querySelector(".alert");
let flag = false;
const body = document.querySelector("body");
const formEl = document.forms.loginForm;

formEl.addEventListener("submit", (e) => {
  console.log(flag);
  e.preventDefault();
  // loginSuccess();

  new FormData(formEl);
  // if (false) return;
});

formEl.addEventListener("formdata", (e) => {
  // checking password match
  if (flag == false) {
    return;
  }

  // converting form values into object
  let formData = Object.fromEntries(e.formData);

  let email = formData.email;

  // checking for user
  if (localStorage.getItem(email)) {
    alertBox.textContent = "Email already exist";
    return;
  }

  location.href = "login.html";

  let inputs = [...formEl.elements];
  inputs.forEach((element) => {
    element.value = "";
  });

  // converting object to json
  const json = JSON.stringify(formData);

  // setting values to localStorage
  localStorage.setItem(email, json);

  //
  // loginSuccess();
});

window.addEventListener("load", () => {
  body.style.transform = "translate(0)";
});

function loginSuccess() {
  // body.style.transform = "translate(-100%)";
  // setTimeout(() => {
  //   body.style.transform = "scale(0)";
  // }, 3000);
  // successMsg.style.transform = "scale(1)";
  // setTimeout(() => {
  //   successMsg.style.transform = "scale(0)";
  // }, 3000);
}

// checking passwords
passwordField.forEach((each) => {
  each.addEventListener("keyup", () => {
    console.log(flag);
    if (passWord.value === "" || confirmPassWord === "") return;
    passWord.value === confirmPassWord.value ? match() : misMatch();
  });
});

// passwd mismatch
function misMatch() {
  flag = false;
  errorMsg.classList.add("error");
  passWord.classList.add("invalid-border");
  confirmPassWord.classList.add("invalid-border");
}

// passwd match
function match() {
  flag = true;
  errorMsg.classList.remove("error");
  passWord.classList.remove("invalid-border");
  confirmPassWord.classList.remove("invalid-border");
}
