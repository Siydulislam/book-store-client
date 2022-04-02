import React, { useState } from "react";
import "./Cart.css";

const Cart = ({ cart, handleClearCart }) => {
    const [chosenBook, setChosenBook] = useState({});
    console.log(chosenBook)

    const handleChosenBook = () => {
        const randomNumber = Math.floor(Math.random() * cart.length);
        const book = cart[randomNumber];
        setChosenBook(book);
    };

    return (
        <div className='cart'>
            <div className='cart-header'>
                <h1>Selected Books</h1>
            </div>
            {cart.map((books, index) => (
                <div key={index} className='cart-item'>
                    <img src={books.image} alt='' />
                    <div>
                        <h4>{books.name}</h4>
                        <h5>{books.author}</h5>
                    </div>
                </div>
            ))}
            <div>
                <button className="choose-button" onClick={handleChosenBook}>
                    Choose one for me
                </button>
                {Object.keys(chosenBook).length > 0 && (
                    <div className='cart-item'>
                        <img src={chosenBook.image} alt='' />
                        <div>
                            <h4>{chosenBook.name}</h4>
                            <h5>{chosenBook.author}</h5>
                        </div>
                    </div>
                )}
                <button
                    onClick={handleClearCart}
                    className='remove-button'
                >
                    Choose Again
                </button>
            </div>
        </div>
    );
};

export default Cart;