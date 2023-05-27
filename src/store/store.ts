// store.ts - gerencia os estados da aplicação
import { createStore } from "redux";
import { tokenReducer } from "./tokens/tokensReducer";

const store = createStore(tokenReducer); //Reducer recebe as ações e armazena as informações dentro do store

export default store;