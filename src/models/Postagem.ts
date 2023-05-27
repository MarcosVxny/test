import Tema from "./Tema";
import User from "./User";

interface Postagem {
    id: number;
    titulo: string;
    texto: string;
    data: string;
    tema?: Tema | null; //chave estrangeira, por isso recebe o valor da classe
    // usuario: string;
} 
export default Postagem;