import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuContactHelperService {
  private url = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  sendMail(mail) {
    this.http.post(`${this.url}send-email`, mail).subscribe( res => console.log('Mail was send'));
  }
}
