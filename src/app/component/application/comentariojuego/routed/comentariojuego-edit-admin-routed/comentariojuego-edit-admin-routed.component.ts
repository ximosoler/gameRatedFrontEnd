import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IComentariojuego, IComentariojuego2Form, IComentariojuego2Send } from 'src/app/model/comentariojuego-interface';
import { ActivatedRoute, Router } from '@angular/router';
import { ComentariojuegoService } from 'src/app/service/comentariojuego.service';

@Component({
  selector: 'app-comentariojuego-edit-admin-routed',
  templateUrl: './comentariojuego-edit-admin-routed.component.html',
  styleUrls: ['./comentariojuego-edit-admin-routed.component.css']
})
export class ComentariojuegoEditAdminRoutedComponent implements OnInit {

  id: number = 0;
  oComentariojuego: IComentariojuego = null;
  oComentariojuego2Form: IComentariojuego2Form = null;
  oComentariojuego2Send: IComentariojuego2Send = null;
  oForm: FormGroup<IComentariojuego2Form>;

  mimodal: string = "miModal";
  myModal: any;
  modalTitle: string = "";
  modalContent: string = "";


  constructor(
    private oActivatedRoute: ActivatedRoute,
    private oRouter: Router,
    private oComentariojuegoService: ComentariojuegoService,
    private oFormBuilder: FormBuilder
  ) {
    this.id = this.oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.getOne();
  }

  getOne() {
    this.oComentariojuegoService.getOne(this.id).subscribe({
      next:(data:IComentariojuego)=>{
        this.oComentariojuego= data;
        console.log(data);
        this.oForm = <FormGroup>this.oFormBuilder.group({
          id: [data.id, [Validators.required]],
          texto: [data.texto, [Validators.required]],
          fechahora: [data.fechahora, [Validators.required]],
          /*id_usuario: [data.id_usuario, [Validators.required]]*/
          /*id_juego: [data.id_juego, [Validators.required]]*/
          /*id_comentariojuego: [data.id_comentariojuego, [Validators.required]]*/


          
        })
      }
    })
  }



}
