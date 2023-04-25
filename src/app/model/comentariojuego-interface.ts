import { IJuego } from "./juego-interface";
import { IUsuario } from "./usuario-interface";

export interface IComentariojuego {
    id: number;
    texto: string;
    fechahora: Date;
    usuario: IUsuario;
    juego: IJuego;
    comentariojuego: IComentariojuego;
}
