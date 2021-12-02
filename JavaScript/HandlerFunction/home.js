let allBooks = JSON.parse(localStorage.getItem('allBooks'));
// allBooks.innerHTML = ''
// let products = result.map(item => {
//     const title = item.bookTitle;
//     const author = item.bookAuthor;
//     const image = item.bookCoverImage;
//     const price = item.bookPrice;
//     const isbn = item.bookISBN;
// });

function displayProducts(){
    const showBooks = document.getElementById('books-center');
    let result = '';
    allBooks.map(book => {
        result += `
             <!--single book-->
            <article class="book">
            <h3>${book.bookTitle}</h3>
                <div class="img-container">
                    <img src=${book.bookCoverImage} alt="book" class="book-img">
                    <button class="bag-btn" data-id=${book.bookISBN}>
                        <i class="fas fa-shopping-cart"> </i>
                        add to cart
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
  
window.onload = displayProducts();
