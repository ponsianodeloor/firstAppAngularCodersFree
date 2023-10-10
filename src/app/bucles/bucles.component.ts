import {Component, OnInit} from '@angular/core';
import { Person } from '../interfaces/person';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrls: ['./bucles.component.css']
})
export class BuclesComponent implements OnInit{

  persons: Person[] = [
    {name: 'Juan', age: 20},
    {name: 'Pedro', age: 30},
    {name: 'Maria', age: 40},
    {name: 'Luis', age: 50},
    {name: 'Ana', age: 60}
  ];

  constructor() {
  }

  ngOnInit() {

  }

}
