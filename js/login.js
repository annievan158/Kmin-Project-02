let email = document.querySelector('.email');
email.onblur = function(){
    if(email.value == ""){
    document.getElementById("err-login-email").innerHTML = "Yêu cầu phải điền trường thông tin này ";
    }
    else{ 
        document.getElementById("err-login-mail").innerHTML =" ";
    }
}
let password = document.querySelector('.password');
password.onblur = function(){
    if(password.value == ""){
    document.getElementById("err-login-psw").innerHTML = "Yêu cầu phải điền trường thông tin này ";
}
    else{ 
        document.getElementById("err-login-psw").innerHTML ="  ";
    }
}
