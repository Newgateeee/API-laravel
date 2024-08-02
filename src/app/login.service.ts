import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://127.0.0.1:8000/api/login';

  constructor(private http: HttpClient) { }

  // login(usuario: string, pass: string): Observable<any> {
  //   return this.http.post<any>(`${this.apiUrl}/login`, { usuario, pass })
  //     .pipe(
  //       catchError(this.handleError)
  //     );
  // }

  // private handleError(error: HttpErrorResponse): Observable<never> {
  //   let errorMessage = 'An unknown error occurred!';
  //   if (error.status === 401) {
  //     errorMessage = 'Credenciales incorrectas';
  //   } else {
  //     errorMessage = 'Error en el servidor';
  //   }
  //   return throwError(errorMessage);
  // }
}
