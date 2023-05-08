import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IValoracionjuego, IValoracionjuego2Form, IValoracionjuego2Send } from 'src/app/model/valoracionjuego-interface';
import { ValoracionjuegoService } from 'src/app/service/valoracionjuego.service';

@Component({
  selector: 'app-valoracionjuego-new-admin-routed',
  templateUrl: './valoracionjuego-new-admin-routed.component.html',
  styleUrls: ['./valoracionjuego-new-admin-routed.component.css']
})
export class ValoracionjuegoNewAdminRoutedComponent implements OnInit {

  id: number = 0;
  oValoracionjuego: IValoracionjuego = null;
  oValoracionjuego2Form: IValoracionjuego2Form = null;
  oValoracionjuego2Send: IValoracionjuego2Send = null;
  oForm: FormGroup<IValoracionjuego2Form>;

  mimodal: string = "miModal";
  myModal: any;
  modalTitle: string = "";
  modalContent: string = "";


  constructor(
    private oActivatedRoute: ActivatedRoute,
    private oRouter: Router,
    private oValoracionjuegoService: ValoracionjuegoService,
    private oFormBuilder: FormBuilder
  ) {
    this.id = this.oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.getOne();
  }

  getOne() {
    this.oValoracionjuegoService.getOne(this.id).subscribe({
      next:(data:IValoracionjuego)=>{
        this.oValoracionjuego= data;
        console.log(data);
        this.oForm = <FormGroup>this.oFormBuilder.group({
          id: [data.id, [Validators.required]],
          /*id_usuario: [data.id_usuario, [Validators.required]]*/
          /*id_juego: [data.id_juego, [Validators.required]]*/
          nota: [data.nota, [Validators.required]]


          
        })
      }
    })
  }



}