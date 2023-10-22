import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent {

  name = new FormControl('',
    [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(10),
      Validators.pattern('[a-zA-Z ]*'),
  ]);

  email = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor() {
  }

  ngOnInit() {

  }

}
