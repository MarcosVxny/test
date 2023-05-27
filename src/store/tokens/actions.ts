//Ação relacionada a adição de token. Utilizar o token para que ele valide dentro da API

//funções para definir as estruturas dos objetos 
export type Action = { //criando uma tipagem chamada action - objeto com dois parâmetros
    type: "ADD_TOKEN"; 
    payload: string //payload guarda uma informação, no caso o token

} 


export const addToken = (token: string): Action => ({ //usa a tipagem da função de  cima 
    type: "ADD_TOKEN",
    payload: token //adiciona um token
});