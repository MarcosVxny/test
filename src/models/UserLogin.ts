//Para fazer a conexão da página de login com o back-end
//não cria usuário, apenas retorna o que é recebido do back-end. Por isso é importante colocar exatamente a mesma estrutura do back-end
interface UserLogin {
    id: number;
    nome: string;
    usuario: string;
    senha: string;
    foto: string;
    token?:  string | null //o ponto de interrogação significa que é um campo opcional, ou seja, se estiver vazia, não afetará o objeto
    //e nesse caso que pode receber string ou ser nula
}

export default UserLogin;