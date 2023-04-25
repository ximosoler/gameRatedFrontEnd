import { IJuego } from "./juego-interface";
import { IUsuario } from "./usuario-interface";

export interface IValoracionjuego {
    id: number;
    usuario: IUsuario;
    juego: IJuego;
    nota: number;
}
