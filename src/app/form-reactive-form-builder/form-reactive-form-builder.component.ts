import { Component } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-reactive-form-builder',
  templateUrl: './form-reactive-form-builder.component.html',
  styleUrls: ['./form-reactive-form-builder.component.css']
})
export class FormReactiveFormBuilderComponent {

  constructor(private fb: FormBuilder) { }

  //implement getter method for all form controls
  get username() {
    return this.formUser.get('username') as FormControl
  }

  get email() {
    return this.formUser.get('email') as FormControl;
  }

  formUser = this.fb.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
  });

  onSubmit() {
    console.log(this.formUser.value);
  }

}
