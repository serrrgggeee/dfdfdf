import { Component, OnInit } from '@angular/core';

import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-auth',
  template: `
	<div class="card blue-grey darken-1 row">
		<div class="col s4">
		</div>
		<div class="card-content white-text col s4">
			<form class="col s12">
				<div class="center-align card-title">
					Войти
				</div>
				<app-input-field [fieldName]="name" [Value]="username"></app-input-field>
				<app-input-field [fieldName]="pass" [Value]="password"></app-input-field>
				<div class="center-align">
					<button (click)="login()" class="btn">Submit</button>
				</div>
			</form>
		</div>
		<div class=" col s4">
		</div>
	</div>
`,
  styleUrls: ['./auth.component.sass']
})
export class AuthComponent implements OnInit {
	name:string="Имя пользователя";
    username:string = "serrrgggeee";
    pass:string="Пароль";
    password:string = "";

	constructor(private authService: AuthService) { }

	ngOnInit() {
	}

	login(): void {
		this.authService.login(this.username, this.password).subscribe(
			(res) => {
				console.log(res);
			},
			(err) => {
				console.log(err);
			}
		);
	}

}
