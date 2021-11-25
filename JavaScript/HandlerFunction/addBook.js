const addBook = e=>{
    let bookData = {
        bookTitle: document.getElementById('title').value,
        bookAuthor: document.getElementById('author').value,
        bookPrice: document.getElementById('price').value,
        bookISBN: document.getElementById('isbn').value,
        bookCoverImage: document.getElementById('cover-image').value
    }
    // Name Validation
    
    // ISBN validation 

    // Image validation 

    if (localStorage.getItem("allBooks") == null) {
        localStorage.setItem("allBooks", '[]');
    }

    var prevBook = JSON.parse(localStorage.getItem('allBooks'));
    prevBook.push(bookData);
    localStorage.setItem('allBooks', JSON.stringify(prevBook));
    e.preventDefault();
}

function addAnother(){
    document.getElementById("add_another").innerHTML="Add another book!";
}

function backHome() {
    document.getElementById("go_home").innerHTML = "Back home!";
}
// 1. Title
// 2. Author
// 3. Price
// 4. ISBN
// 5. Cover image