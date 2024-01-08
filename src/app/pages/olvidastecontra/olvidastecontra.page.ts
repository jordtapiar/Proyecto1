import { Component } from '@angular/core';

@Component({
  selector: 'app-olvidastecontra',
  templateUrl: './olvidastecontra.page.html',
  styleUrls: ['./olvidastecontra.page.scss'],
})
export class OlvidastecontraPage  {
alertButtons: any;

  constructor() { }

  onReset(){
    console.log('MandarUsuario');
  }
  

}
