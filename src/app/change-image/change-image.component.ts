import { Component } from '@angular/core';

@Component({
  selector: 'app-change-image',
  templateUrl: './change-image.component.html',
  styleUrls: ['./change-image.component.css']
})
export class ChangeImageComponent {

  constructor() {
  }

  ngOnInit() {

  }

  srcImage:string = "https://images.pexels.com/photos/15731215/pexels-photo-15731215/free-photo-of-ligero-ciudad-agua-panorama-urbano.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";
  imageSrcOne:string = 'https://images.pexels.com/photos/5372613/pexels-photo-5372613.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load';
  imageSrcTwo:string = 'https://images.pexels.com/photos/18125686/pexels-photo-18125686/free-photo-of-noche-en-pie-posando-luz-de-fondo.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load';

  changeImageOne() {
    this.srcImage = this.imageSrcOne
  }

  changeImageTwo() {
    this.srcImage = this.imageSrcTwo;
  }

}
