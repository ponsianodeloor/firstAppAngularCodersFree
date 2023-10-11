import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent {

  dayNumber: number = 5;

  constructor() {

  }

  ngOnInit() {

  }

  getDayOfWeek(day: number) {
    let dayOfWeek: string;
    switch (day) {
      case 1:
        dayOfWeek = 'Lunes';
        break;
      case 2:
        dayOfWeek = 'Martes';
        break;
      case 3:
        dayOfWeek = 'Miércoles';
        break;
      case 4:
        dayOfWeek = 'Jueves';
        break;
      case 5:
        dayOfWeek = 'Viernes';
        break;
      case 6:
        dayOfWeek = 'Sábado';
        break;
      case 7:
        dayOfWeek = 'Domingo';
        break;
      default:
        dayOfWeek = 'Día inválido';
        break;
    }
    return dayOfWeek;
  }

  protected readonly Number = Number;
}
