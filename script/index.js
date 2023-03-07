let passWord = document.querySelector("#pword");
let confirmPassWord = document.querySelector("#Cpword");
let button = document.querySelector('#btn')
let a = document.querySelectorAll(".form-content")[2].firstElementChild;


// passwd mismatch 
function misMatch(){
    a.classList.add("error");
    passWord.classList.add("invalid-border");
    confirmPassWord.classList.add("invalid-border");
    button.setAttribute("disabled", "");
}

// passwd match 
function match(){
    a.classList.remove("error");
    passWord.classList.remove("invalid-border");
    confirmPassWord.classList.remove("invalid-border");
    button.removeAttribute("disabled");
}



confirmPassWord.addEventListener('keyup',function(){
    if(passWord.value==="" || confirmPassWord ==="") return 
    passWord.value === confirmPassWord.value ? match() : misMatch() 
})


passWord.addEventListener('keyup',function(){
    if (passWord.value === "" || confirmPassWord === "") return;
    passWord.value === confirmPassWord.value ? match() : misMatch(); 
})


