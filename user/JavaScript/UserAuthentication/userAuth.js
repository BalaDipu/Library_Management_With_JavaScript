let user = JSON.parse(localStorage.getItem("userLog"));
if (!user) {
    window.open("../HTML_File/index.html", "_self");
}