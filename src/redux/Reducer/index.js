const { combineReducers } = require("redux");
const { default: cartReducer } = require("./CartReducer");
const { default: countReducer } = require("./CountReducer");

export const rootReducer = combineReducers({
    card: cartReducer,
    count: countReducer
})