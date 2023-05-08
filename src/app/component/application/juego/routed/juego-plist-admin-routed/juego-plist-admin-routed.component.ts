import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IJuego } from 'src/app/model/juego-interface';
import { JuegoService } from 'src/app/service/juego.service';
import { IPage } from 'src/app/model/generic-types-interface';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-juego-plist-admin-routed',
  templateUrl: './juego-plist-admin-routed.component.html',
  styleUrls: ['./juego-plist-admin-routed.component.css']
})
export class JuegoPlistAdminRoutedComponent implements OnInit {

  strTermFilter: string = "";
  id_usertypeFilter: number = 0;
  numberOfElements: number = 5;
  page: number = 0;
  sortField: string = "";
  sortDirection: string = "";


  constructor(
    protected oRouter: Router,
    private oJuegoService: JuegoService,
    ) { 
      this.oRouter.navigate(['/home']);

  }

  ngOnInit() {
    this.getPage();

  }

  getPage() {
    this.oJuegoService.getJuegoPlist(this.page, this.numberOfElements,
      this.strTermFilter, this.id_usertypeFilter, this.sortField, this.sortDirection)
      .subscribe({
        next: (resp: IPage<IJuego>) => {
          if (this.page > resp.totalPages - 1) {
            this.page = resp.totalPages - 1;
          }
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        }
      })
  }

  
  setPage(e: number) {
    this.page = (e - 1);
    this.getPage();
  }

  setRpp(rpp: number) {
    this.numberOfElements = rpp;
    this.getPage();
  }

  setFilter(term: string): void {
    this.strTermFilter = term;
    this.getPage();
  }

  setFilterByUsertype(id: number): void {
    this.id_usertypeFilter = id;
    this.getPage();
  }

  setOrder(order: string): void {
    this.sortField = order;
    if (this.sortDirection == "asc") {
      this.sortDirection = "desc";
    } else {
      this.sortDirection = "asc";
    }
    this.getPage();
  }

}
