import React from 'react';
import { connect } from 'react-redux';
import { increaseNum, decreaseNum } from '../../redux/Action/CountAction';

const Count = (props) => {
    const { count, increaseNum, decreaseNum } = props


    return (
        <div>
            <button onClick={increaseNum}>+</button>
            <span>{count.count}</span>
            <button onClick={decreaseNum}>-</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { count: state.count }
}
const mapDispatchToProps = { increaseNum, decreaseNum }

export default connect(mapStateToProps, mapDispatchToProps)(Count);