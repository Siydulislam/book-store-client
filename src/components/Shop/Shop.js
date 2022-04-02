import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';
import Cart from '../Cart/Cart';
import './Shop.css';

const Shop = () => {
    const [books, setBooks] = useState([]);
    const [cart, setCart] = useState([]);
    console.log(cart)

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setBooks(data))
    }, []);

    const handleAddToCart = (selectedBooks) => {
        let newCart = [];
        newCart = [...cart, selectedBooks];
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