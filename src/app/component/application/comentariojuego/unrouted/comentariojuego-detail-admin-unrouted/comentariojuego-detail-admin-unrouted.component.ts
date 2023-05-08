import { Component, Input, OnInit } from '@angular/core';
import { IComentariojuego } from 'src/app/model/comentariojuego-interface';
import { ComentariojuegoService } from 'src/app/service/comentariojuego.service';

@Component({
  selector: 'app-comentariojuego-detail-admin-unrouted',
  templateUrl: './comentariojuego-detail-admin-unrouted.component.html',
  styleUrls: ['./comentariojuego-detail-admin-unrouted.component.css']
})
export class ComentariojuegoDetailAdminUnroutedComponent implements OnInit {

  @Input() id: number;
  oComentariojuego: IComentariojuego;

  constructor(
    private oComentariojuegoService: ComentariojuegoService
  ) { }

  ngOnInit() {
    this.getOne();
  }

  getOne() {
    this.oComentariojuegoService.getOne(this.id).subscribe({
      next: (data: IComentariojuego) => {
        this.oComentariojuego = data;
        console.log(data);
      }
    })
  }

  changeID(ev) {
    this.id = ev.target.value;
  }
}
