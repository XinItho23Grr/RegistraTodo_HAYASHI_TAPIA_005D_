import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private httpClient: HttpClient) { }

  getTopHeadlines() {
    return this.httpClient.get('https://newsapi.org/v2/everything?q=tesla&from=2023-08-11&sortBy=publishedAt&apiKey=fc7d9914898440dbbd18848dcadd6851');
  }
}