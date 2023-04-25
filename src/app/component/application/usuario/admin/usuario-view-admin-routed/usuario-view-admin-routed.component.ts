import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUsuario } from 'src/app/model/usuario-interface';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario-view-admin-routed',
  templateUrl: './usuario-view-admin-routed.component.html',
  styleUrls: ['./usuario-view-admin-routed.component.css']
})
export class UsuarioViewAdminRoutedComponent {

  id: number;

  constructor(
    private oActivatedRoute: ActivatedRoute,
    protected oRouter: Router,
    private oUsuarioService: UsuarioService
  ) {
    console.log("hola usuario view")
    this.id = this.oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getOne();
  }

  getOne() {
    this.oUsuarioService.getOne(this.id).subscribe({
      next:(data:IUsuario)=>{
        console.log(data);
      }
    })
  }

}

