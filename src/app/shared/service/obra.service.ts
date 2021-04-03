import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Obra } from '../model/obra.model';
import { RespondeObra } from '../model/responseObra.model';

@Injectable({
  providedIn: 'root'
})
export class ObraService {
  apiUrl = 'https://kcluster.kroton.com.br/saber-escolas/obras/api/obras/por-campanha/';

  httpOptions = {
    headers: new HttpHeaders({'Contect-Type': 'application/json'})
  }

  constructor(private httpClient: HttpClient) { }

  public getObrasPorCampanha(campanha: string): Observable<RespondeObra>{
    return this.httpClient.get<RespondeObra>(this.apiUrl + campanha);
  }
}
