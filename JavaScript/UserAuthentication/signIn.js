const signIn = e => {
    let signInData = {
        userEmail: document.getElementById('email').value,
        userPassword: document.getElementById('password').value,
    };
    var users = JSON.parse(localStorage.getItem("allUsers"));
    var flag = true;
    users.map(user => {
        if (user.userEmail === signInData.userEmail && user.userPassword === signInData.userPassword) {
            if (localStorage.getItem("loginUsers") == null) {
                localStorage.setItem("loginUsers", '[]');
            }
            var oldUser = JSON.parse(localStorage.getItem('loginUsers'));
            oldUser.push(signInData);
            localStorage.setItem('loginUsers', JSON.stringify(oldUser));
            flag = false;
        }
    })
    if (flag) {
        document.getElementById('msg').innerHTML = "*Please sign up. You have no account!!";
        e.preventDefault();
    }

}
