import { createStore, combineReducers } from "redux";
import todoListReducer from "../components/module/reducer";
const rootReducer = combineReducers({
  todoListReducer,
});

export const store = createStore(rootReducer);
