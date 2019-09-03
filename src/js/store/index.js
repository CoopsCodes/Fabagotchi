import { createStore } from "redux";
import rootReducer from "../reducers/index";

// store is the bank of where the redux state gets kept
const store = createStore(rootReducer);

export default store;
