import {  Input, Component } from '@angular/core';

@Component({
  selector: 'app-input-field',
  template: `
		<div class="row">
			<input placeholder="fieldName" id="fieldName" type="text" class="validate" name="fieldName" [(ngModel)]="Value" />
			<label for="fieldName">{{fieldName}}</label>
		</div>
	`,
  styleUrls: ['./input-field.component.sass']
})
export class InputFieldComponent {
	@Input() fieldName: string;
    @Input() Value: number;

  constructor() { }

  ngOnInit() {
  }

}
