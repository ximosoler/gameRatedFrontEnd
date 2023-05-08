import { FormControl } from "@angular/forms";

export interface IUsuario {
    id: number;
    nick: string;
    pass: string;
    tipocuenta: string;
}

export interface IUsuario2Form{
    id:             FormControl<number>;
    nick:           FormControl<string>;
    pass:           FormControl<string>;
    tipocuenta:     FormControl<string>
}

export interface IUsuario2Send{
    id: number;
    nick: string;
    pass: string;
    tipocuenta: string;
}
