import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-children-input',
  templateUrl: './children-input.component.html',
  styleUrls: ['./children-input.component.css']
})
export class ChildrenInputComponent {
  @Input() title: string | undefined;

  @Output() titleChange = new EventEmitter<string>();

  changeTitle() {
    this.titleChange.emit(this.title);
  }

}
