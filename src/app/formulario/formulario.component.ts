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

  showConsole(name:string) {
    console.log('hola ' + name);
  }

}
