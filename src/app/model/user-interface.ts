import { FormControl } from "@angular/forms";

export interface IUser {
    nick: FormControl<string>;
    pass: FormControl<string>;
}
