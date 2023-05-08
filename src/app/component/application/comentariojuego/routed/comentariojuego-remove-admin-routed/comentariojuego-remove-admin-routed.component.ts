import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComentariojuegoService } from 'src/app/service/comentariojuego.service';
import { Location } from '@angular/common';

declare let bootstrap: any;

@Component({
  selector: 'app-comentariojuego-remove-admin-routed',
  templateUrl: './comentariojuego-remove-admin-routed.component.html',
  styleUrls: ['./comentariojuego-remove-admin-routed.component.css']
})
export class ComentariojuegoRemoveAdminRoutedComponent implements OnInit {

  id: number = 0;
  msg: string = "";

  constructor(
    protected oLocation: Location,
    private oActivatedRoute: ActivatedRoute,
    private oComentariojuegoService: ComentariojuegoService,
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
  }

  removeOne() {
    this.oComentariojuegoService.removeOne(this.id).subscribe({
      next: (data: number) => {
        this.msg = "Comentario " + this.id + " removed";
        const myModal = new bootstrap.Modal('#removeInfo', {
          keyboard: false
        })
        myModal.show();        
        this.oLocation.back();
      }
    })
  }
}
