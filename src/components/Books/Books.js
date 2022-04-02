import React from 'react';
import './Books.css';
import { BsCartPlus } from 'react-icons/bs';

const Books = (book) => {
    const { name, author, image, price } = book.book;
    console.log(book.book)
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
            <button className="cart-button">
                <p className="cart-text">Add to Cart</p>
                <BsCartPlus />
            </button>
        </div>
    );
};

export default Books;