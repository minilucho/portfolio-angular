import { Injectable } from '@angular/core';
//Esto es para suscribirse y que se reciba respuesta de forma asincrona
import { Observable } from 'rxjs';
//Esto es para poder hacer peticiones
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http:HttpClient) { }


  getDatos():Observable<any> {

    return this.http.get('./assets/json/portfolio.json');
  }
}
