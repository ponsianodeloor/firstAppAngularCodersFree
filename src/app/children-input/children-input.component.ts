import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-children-input',
  templateUrl: './children-input.component.html',
  styleUrls: ['./children-input.component.css']
})
export class ChildrenInputComponent {
  @Input() title: string | undefined;
}
