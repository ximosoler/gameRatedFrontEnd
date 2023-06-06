import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IJuego } from 'src/app/model/juego-interface';
import { JuegoService } from 'src/app/service/juego.service';
import { IPage } from 'src/app/model/generic-types-interface';
import { HttpErrorResponse } from '@angular/common/http';
import { PaginationService } from 'src/app/service/pagination.service';


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
  oPage: IPage<IJuego>;
  aPaginationBar: string[];
  strSortField: string = "";
  strSortDirection: string = "";


  constructor(
    protected oRouter: Router,
    private oJuegoService: JuegoService,
    private oPaginationService: PaginationService,

    ) { 
      this.oRouter.navigate(['/admin/juego/plist/juego']);
      this.oPage = {} as IPage<IJuego>;
      this.oPage.number = 1;
      this.oPage.size = 10;
  }

  ngOnInit() {
    this.oPage.number = 0;
    this.oPage.size = 10;
    this.getPage();

  }

  getPage() {
    this.oJuegoService.getJuegoPlist(this.oPage.number, this.oPage.size, "", 0, "", "")
      .subscribe({
        next: (resp: IPage<IJuego>) => {
          this.oPage = resp;
          if (this.oPage.number > resp.totalPages - 1) {
            this.oPage.number = resp.totalPages - 1;
          }
          this.aPaginationBar = this.oPaginationService.pagination(this.oPage.totalPages, this.oPage.number);
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
  onSetPage = (nPage: number) => {
    this.oPage.number = nPage - 1; //pagination component starts at 1, but spring data starts at 0
    this.getPage();
    return false;
  }

  setRpp(rpp: number) {
    this.numberOfElements = rpp;
    this.getPage();
  }
/*
  setFilter(term: string): void {
    this.strTermFilter = term;
    this.getPage();
  }

  setFilterByUsertype(id: number): void {
    this.id_usertypeFilter = id;
    this.getPage();
  }
*/
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
