import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../interfaces/message';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private url = 'https://getform.io/f/40fcc5c0-989c-440b-9e22-9c83cf710fc6';

  constructor( private http: HttpClient ) { }

  sendMessage( message: Message ) {
    return this.http.post(this.url, message);
  }
}
