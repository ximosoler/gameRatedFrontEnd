import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JuegoService } from 'src/app/service/juego.service';
import { Location } from '@angular/common';

declare let bootstrap: any;

@Component({
  selector: 'app-juego-remove-admin-routed',
  templateUrl: './juego-remove-admin-routed.component.html',
  styleUrls: ['./juego-remove-admin-routed.component.css']
})
export class JuegoRemoveAdminRoutedComponent implements OnInit {

id: number = 0;
  msg: string = "";

  constructor(
    protected oLocation: Location,
    private oActivatedRoute: ActivatedRoute,
    private oJuegoService: JuegoService,
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
  }

  removeOne() {
    this.oJuegoService.removeOne(this.id).subscribe({
      next: (data: number) => {
        this.msg = "Usuario " + this.id + " removed";
        const myModal = new bootstrap.Modal('#removeInfo', {
          keyboard: false
        })
        myModal.show();        
        this.oLocation.back();
      }
    })
  }
}
