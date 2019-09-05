import { createStore } from "redux";
import reducer from "./js/reducers/index";

// store is the bank of where the redux state gets kept
const store = createStore(reducer);

export default store;
