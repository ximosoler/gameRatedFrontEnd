import { IJuego } from "./juego-interface";
import { IUsuario } from "./usuario-interface";
import { FormControl } from "@angular/forms";


export interface IComentariojuego {
    id: number;
    texto: string;
    usuario: IUsuario;
    juego: IJuego;
}
   

export interface IComentariojuego2Form{
    id: FormControl<number>;
    texto: FormControl<string>;
    fechahora: FormControl<Date>;
    usuario: FormControl<IUsuario>;
    juego: FormControl<IJuego>;
    comentariojuego: FormControl<IComentariojuego>;
}

export interface IComentariojuego2Send{
    id: number;
    texto: string;
    fechahora: Date;
    usuario: IUsuario;
    juego: IJuego;
    comentariojuego: IComentariojuego;
}
