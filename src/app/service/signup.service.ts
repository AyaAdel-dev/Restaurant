import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Signup } from '../_module/signup';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private readonly apiurl = 'https://localhost:7129/api/User/Register';
    constructor(private http: HttpClient) {
    }
  register(user: Signup): Observable<any> {
    return this.http.post<Signup>(this.apiurl, user);
  }
}
