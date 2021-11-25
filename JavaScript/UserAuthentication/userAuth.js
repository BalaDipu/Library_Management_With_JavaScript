let user = JSON.parse(localStorage.getItem("loginUsers"));
if (!user) {
    window.open("../HTML_File/home.html", "_self");
}