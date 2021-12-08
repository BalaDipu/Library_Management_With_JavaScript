const errorMsg = ( msg) => {
    if (msg) {
        document.getElementById('isbnMsg').innerHTML =  msg;
        setTimeout(() => {
            document.getElementById('isbnMsg').innerText = '';
        }, 4000)
    }
}

const addBook = e => {
    e.preventDefault();
    let bookData = {
        bookTitle: document.getElementById('title').value,
        bookAuthor: document.getElementById('author').value,
        bookPrice: document.getElementById('price').value,
        bookISBN: document.getElementById('isbn').value,
        bookCoverImage: document.getElementById('cover-image').value
    }

    // ISBN validation
    let flag = true;

    if (localStorage.getItem("allBooks") == null) {
        localStorage.setItem("allBooks", '[]');
    }
    const allBooks = JSON.parse(localStorage.getItem("allBooks"));
    if (allBooks) {
        allBooks.map(prevBook => {
            if (prevBook.bookISBN == bookData.bookISBN) {
                errorMsg("*ISBN must be unique!");
                flag = false;
            }
        })
        if (flag) {
            if (bookData.bookISBN.length == 10 || bookData.bookISBN.length == 13) {
                flag = true;
            } else {
                errorMsg("*ISBN must be 10 or 13 characters!");
                flag = false;
            }
        }
    }

    if (flag) {
        const filePath = document.querySelector('input[type=file]').files[0];
        const fileReader = new FileReader();

        fileReader.addEventListener("load", () => {
            if (localStorage.getItem("allBooks") == null) {
                localStorage.setItem("allBooks", '[]');
            }

            var prevBook = JSON.parse(localStorage.getItem('allBooks'));
            prevBook.push({
                bookTitle: bookData.bookTitle,
                bookAuthor: bookData.bookAuthor,
                bookISBN: bookData.bookISBN,
                bookPrice: bookData.bookPrice,
                bookCoverImage: fileReader.result
            });
            console.log(prevBook);
            localStorage.setItem('allBooks', JSON.stringify(prevBook));
            document.getElementById('title').value = ''
            document.getElementById('author').value = ''
            document.getElementById('isbn').value = ''
            document.getElementById('price').value = ''
            document.getElementById('cover-image').value = ''
            document.getElementById('success').innerHTML = 'Added Successfully!'
            document.getElementById("go_home").innerHTML = "Back home!";
            setTimeout(() => {
                document.getElementById('success').innerHTML = ''
            }, 2000)
        }, false);

        if (filePath) {
            fileReader.readAsDataURL(filePath);
        }

    }
}
// 1. Title
// 2. Author
// 3. Price
// 4. ISBN
// 5. Cover image