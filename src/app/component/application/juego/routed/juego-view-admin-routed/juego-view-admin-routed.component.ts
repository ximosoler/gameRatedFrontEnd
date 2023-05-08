import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IJuego } from 'src/app/model/juego-interface';

@Component({
  selector: 'app-juego-view-admin-routed',
  templateUrl: './juego-view-admin-routed.component.html',
  styleUrls: ['./juego-view-admin-routed.component.css']
})
export class JuegoViewAdminRoutedComponent implements OnInit {

  id: number = 0;

  constructor(
    private oActivatedRoute: ActivatedRoute,
    private oRouter: Router,
  ) {


    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {

  }
}
