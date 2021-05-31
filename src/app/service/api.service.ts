// @ts-ignore

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError, timeout} from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  ApiUrl = 'http://localhost:1337/api/v1';

  constructor(
    private httpClient: HttpClient
  ) {
  }

  /**
   * error
   */
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  /**
   * get all customer
   */
  public getAllCustomer(){
    const urlApi = `${this.ApiUrl}/customers`;
    return this.httpClient.get(urlApi, {withCredentials: true}).pipe(timeout(20000), catchError(this.handleError));
  }
}
