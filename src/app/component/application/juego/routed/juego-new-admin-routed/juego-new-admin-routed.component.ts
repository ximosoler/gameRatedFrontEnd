import { Component, OnInit } from '@angular/core';
import { IJuego, IJuego2Form, IJuego2Send } from 'src/app/model/juego-interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JuegoService } from 'src/app/service/juego.service';

@Component({
  selector: 'app-juego-new-admin-routed',
  templateUrl: './juego-new-admin-routed.component.html',
  styleUrls: ['./juego-new-admin-routed.component.css']
})
export class JuegoNewAdminRoutedComponent implements OnInit {



  id: number = 0;
  oJuego: IJuego = null;
  oJuego2Form: IJuego2Form = null;
  oJuego2Send: IJuego2Send = null;
  oForm: FormGroup<IJuego2Form>;

  mimodal: string = "miModal";
  myModal: any;
  modalTitle: string = "";
  modalContent: string = "";


  constructor(
    private oActivatedRoute: ActivatedRoute,
    private oRouter: Router,
    private oJuegoService: JuegoService,
    private oFormBuilder: FormBuilder
  ) {
    this.id = this.oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.getOne();
  }

  getOne() {
    this.oJuegoService.getOne(this.id).subscribe({
      next:(data:IJuego)=>{
        this.oJuego= data;
        console.log(data);
        this.oForm = <FormGroup>this.oFormBuilder.group({
          id: [data.id, [Validators.required]],
          titulo: [data.titulo, [Validators.required]],
          desarrolladora: [data.desarrolladora, [Validators.required]],
          plataforma: [data.plataforma, [Validators.required]],
          fechasalida: [data.fechasalida, [Validators.required]],
          genero: [data.genero, [Validators.required]],
          duracion: [data.duracion, [Validators.required]]

        })
      }
    })
  }



}
