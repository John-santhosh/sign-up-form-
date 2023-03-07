let passWord = document.querySelector("#pword");
let confirmPassWord = document.querySelector("#Cpword");
let button = document.querySelector('#btn')
let a = document.querySelectorAll(".form-content")[2].firstElementChild;

confirmPassWord.addEventListener('keyup',function(){
    if(passWord.value==="" || confirmPassWord ==="") return 
    if(passWord.value===confirmPassWord.value) {
        console.log(1)
        a.classList.remove("error");
        passWord.classList.remove("invalid-border");
        confirmPassWord.classList.remove("invalid-border");
        button.removeAttribute("disabled")
    }else{
        a.classList.add("error");
        passWord.classList.add("invalid-border");
        confirmPassWord.classList.add("invalid-border");
        button.setAttribute("disabled","");

    }
})
passWord.addEventListener('keyup',function(){
    if (passWord.value === "" || confirmPassWord === "") return; 
    if(passWord.value===confirmPassWord.value) {
        console.log(1)
        a.classList.remove("error");
        passWord.classList.remove("invalid-border");
        confirmPassWord.classList.remove("invalid-border");
        button.removeAttribute("disabled");
    }else{
        a.classList.add("error");
        passWord.classList.add("invalid-border");
        confirmPassWord.classList.add("invalid-border");
        button.setAttribute("disabled","");
    }
})


