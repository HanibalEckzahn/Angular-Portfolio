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
    const url = `${this.url}/wp-json/wp/v2/posts`;
    console.log(url);
    return this.http.get(url).pipe(catchError(this.errorHandler));
  }
  getSinglePost(id: any) {
    const url = `${this.url}/wp-json/wp/v2/posts/${id}`;
    console.log(url);
    return this.http.get(url).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return new Observable((observer: Observer<any>) => {
      observer.error(error);
    });
  }

}
