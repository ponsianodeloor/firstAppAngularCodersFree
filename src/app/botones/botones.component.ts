import { Component } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css']
})
export class BotonesComponent {

  constructor() {
  }

  ngOnInit(): void {

  }

  classTextColor = 'text-primary';
  buttonsDisabled = false;

  changeTextColor(textColor:string):void{
    this.classTextColor = textColor;
  }

  changeButtonsDisabled():void{
    if (this.buttonsDisabled) {
      this.buttonsDisabled = false;
      return;
    }else if (!this.buttonsDisabled) {
      this.buttonsDisabled = true;
      return;
    }
  }


}
