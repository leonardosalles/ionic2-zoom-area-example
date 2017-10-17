import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  showControls: boolean = true;
  scale: number = 1;

  constructor(public navCtrl: NavController) {
  }

  afterZoomIn (event) {
    console.log('After ZoomIn Event: ', event);
  }

  afterZoomOut (event) {
    console.log('After ZoomOut Event: ', event);
  }
}
