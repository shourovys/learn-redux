import { rootReducer } from "../Reducer";
const { createStore } = require("redux");

export const store = createStore(rootReducer)