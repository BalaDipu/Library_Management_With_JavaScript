let user = JSON.parse(localStorage.getItem("userLog"));
if (user) {
    window.open("../HTML_File/home.html", "_self");
}