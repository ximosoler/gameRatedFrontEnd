import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { IUsuario, IUsuario2Form, IUsuario2Send } from 'src/app/model/usuario-interface';

declare let bootstrap: any;

@Component({
  selector: 'app-usuario-new-admin-routed',
  templateUrl: './usuario-new-admin-routed.component.html',
  styleUrls: ['./usuario-new-admin-routed.component.css']
})
export class UsuarioNewAdminRoutedComponent implements OnInit {

 
  id: number = 0;
  oUsuario: IUsuario = null;
  oUsuario2Form: IUsuario2Form = null;
  oUsuario2Send: IUsuario2Send = null;
  oForm: FormGroup<IUsuario2Form>;

  mimodal: string = "miModal";
  myModal: any;
  modalTitle: string = "";
  modalContent: string = "";


  constructor(
    private oActivatedRoute: ActivatedRoute,
    private oRouter: Router,
    private oUsuarioService: UsuarioService,
    private oFormBuilder: FormBuilder
  ) {
    this.id = this.oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.getOne();
  }

  getOne() {
    this.oUsuarioService.getOne(this.id).subscribe({
      next:(data:IUsuario)=>{
        this.oUsuario= data;
        console.log(data);
        this.oForm = <FormGroup>this.oFormBuilder.group({
          id: [data.id, [Validators.required]],
          nick: [data.nick, [Validators.required]],
          pass: [data.pass, [Validators.required]],
          tipocuenta: [data.pass, [Validators.required]]
        })
      }
    })
  }



}
