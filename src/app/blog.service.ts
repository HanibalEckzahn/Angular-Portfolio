import { Injectable } from '@angular/core';

import {HttpClient,
   HttpErrorResponse,
   HttpHeaders
  } from '@angular/common/http';
import {Observable, Observer, throwError } from 'rxjs';
import { catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private url = 'https://admin.habermann-j.de/';



  constructor(private http:HttpClient) { }

  getPost(){
    const url = `${this.url}wp-json/wp/v2/posts/`;
    return this.http.get(url).pipe(catchError(this.handleError));
  }

  //Error handling
  handleError(error: any){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
      //Get client-side Error
      errorMessage = error.error.errorMessage;
    }else{
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(()=>{
      return errorMessage;
    });
  }
}
