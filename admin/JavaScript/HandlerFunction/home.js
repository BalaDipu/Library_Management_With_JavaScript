let allBooks = JSON.parse(localStorage.getItem('allBooks'));

// Display all Books 
function displayBooks() {
    const showBooks = document.getElementById('books-center');
    let result = '';
    allBooks.map(book => {
        result += `
             <!--single book-->
            <article class="book">
            <h3>${book.bookTitle}</h3>
                <div class="img-container">
                    <img src=${book.bookCoverImage} alt="book" class="book-img">
                    <button data-toggle="modal" data-target="#myModal1" onclick ="editWindow(${book.bookISBN})" id = "edit-btn" class="edit-btn" data-id=${book.bookISBN}>
                        edit book
                    </button>
                </div>
                <h3>${book.bookAuthor}</h3>
                <h4>tk.${book.bookPrice}</h4>
            </article>
            <!--single book end-->     
       `;
        showBooks.innerHTML = result
    });
}

window.onload = displayBooks();

// Edit book 
function editWindow(isbn) {
    const modalWindow = document.getElementById('modal-body');
    let result = '';
    allBooks.map(book => {
        if (book.bookISBN == isbn) {
            result = `  
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <div class="edit-header">
             <h2>Edit this book</h2>
             </div>
            <form id="form_id" role="form" onsubmit="Update(event)">
                <div class="form-grp">
                    <input type="text" value="${book.bookTitle}" name="title" id="title" required>
                    <div id="titleMsg"></div>
                </div>
                <div class="form-grp">
                    <input type="text" value="${book.bookAuthor}" name="author" id="author" required>
                </div>
                <div class="form-grp">
                    <input type="number" value="${book.bookPrice}" name="price" id="price" required>
                </div>
                <div class="form-grp">
                    <input type="text" value="${book.bookISBN}" disabled name="isbn" id="isbn" required>
                    <div id="isbnMsg"></div>
                </div>
                <div class="form-grp">
                    <input type="file" name="file" accept=".jpg, .gif, .jpeg, .png, .PSD" id="cover-image"
                        placeholder="Cover Image" name="myfile" multiple><br><br>
                </div>
                <div class="edit-submit">
                    <button id="update" type="submit">Submit</button>
                </div>
                <div class="success" id="success"></div>
                <a class="go_home" id="go_home" href="./home.html"></a>
            </form>`;
            modalWindow.innerHTML = result;
        }
    })
}


function updateArray(key, index, updatedValue) {
    var array = JSON.parse(localStorage.getItem(key));
    array[index] = updatedValue;
    localStorage.setItem(key, JSON.stringify(array));
}

function Update(e){
    e.preventDefault();
    let updateBook = {
        bookTitle: document.getElementById('title').value,
        bookAuthor: document.getElementById('author').value,
        bookISBN: document.getElementById('isbn').value,
        bookPrice: document.getElementById('price').value,
        bookCoverImage: document.querySelector('input[type=file]').files[0]
    }
    if (updateBook.bookCoverImage) {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            let books = JSON.parse(localStorage.getItem('allBooks'))
            books.map((book, index) => {
                if (book.bookISBN == updateBook.bookISBN) {
                    updateBook.bookCoverImage = reader.result;
                    updateArray('allBooks', index, updateBook);
                    return;
                }
            })
        }, false);
        reader.readAsDataURL(updateBook.bookCoverImage);
    } else {
        let books = JSON.parse(localStorage.getItem('allBooks'))
        books.map((book, index) => {
            if (book.bookISBN == updateBook.bookISBN) {
                updateBook.bookCoverImage = book.bookCoverImage;
                updateArray('allBooks', index, updateBook);
                return;
            }
        })
    }
    let allBooks = document.getElementById('books-center');
    allBooks.innerHTML = ''
    displayBooks();
    document.getElementById('update').setAttribute('data-dismiss', 'modal');
}
// Update();