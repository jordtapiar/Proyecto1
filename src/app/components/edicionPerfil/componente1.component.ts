import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.scss'],
})
export class Componente1Component  implements OnInit {
  items =[];

  jornada:any[]=[
    {id:1, jornada:"Diurno"},
    {id:2, jornada:"Vespertino"},
  ]
  dato: any={
    nombre:"",
    apellido:"",
    fechaDeNacimiento:"",
    jornada:""
  };
  constructor(public alertController:AlertController) { }
  ngOnInit() {
    for (let i = 1; i < 51; i++){
      this.items.push();
    };
  }
  

  limpiar(){
        //recorrer todas las entradas de Object entries y obtener su clave y valor
        for(var [key,value] of Object.entries(this.dato)){
          Object.defineProperty(this.dato,key,{value:""})
        }
  }
  guardar(){
    if (this.dato.nombre!="" && this.dato.apellido!="") {
      this.presentAlert("EDITADO CON EXITO","Su nuevo usuario es "+this.dato.nombre+" y su correo es "+this.dato.apellido)
    } else {
      this.presentAlert("NADA SE HA MODIFICADO","")
    }
    
  }

  async presentAlert(titulo:string, msg:string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }
}
