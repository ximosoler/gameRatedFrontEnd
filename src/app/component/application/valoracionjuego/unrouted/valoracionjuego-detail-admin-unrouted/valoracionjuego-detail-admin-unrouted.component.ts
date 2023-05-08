import { Component, Input, OnInit } from '@angular/core';
import { IValoracionjuego } from 'src/app/model/valoracionjuego-interface';
import { ValoracionjuegoService } from 'src/app/service/valoracionjuego.service';

@Component({
  selector: 'app-valoracionjuego-detail-admin-unrouted',
  templateUrl: './valoracionjuego-detail-admin-unrouted.component.html',
  styleUrls: ['./valoracionjuego-detail-admin-unrouted.component.css']
})
export class ValoracionjuegoDetailAdminUnroutedComponent implements OnInit {

  @Input() id: number;
  oValoracionjuego: IValoracionjuego;

  constructor(
    private oValoracionjuegoService: ValoracionjuegoService
  ) { }

  ngOnInit() {
    this.getOne();
  }

  getOne() {
    this.oValoracionjuegoService.getOne(this.id).subscribe({
      next: (data: IValoracionjuego) => {
        this.oValoracionjuego = data;
        console.log(data);
      }
    })
  }

  changeID(ev) {
    this.id = ev.target.value;
  }
}