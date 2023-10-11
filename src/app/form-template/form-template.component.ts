import { Component } from '@angular/core';
import {Person} from "../interfaces/person";

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})

export class FormTemplateComponent {

  person:Person = {
    name: 'PonWick',
    age: 34,
  }

  constructor() {
  }

  onInit() {

  }

  onSubmit() {
    console.log('Formulario enviado');
    console.log(this.person);
  }
}
