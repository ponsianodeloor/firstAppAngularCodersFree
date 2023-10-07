import { Component } from '@angular/core';
import { Person } from '../../interfaces/person';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {

  constructor() {

  }

  ngOnInit(): void {

  }

  name:string = 'Contador App';

  person = {
    name: 'Fernando',
    age: 35,
  }

  secondPerson:Person = {
    name: 'Melissa',
    age: 34,
  }

}
