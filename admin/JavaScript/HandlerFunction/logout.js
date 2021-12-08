const logout = e=>{
    localStorage.removeItem('userLog');
    window.open('../../HTML_File/signIn.html','_self');
}