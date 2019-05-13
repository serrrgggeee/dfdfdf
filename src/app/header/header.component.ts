import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

	constructor(private authService: AuthService) { }

	ngOnInit() {
		this.authService.$login.subscribe(
			(res) => {
				console.log(res);
			},
			(err) => {
				console.log(err);
			}
		);
	}

}