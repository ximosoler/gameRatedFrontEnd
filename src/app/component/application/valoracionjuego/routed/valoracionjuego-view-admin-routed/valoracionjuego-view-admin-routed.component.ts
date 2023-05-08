import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-valoracionjuego-view-admin-routed',
  templateUrl: './valoracionjuego-view-admin-routed.component.html',
  styleUrls: ['./valoracionjuego-view-admin-routed.component.css']
})
export class ValoracionjuegoViewAdminRoutedComponent implements OnInit {

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