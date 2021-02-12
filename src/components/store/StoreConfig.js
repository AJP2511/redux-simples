import { createStore, combineReducers } from "redux";

const reducers = combineReducers({
  numeros: (state, action) => {
    return {
      min: 7,
      max: 31,
    };
  },
  nomes: (state, action) => {
    return ["Akemi", "Toddy", "Lilica", "Allan"];
  },
});

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;
