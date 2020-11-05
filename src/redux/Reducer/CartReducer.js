const { ADD_TO_CART, REMOVE_FORM_CART } = require("../Action/CartAction");

const initialState = {
    cart: [],
    products: [
        { name: "HP laptop", id: 1 },
        { name: "Assoso laptop", id: 2 },
        { name: "Appale laptop", id: 3 },
        { name: "HR laptop", id: 4 },
        { name: "Lanavo laptop", id: 5 },
        { name: "pop laptop", id: 6 },
        { name: "song laptop", id: 7 }
    ]
}


const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.id]
            }

        case REMOVE_FORM_CART:
            const remainCartProductsId = state.cart.filter(cartProductId => cartProductId !== action.id)
            return {
                ...state,
                cart: remainCartProductsId
            }
        default:
            return state
    }
}

export default cartReducer