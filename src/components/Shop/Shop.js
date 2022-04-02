import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';
import Cart from '../Cart/Cart';
import './Shop.css';

const Shop = () => {
    const [books, setBooks] = useState([]);
    console.log(books)

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setBooks(data))
    }, []);

    return (
        <div className="shop-container">
            <div className="books-container">
                {books.map((book, index) => {
                    return (
                        <Books
                            key={index}
                            book={book}
                        />
                    )
                })}
            </div>
        </div>
    );
};

export default Shop;