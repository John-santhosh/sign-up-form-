const formEl = document.forms.loginForm;
let email = [...formEl.elements][0]; //selecting email input
let passwd = [...formEl.elements][1]; //selecting passwd input
const alertText = document.querySelector(".alert");
const checkBox = [...formEl.elements][2]; // selecting checkBox

// check button action (password unhide)
checkBox.addEventListener("change", function () {
  if (this.checked) {
    passwd.setAttribute("type", "text");
  } else {
    passwd.setAttribute("type", "password");
  }
});

// submit events
formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  // setting the current user who logged in
  localStorage.setItem("currentUser", email.value);

  let json = localStorage.getItem(email.value);
  let data = JSON.parse(json);

  if (localStorage.getItem(email.value)) {
    if (passwd.value == data.password) {
      location.href = "profile.html";
    } else {
      alertText.textContent = "Invalid Password!";
      alertError();
    }
  } else {
    alertError();
  }
});

function alertError() {
  alertText.classList.add("slide-in");
  setTimeout(() => {
    alertText.classList.remove("slide-in");
  }, 1200);
}
