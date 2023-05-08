import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { baseURL } from 'src/environments/environment';
import { IPage } from '../model/generic-types-interface';
import { IJuego, IJuego2Send } from '../model/juego-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {
  private entityURL = '/juego';
  url: string = ""

  constructor(private oHttp: HttpClient) {
    this.url = `${baseURL}${this.entityURL}`;
  }
  getJuegoPlist(page: number, size: number, termino: string, id_usertype: number, strSortField: string, strOrderDirection: string): Observable<IPage<IJuego>> {
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
    return this.oHttp.get<IPage<IJuego>>(this.url, { params: params });
  }

  getOne(id: number): Observable<IJuego> {
    return this.oHttp.get<IJuego>(this.url + "/" + id);
  }

  removeOne(id: number): Observable<number> {
    return this.oHttp.delete<number>(this.url + '/' + id);
  }

  updateOne(oJuego2Send: IJuego2Send): Observable<number> {
    return this.oHttp.put<number>(this.url, oJuego2Send, { withCredentials: true });
  }

  
  newOne(oJuego2Send: IJuego2Send): Observable<number> {
    return this.oHttp.post<number>(this.url, oJuego2Send, { withCredentials: true });
  }

  generate(): Observable<IJuego> {
    return this.oHttp.post<IJuego>(this.url + "/generate", null, { withCredentials: true });
  }


}
