import { Component, Input, OnInit } from '@angular/core';
import { IJuego } from 'src/app/model/juego-interface';
import { JuegoService } from 'src/app/service/juego.service';
@Component({
  selector: 'app-juego-detail-admin-unrouted',
  templateUrl: './juego-detail-admin-unrouted.component.html',
  styleUrls: ['./juego-detail-admin-unrouted.component.css']
})
export class JuegoDetailAdminUnroutedComponent implements OnInit {

  @Input() id: number;
  oJuego: IJuego;

  constructor(
    private oJuegoService: JuegoService
  ) { }

  ngOnInit() {
    this.getOne();
  }

  getOne() {
    this.oJuegoService.getOne(this.id).subscribe({
      next: (data: IJuego) => {
        this.oJuego = data;
        console.log(data);
      }
    })
  }

  changeID(ev) {
    this.id = ev.target.value;
  }

}
