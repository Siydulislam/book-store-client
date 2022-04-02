import React from "react";
import "./Cart.css";

const Cart = ({ cart, books, handleClearCart }) => {
    console.log(cart, books)
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
                <button className="choose-button">
                    Choose one for me
                </button>
                <button
                    onClick={handleClearCart}
                    className='remove-button'
                    title='Clear Cart'
                >
                    Choose Again
                </button>
            </div>
        </div>
    );
};

export default Cart;