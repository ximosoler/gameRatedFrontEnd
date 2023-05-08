import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ValoracionjuegoService } from 'src/app/service/valoracionjuego.service';
import { Location } from '@angular/common';

declare let bootstrap: any;

@Component({
  selector: 'app-valoracionjuego-remove-admin-routed',
  templateUrl: './valoracionjuego-remove-admin-routed.component.html',
  styleUrls: ['./valoracionjuego-remove-admin-routed.component.css']
})
export class ValoracionjuegoRemoveAdminRoutedComponent implements OnInit {

  id: number = 0;
  msg: string = "";

  constructor(
    protected oLocation: Location,
    private oActivatedRoute: ActivatedRoute,
    private oValoracionjuegoService: ValoracionjuegoService,
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
  }

  removeOne() {
    this.oValoracionjuegoService.removeOne(this.id).subscribe({
      next: (data: number) => {
        this.msg = "Valoracion " + this.id + " removed";
        const myModal = new bootstrap.Modal('#removeInfo', {
          keyboard: false
        })
        myModal.show();        
        this.oLocation.back();
      }
    })
  }
}