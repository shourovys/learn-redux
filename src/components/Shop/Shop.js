import React from 'react';
import ShowProduct from './ShowProduct';
import { addToCart, removeFormCart } from '../../redux/Action/CartAction';
import { connect } from 'react-redux';


const Shop = (props) => {
    const { products, addToCart, cart } = props
    console.log('state', cart);

    return (
        <div>
            {products &&
                products.map(
                    pd => <ShowProduct
                        product={pd}
                        key={pd.id}
                        addToCart={addToCart}
                    />)
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        products: state.card.products,
        cart: state.card.cart,
    }
}

const mapDispatchToProps = {
    addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);