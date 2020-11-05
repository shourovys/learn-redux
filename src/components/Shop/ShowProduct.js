import React from 'react';

const ShowProduct = ({ addToCart, product }) => {
    const { name, id } = product
    return (
        <div>
            <h3>Name: {name}</h3>
            <button onClick={() => addToCart(id)}>add to cart</button>
        </div>
    );
};

export default ShowProduct;