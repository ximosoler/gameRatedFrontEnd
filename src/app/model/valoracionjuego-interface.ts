import { FormControl } from "@angular/forms";
import { IJuego } from "./juego-interface";
import { IUsuario } from "./usuario-interface";

export interface IValoracionjuego {
    id: number;
    usuario: IUsuario;
    juego: IJuego;
    nota: number;
}

export interface IValoracionjuego2Form{
    id: FormControl<number>;
    usuario: FormControl<IUsuario>;
    juego: FormControl<IJuego>;
    nota: FormControl<number>;
}

export interface IValoracionjuego2Send{
    id: number;
    usuario: IUsuario;
    juego: IJuego;
    nota: number;
}
