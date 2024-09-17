function validateEmail(email) { 
    let count = 0;
    for (let i = 0; i < email.length; i++) {
        if (email[i] == "@")
            count++;
    }
    return count == 1;
}

function validatePsw(psw) { // Term of password 
    if (psw.length < 6) //min 6 characters
        return false;
    
    let flagSpecialChar = false; // min 1 special characters
    let flagCapital = false; //min 1 capital characters
    for (let i = 0; i < psw.length; i++) {
        if (!(psw[i] >= "A" && psw[i] <= "Z" || psw[i] >= "a" && psw[i] <= "z"))
            flagSpecialChar = true;
        else if (psw[i] >= "A" && psw[i] <= "Z")
            flagCapital = true;
    }
    console.log(flagSpecialChar, flagCapital);
    return flagSpecialChar && flagCapital;
}
// Email    
let email = document.querySelector('.email');

email.onblur = function () {
    let flagSuccess = true;
        if (!validateEmail(email.value)) {
            document.getElementById("err-email").innerHTML = "Vui lòng nhập đúng định dạng email.";
            flagSuccess = false;
        }
        else {
            document.getElementById("err-email").innerHTML = "";
        }
}
// Check password
let password = document.querySelector('.password')
password.onblur = function() {
    if (!validatePsw(password.value)) {
        document.getElementById("err-password").innerHTML = "Password có ít nhất 6 ký tự, có ít nhất 1 ký tự đặc biệt, có ít nhất 1 ký tự hoa";
        flagSuccess = false;
    }
    else {
        document.getElementById("err-password").innerHTML = "";
    }
}

// Name
let fullName = document.querySelector('.fullname')

fullName.onblur = function () {
    if(fullName.value == ""){
    document.getElementById("err-fullname").innerHTML = "Yêu cầu phải điền trường thông tin này ";
    }
    else{ 
    document.getElementById("err-fullname").innerHTML =" ";
    }
}    

// Success Box