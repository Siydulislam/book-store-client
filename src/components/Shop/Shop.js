import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';
import Cart from '../Cart/Cart';
import './Shop.css';

const Shop = () => {
    const [books, setBooks] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setBooks(data))
    }, []);

    const handleAddToCart = (selectedBook) => {
        let newCart = [];

        // if (cart.length == 4) {
        //     alert("You can not choose more than 4 books!");
        // }

        const exist = cart.find(book => book.id == selectedBook.id);

        if (!exist) {
            newCart = [...cart, selectedBook];
        } else {
            alert("Already added!!!");
            const rest = cart.filter((product) => product.id != selectedBook.id);
            newCart = [...rest, selectedBook];
        }
        setCart(newCart);
    };

    const handleClearCart = () => {
        setCart([]);
    }

    return (
        <div className="shop-container">
            <div className="books-container">
                {books.map((book, index) => (
                    <Books
                        key={index}
                        book={book}
                        handleAddToCart={handleAddToCart}
                    />
                ))}
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    books={books}
                    handleClearCart={handleClearCart}
                />
            </div>
        </div>
    );
};

export default Shop;