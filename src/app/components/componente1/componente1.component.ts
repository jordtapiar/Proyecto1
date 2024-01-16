import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.scss'],
})
export class Componente1Component   {

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

  

  limpiar(){
        //recorrer todas las entradas de Object entries y obtener su clave y valor
        for(var [key,value] of Object.entries(this.dato)){
          Object.defineProperty(this.dato,key,{value:""})
        }
  }
  mostrar(){
    if (this.dato.nombre!="" && this.dato.apellido!="") {
      this.presentAlert("EDITADO CON EXITO","Su nombre es "+this.dato.nombre+" "+this.dato.apellido)
    } else {
      this.presentAlert("INGRESE DATOS SOLICITADOS","")
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
