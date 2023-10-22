import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactive-form-group',
  templateUrl: './form-reactive-form-group.component.html',
  styleUrls: ['./form-reactive-form-group.component.css']
})
export class FormReactiveFormGroupComponent {

  formUser = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  get username() {
    return this.formUser.get('username') as FormControl;
  }

  get email() {
    return this.formUser.get('password');
  }

  onSubmit() {
    console.log(this.formUser.value);
  }

}
