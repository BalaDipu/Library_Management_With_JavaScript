const signIn = e => {
    let signUpData = {
        userEmail: document.getElementById('email').value,
        userPassword: document.getElementById('password').value,
    };
    console.log(signUpData);
    var users = JSON.parse(localStorage.getItem("allUsers"));
    var flag =true;
    users.map(user=>{
        if(user.userEmail === signUpData.userEmail && user.userPassword === signUpData.userPassword){
            flag =false;
        }
    })
   if(flag){
    document.getElementById('msg').innerHTML = "*Please sign up. You have no account!!";
    e.preventDefault();
   }
}
