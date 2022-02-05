import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  sendEmail(data): Observable<HttpResponse<any>>{

    
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(data);
    console.log(body)

    return this.http.post<any>('https://api.emailjs.com/api/v1.0/email/send', body,{'headers':headers});

    

  }
}
