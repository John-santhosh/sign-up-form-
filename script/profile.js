const logoutBtn = document.querySelector(".logout");
let user = localStorage.getItem("currentUser");
let json = localStorage.getItem(user);
let data = JSON.parse(json);
console.log(data);

document.title = `Welcome | ${data.firstName}`;

const greeting = document.querySelector(".greet");
document.addEventListener("DOMContentLoaded", () => {
  greeting.textContent = `Welcome ${data.firstName}`;
});

logoutBtn.addEventListener("click", () => {
  location.href = "login.html";
});
