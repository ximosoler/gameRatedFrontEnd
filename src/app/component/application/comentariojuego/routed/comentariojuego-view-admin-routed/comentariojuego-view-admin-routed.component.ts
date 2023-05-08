import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IComentariojuego } from 'src/app/model/comentariojuego-interface';

@Component({
  selector: 'app-comentariojuego-view-admin-routed',
  templateUrl: './comentariojuego-view-admin-routed.component.html',
  styleUrls: ['./comentariojuego-view-admin-routed.component.css']
})
export class ComentariojuegoViewAdminRoutedComponent implements OnInit {

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