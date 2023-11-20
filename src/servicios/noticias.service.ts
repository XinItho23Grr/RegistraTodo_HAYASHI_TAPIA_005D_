import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaEncabezados } from 'src/app/pages/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private httpClient: HttpClient) { }

  getEncabezados() {
    return this.httpClient.get<RespuestaEncabezados>('https://newsapi.org/v2/everything?q=tesla&from=2023-08-11&sortBy=publishedAt&apiKey=fc7d9914898440dbbd18848dcadd6851');
  }
}