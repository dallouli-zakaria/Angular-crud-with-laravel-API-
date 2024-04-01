import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(private httpClient: HttpClient) {}

  REST_API: string = 'http://localhost:8000/api/books';
  REST_API2: string = 'http://localhost:8000/api';

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  getdata() {
    return this.httpClient.get<any>(`${this.REST_API}`);
  }
  getusers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.REST_API}`);
  }
  getUserById(id: any): Observable<User> {
    let API_URL = `${this.REST_API}/${id}`;
    return this.httpClient.get<User>(API_URL);
  }
  adduser(data: User): Observable<any> {
    let API_URL = `${this.REST_API}`;
    return this.httpClient
      .post<any>(API_URL, data, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
  }

  deleteuser(code: any): Observable<any> {
    let API_URL = `${this.REST_API}/${code}`;
    return this.httpClient
      .delete<any>(API_URL, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
  }
  updateuser(data: User, id: any): Observable<any> {
    let API_URL = `${this.REST_API2}/update/${id}`;
    return this.httpClient
      .put<any>(API_URL, data, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
  }
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\n Message: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
