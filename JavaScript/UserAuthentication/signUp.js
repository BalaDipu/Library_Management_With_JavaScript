const signUp = e => {
    let signUpData = {
        userName: document.getElementById('name').value,
        userEmail: document.getElementById('email').value,
        userPassword: document.getElementById('password').value,
        userConfPassword: document.getElementById('confirmPassword').value
    }
// Email Validation
    function emailValidation(userEmail) {
        try{
            if (/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(userEmail)) {
                return true
            } else {
                document.getElementById('msg1').innerHTML = "*Invalid Email";
                e.preventDefault();
            }
        }catch(err){
            console.log(err.name);
        }
    }
    emailValidation(signUpData.userEmail);

// Password Validation
    function passwordValidation(password){
            if (password.length < 8) {
                document.getElementById('msg').innerHTML = "*Your password must be at least 8 characters"; 
                e.preventDefault();
            }
            if (password.search(/[a-z]/i) < 0) {
                document.getElementById('msg').innerHTML = "*Your password must contain at least one letter.";
                e.preventDefault();
            }
            if (password.search(/[0-9]/) < 0) {
                document.getElementById('msg').innerHTML = "*Your password must contain at least one digit."; 
                e.preventDefault();
            }
            return true;
    }
    passwordValidation(signUpData.userPassword);

// Password and Confirm Passwod check 
    if (signUpData.userPassword === signUpData.userConfPassword) {
        if (localStorage.getItem("allUsers") == null) {
            localStorage.setItem("allUsers", '[]');
        }
        var oldUser = JSON.parse(localStorage.getItem('allUsers'));
        oldUser.push(signUpData);
        localStorage.setItem('allUsers', JSON.stringify(oldUser));
    } else {
        document.getElementById('msg').innerHTML = "*Passwords are not same";
        e.preventDefault();
    }
}
