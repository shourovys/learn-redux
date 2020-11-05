export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FORM_CART = "REMOVE_FORM_CART"


export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        id: id
    }
}

export const removeFormCart = (id) => {
    return {
        type: REMOVE_FORM_CART,
        id: id
    }
}