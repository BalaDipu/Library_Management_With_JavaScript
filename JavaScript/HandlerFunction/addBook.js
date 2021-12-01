const addBook = e => {
    let bookData = {
        bookTitle: document.getElementById('title').value,
        bookAuthor: document.getElementById('author').value,
        bookPrice: document.getElementById('price').value,
        bookISBN: document.getElementById('isbn').value,
        bookCoverImage: document.getElementById('cover-image').value
    }
    // Name Validation
    function titleValidate(bookTitle) {
        if (bookTitle.length < 3) {
            document.getElementById('titleMsg').innerHTML = "*Your bookTitle must be at least 3 characters";
            e.preventDefault();
        }
        return true;
    }
    titleValidate(bookData.bookTitle);


    // ISBN validation
 function isValidIsbn(bookISBN) {
        try{
            if(!/^\d{9}[\d|X]$/.test(bookISBN)){
                document.getElementById('isbnMsg').innerHTML = "*Invalid ISBN";
                e.preventDefault();
                return false;
             }
             return true;
        }catch(err){
            console.log(err.name);
        }
 }
     isValidIsbn(bookData.bookISBN);

    // Image validation 
    function imageValidate(imageName) {

    }

    if (localStorage.getItem("allBooks") == null) {
        localStorage.setItem("allBooks", '[]');
    }

    var prevBook = JSON.parse(localStorage.getItem('allBooks'));
    prevBook.push(bookData);
    localStorage.setItem('allBooks', JSON.stringify(prevBook));
    e.preventDefault();
}

function addAnother() {
    document.getElementById("add_another").innerHTML = "Add another book!";
}

function backHome() {
    document.getElementById("go_home").innerHTML = "Back home!";
}
// 1. Title
// 2. Author
// 3. Price
// 4. ISBN
// 5. Cover image