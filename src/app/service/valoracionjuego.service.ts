import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { baseURL } from 'src/environments/environment';
import { IPage } from '../model/generic-types-interface';
import { Observable } from 'rxjs';
import { IValoracionjuego } from '../model/valoracionjuego-interface';

@Injectable({
  providedIn: 'root'
})
export class ValoracionjuegoService {
  private entityURL = '/valoracionjuego';
  url: string = ""

  constructor(private oHttp: HttpClient) {
    this.url = `${baseURL}${this.entityURL}`;
  }
  getValoracionjuegoPlist(page: number, size: number, termino: string, id_usertype: number, strSortField: string, strOrderDirection: string): Observable<IPage<IValoracionjuego>> {
    let params = new HttpParams()
      .set("page", page)
      .set("size", size);
    if (termino) {
      params = params.set('filter', termino.trim());
    }
    if (id_usertype != 0) {
      params = params.set("usertype", id_usertype);
    }
    if (strSortField != "") { //&sort=codigo,[asc|desc]
      if (strOrderDirection != "") {
        params = params.set("sort", strSortField + "," + strOrderDirection);
      } else {
        params = params.set("sort", strSortField);
      }
    }
    return this.oHttp.get<IPage<IValoracionjuego>>(this.url, { params: params });
  }

  getOne(id: number): Observable<IValoracionjuego> {
    return this.oHttp.get<IValoracionjuego>(this.url + "/" + id);
  }

  removeOne(id: number): Observable<number> {
    return this.oHttp.delete<number>(this.url + '/' + id);
  }


}
