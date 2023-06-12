import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/model/user-interface';
import { DecodeService } from 'src/app/service/decode.service';
import { EmitEvent, Events, SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  oFormularioLogin: FormGroup<IUser>;

  constructor(
    protected oRouter: Router,
    private oFormBuilder: FormBuilder,
    private oSessionService: SessionService,
    private oDecodeService: DecodeService

  ) {

    if (this.oSessionService.isSessionActive()) {
      this.oRouter.navigate(['/home']);      
    } 



    this.oFormularioLogin = <FormGroup>this.oFormBuilder.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });

  }

  ngOnInit() {
  }

  login() {
    this.oSessionService.login(this.oFormularioLogin.get('nick')!.value, this.oFormularioLogin.get('pass')!.value)
      .subscribe({
        next: (data: string) => {
          localStorage.setItem("token", data);
          this.oSessionService.emit(new EmitEvent(Events.login, data));
          this.oRouter.navigate(['/home']);
        },
        error: (error: HttpErrorResponse) => {
          console.log(error.status, error.statusText);
        }
      })
  }

  loginAsAdmin() {
    console.log("loginAsAdmin");
    this.oFormularioLogin.controls.nick.setValue("raivi");
    this.oFormularioLogin.controls.pass.setValue("andamio");
  }

}
