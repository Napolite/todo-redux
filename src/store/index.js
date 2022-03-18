import { createStore } from "redux";
import reducer from "../reducers";

const initialState = { todo: [], textboxIsOpen: false };

export const store = createStore(reducer, initialState);
