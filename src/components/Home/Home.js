import React from 'react';
import Books from '../Books/Books';
import Cart from '../Cart/Cart';

const Home = () => {
    return (
        <div>
            <h1>I am Home</h1>
            <Books></Books>
            <Cart></Cart>
        </div>
    );
};

export default Home;