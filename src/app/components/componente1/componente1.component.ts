import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.scss'],
})
export class Componente1Component  implements OnInit {

  generos:any[]=[
    {id:1, genero:"Clásico"},
    {id:2, genero:"Urbano"},
    {id:3, genero:"Rock"},
    {id:4, genero:"Jazz"}
  ]
  dato: any={
    compositor:"",
    interprete:"",
    lanzamiento:"",
    genero:""
  };
  constructor(public alertController:AlertController) { }

  ngOnInit() {}

  limpiar(){
        //recorrer todas las entradas de Object entries y obtener su clave y valor
        for(var [key,value] of Object.entries(this.dato)){
          Object.defineProperty(this.dato,key,{value:""})
        }
  }
  mostrar(){
    if (this.dato.compositor!="" && this.dato.interprete!="") {
      this.presentAlert("MusicDUOC","El compositor es "+this.dato.compositor+ " y el intérprete es "+this.dato.interprete)
    } else {
      this.presentAlert("MusicDUOC","No ingresó Compositor y/o Intérprete")
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
