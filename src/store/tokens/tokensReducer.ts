import { Action } from "./actions";

//Model | estados do app | definindo como os estados estão iniciando
export interface TokenState {
    tokens: string //seria a etiqueta com as informações
}

//definindo valor inicial para o token
const initialState = {
    tokens: ""
}

// function que tem como parâmetros dois objetos TokenState(que inicia com valor vazio, para que esse valor seja atribuido posteriormente) e action
export const tokenReducer = (state: TokenState = initialState, action: Action) => {
    switch(action.type) {
        case 'ADD_TOKEN': { //se type for do tipo ADD_TOKEN, retornará o payload(token)
            return {tokens: action.payload} //atualiza o estado global do estado
        }

        default:
            return state // caso contário, irá retornar o state em seu estado original, ou seja, vazio
    }
}