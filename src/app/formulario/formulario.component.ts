import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  constructor() {
  }

  ngOnInit(): void {

  }

  messageSent:boolean = false;

  showConsole(name:string) {
    console.log('hola ' + name);
    this.messageSent = true;
  }

  closeAlert() {
    this.messageSent = false;
  }

}
