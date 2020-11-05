const { INCREASE_NUMBER, DECREASE_NUMBER } = require("../Action/CountAction");

const countState = {
    count: 0
}

const countReducer = (state = countState, action) => {
    switch (action.type) {
        case INCREASE_NUMBER:
            return {
                count: state.count + 1
            }
        case DECREASE_NUMBER:
            return {
                count: state.count - 1
            }
        default:
            return state
    }
}

export default countReducer