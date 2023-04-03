import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {

  private apiUrl = 'http://132.247.184.65'; // URL base

  constructor(private http: HttpClient) { }

  // Método para obtener un jugador por su CURP
  
  getJugador(curp: string): Observable<any> {
    const url = `${this.apiUrl}/getjugador/${curp}`;
    return this.http.get(url);
  }

  getPartidos(): Observable<any[]> {
    const url = `${this.apiUrl}/getpartidos`;
    return this.http.get<any>(url).pipe(
      map(response => response.data)
    );
  }

  getJugadores(): Observable<any[]> {
    const url = `${this.apiUrl}/getjugadorcurp`;
    return this.http.get<any>(url).pipe(
      map(response => response.data)
    );
  }

}