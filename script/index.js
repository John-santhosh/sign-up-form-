let passWord = document.querySelector("#pword");
let confirmPassWord = document.querySelector("#Cpword");
let button = document.querySelector('#btn')
let errorMsg = document.querySelectorAll(".form-content")[2].firstElementChild;
let successMsg = document.querySelector('.success')
let passwordField = document.querySelectorAll('[type="password"]');

// SuccessMsg
function loginSuccess(){
    successMsg.style.display="flex"
    setTimeout(()=>{
            successMsg.style.display = "none";
    },3000)
}

// event listener's
// create Account button 
button.addEventListener("click", loginSuccess);

// checking passwords 
passwordField.forEach(each=>{
    each.addEventListener('keyup',()=>{
        if (passWord.value === "" || confirmPassWord === "") return;
        passWord.value === confirmPassWord.value ? match() : misMatch(); 
    })
})

// passwd mismatch 
function misMatch(){
    errorMsg.classList.add("error");
    passWord.classList.add("invalid-border");
    confirmPassWord.classList.add("invalid-border");
    button.setAttribute("disabled", "");
}

// passwd match 
function match(){
    errorMsg.classList.remove("error");
    passWord.classList.remove("invalid-border");
    confirmPassWord.classList.remove("invalid-border");
    button.removeAttribute("disabled");
}




