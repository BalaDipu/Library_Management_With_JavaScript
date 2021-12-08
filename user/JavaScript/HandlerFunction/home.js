

let allBooks = JSON.parse(localStorage.getItem('allBooks'));


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
                    <button onclick="addToCart(${book.bookISBN})" class="bag-btn" data-id=${book.bookISBN}>
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

window.onload = displayBooks();

// show and hide in cart start
const cartBtn = document.querySelector('.cart-btn');
const closeCarBtn = document.querySelector(".close-cart");
const cartDom = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");

function showCart() {
    cartOverlay.classList.add('transparentBcg');
    cartDom.classList.add('showCart');

}
function hideCart() {
    cartOverlay.classList.remove('transparentBcg');
    cartDom.classList.remove('showCart');
}
cartBtn.addEventListener('click', this.showCart);
closeCarBtn.addEventListener('click', this.hideCart);

// show and hide in cart end
function bagButtonDisable(isbn) {
    let bagButton = document.querySelector('.bag-btn');
    let id = isbn;
    console.log(id);
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart.map(cartItem => {
        if (cartItem.bookISBN == id) {
            bagButton.innerText = "In Cart";
            bagButton.disable = true;
        }
    });

}




// add book to the cart start
function addToCart(isbn) {
    const showCartItem = document.getElementById('cart-item');
    let result = '';
    allBooks.map(book => {
        if (book.bookISBN == isbn) {
            result += `
            <img src=${book.bookCoverImage} alt="Cover Image">
                <div>
                    <h4>${book.bookTitle}</h4>
                    <h5>tk.${book.bookPrice}</h5>
                    <span class="remove-item" data-id=${book.bookISBN}>remove</span>
                </div>
                <div>
                    <i class="fas fa-chevron-up" data-id=${book.bookISBN}></i>
                    <p class="item-amount">${book.bookPrice}</p>
                    <i class="fas fa-chevron-down" data-id=${book.bookISBN}></i>
                </div>`;
            showCartItem.innerHTML += result;

            // save all cart item into cart 
            if (localStorage.getItem("cart") == null) {
                localStorage.setItem("cart", '[]');
            }

            var prevCartBook = JSON.parse(localStorage.getItem('cart'));
            prevCartBook.push({
                bookTitle: book.bookTitle,
                bookAuthor: book.bookAuthor,
                bookISBN: book.bookISBN,
                bookPrice: book.bookPrice
            });

            localStorage.setItem('cart', JSON.stringify(prevCartBook));

            //
            let amount = 0;
            let cart = JSON.parse(localStorage.getItem('cart'));
            cart.map(cartItem => {
                amount = parseInt(amount) + parseInt(cartItem.bookPrice);
                console.log(amount);
            });
            let totalAmount = document.querySelector('.cart-total');
            totalAmount.innerHTML = amount;

            //
            bagButtonDisable(isbn);

        }
    })
    // console.log(showCartItem);
}

// add book to the cart end