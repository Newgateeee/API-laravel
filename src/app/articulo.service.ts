import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EMPTY, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {
  private apiUrl = 'http://localhost:8000/api/articulos';

  constructor(private http: HttpClient) {}

  getArticulos(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  getArticulo(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  createArticulo(articulo: any): Observable<any> {
    return this.http.post(this.apiUrl, articulo).pipe(
      catchError(this.handleError)
    );
  }

  updateArticulo(id: number, articulo: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, articulo).pipe(
      catchError(this.handleError)
    );
  }

  deleteArticulo(id: number): Observable<any> {
    const confirmation = confirm("¿Estás seguro de que deseas eliminar este registro?");

    if (confirmation) {
      return this.http.delete(`${this.apiUrl}/${id}`).pipe(
        catchError(this.handleError)
      );
    } else {
      return EMPTY;
    }
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
