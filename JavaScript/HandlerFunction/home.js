class Products {
    async getProducts() {
        try {
            let result =await JSON.parse(localStorage.getItem('allBooks'));

            let products = result.map(item => {
                const  title = item.bookTitle;
                const author = item.bookAuthor;
                const image = item.bookCoverImage;
                const price = item.bookPrice;
                const isbn = item.bookISBN;
                return { title,author, price, isbn, image };
            });
            return products;
        } catch (error) {
            console.log(error);
        }
    }
}

class UI {
    displayProducts(products) {
        let result = '';
        products.forEach(product => {
            result += `
         <!--single product-->
        <article class="product">
            <div class="img-container">
                <img src=${product.image} alt="product" class="product-img">
                <button class="bag-btn" data-id=${product.id}>
                    <i class="fas fa-shopping-cart"> </i>
                    add to cart
                </button>
            </div>
            <h3>${product.title}</h3>
            <h4>tk.${product.price}</h4>
        </article>
        <!--single product end-->     
   `;
        });
        productsDom.innerHTML = result;
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const ui = new UI();
    const products = new Products();
    //setup app
    ui.setupApp();

    //get all products
    products
        .getProducts()
        .then(products => {
            ui.displayProducts(products)
            Storage.saveProducts(products);
        }).then(() => {
            ui.getBagButtons();
            ui.cartLogic();
        });

});