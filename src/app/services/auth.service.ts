import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpBackend, HttpRequest, HttpResponse} from '@angular/common/http';
import {List} from 'immutable';
import { Observable, BehaviorSubject } from 'rxjs';
import { share, tap } from 'rxjs/operators';
import {Todo} from "../Todo";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

	constructor(private http: HttpClient) { }
	$login = new BehaviorSubject<boolean>(false);

	private loginChange(value) {
		this.$login.next(value);

	}


	login(username: string, password: string) {
		console.log(username);
		console.log(password);
		let params = {username, password};
		let api_url = 'http://127.0.0.1:8000';
		return this.http.post(`${api_url}/account/login/`, params).pipe(tap(() => this.loginChange(true)));
	}

}
