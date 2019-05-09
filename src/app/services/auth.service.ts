import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpBackend, HttpRequest, HttpResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
  	let params = {username, password};
  	let api_url = 'http://127.0.0.1:8000';
    return this.http.post<any>(`${api_url}/account/login/`, params);
  }
}
