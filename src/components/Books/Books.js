import React from 'react';
import './Books.css';
import { BsCartPlus } from 'react-icons/bs';

const Books = ({ book, handleAddToCart }) => {
    const { name, author, image, price } = book;
    return (
        <div className="book-card">
            <div className="image-container">
                <img src={image} alt="" />
            </div>
            <div className="book-info">
                <div>
                    <h2>{name}</h2>
                    <p>{author}</p>
                    <small>${price}</small>
                </div>
            </div>
            <button className="cart-button" onClick={() => handleAddToCart(book)}>
                <p className="cart-text">Add to Cart</p>
                <BsCartPlus />
            </button>
        </div>
    );
};

export default Books;