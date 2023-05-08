import { FormControl } from "@angular/forms";


export interface IJuego {
    id: number;
    titulo: string;
    desarrolladora: string;
    plataforma: string;
    fechasalida: Date;
    genero: string;
    duracion: number;
}

export interface IJuego2Form{
    id: FormControl<number>;
    titulo: FormControl<string>;
    desarrolladora: FormControl<string>;
    plataforma: FormControl<string>;
    fechasalida: FormControl<Date>;
    genero: FormControl<string>;
    duracion: FormControl<number>;
}

export interface IJuego2Send{
    id: number;
    titulo: string;
    desarrolladora: string;
    plataforma: string;
    fechasalida: Date;
    genero: string;
    duracion: number;
}