import React from 'react';
import { connect } from 'react-redux';
import { removeFormCart } from '../../redux/Action/CartAction';

const Cart = ({ cart, removeFormCart }) => {

    return (
        <div>
            {
                cart &&
                cart.map(id => <li key={id}>{id} <button onClick={() => removeFormCart(id)}>X</button></li>)
            }
        </div>
    );
};
const mapStateToProps = state => {
    return { cart: state.card.cart }
}
const mapDispatchToProps = { removeFormCart }

export default connect(mapStateToProps, mapDispatchToProps)(Cart);