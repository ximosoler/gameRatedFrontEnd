import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';
import { IPage } from 'src/app/model/generic-types-interface';
import { HttpErrorResponse } from '@angular/common/http';
import { IUsuario } from 'src/app/model/usuario-interface';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PaginationService } from 'src/app/service/pagination.service';




@Component({
  selector: 'app-usuario-plist-admin-routed',
  templateUrl: './usuario-plist-admin-routed.component.html',
  styleUrls: ['./usuario-plist-admin-routed.component.css'],
})
export class UsuarioPlistAdminRoutedComponent implements OnInit {

  oPage: IPage<IUsuario>;
  aPaginationBar: string[];
  strSortField: string = "";
  strSortDirection: string = "";

  constructor(
    protected oRouter: Router,
    private oUsuarioService: UsuarioService,
    private oPaginationService: PaginationService
  ) {
    // this.oRouter.navigate(['/home']);
    this.oPage = {} as IPage<IUsuario>;
    this.oPage.number = 1;
    this.oPage.size = 10;
  }

  ngOnInit() {
    this.getPage();
  }

  getPage() {
    this.oUsuarioService.getUsuarioPlist(this.oPage.number, this.oPage.size, "", 0, "", "")
      .subscribe({
        next: (resp: IPage<IUsuario>) => {
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


  onSetPage = (nPage: number) => {
    this.oPage.number = nPage - 1; //pagination component starts at 1, but spring data starts at 0
    this.getPage();
    return false;
  }

  onSetRpp(nRpp: number) {
    this.oPage.size = nRpp;
    this.getPage();
    return false;
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
    this.strSortField = order;
    if (this.strSortDirection == "asc") {
      this.strSortDirection = "desc";
    } else {
      this.strSortDirection = "asc";
    }
    this.getPage();
  }





}

