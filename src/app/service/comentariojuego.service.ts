import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { baseURL } from 'src/environments/environment';
import { IPage } from '../model/generic-types-interface';
import { Observable } from 'rxjs';
import { IComentariojuego } from '../model/comentariojuego-interface';

@Injectable({
  providedIn: 'root'
})
export class ComentariojuegoService {
  private entityURL = '/comentariojuego';
  url: string = ""

  constructor(private oHttp: HttpClient) {
    this.url = `${baseURL}${this.entityURL}`;
  }
  getDevelopersPlist(page: number, size: number, termino: string, id_usertype: number, strSortField: string, strOrderDirection: string): Observable<IPage<IComentariojuego>> {
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
    return this.oHttp.get<IPage<IComentariojuego>>(this.url, { params: params });
  }

  getOne(id: number): Observable<IComentariojuego> {
    return this.oHttp.get<IComentariojuego>(this.url + "/" + id);
  }

  removeOne(id: number): Observable<number> {
    return this.oHttp.delete<number>(this.url + '/' + id);
  }


}
