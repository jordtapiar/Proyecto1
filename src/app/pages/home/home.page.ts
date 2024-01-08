import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
data:any;
niveles:any[]=[
  {id:1,nivel:"Basica Incompleta"},
  {id:2,nivel:"Basica Completa"},
  {id:3,nivel:"Media Incompleta"},
  {id:4,nivel:"Media Completa"},
  {id:5,nivel:"Superior Incompleta"},
  {id:6,nivel:"Superior Completa"}
]
datos:any={
  nombre:"",
  apellido:"",
  education:"",
  nacimiento:""
};
  constructor(private activatedRoute: ActivatedRoute,
    private router:Router,public alertController: AlertController) {
      // Se llama a la ruta activa y se obtiene sus parametros mediante una suscripción
      this.activatedRoute.queryParams.subscribe(params =>{//utilizo lambda
        if (this.router.getCurrentNavigation()?.extras.state) {
          this.data = this.router.getCurrentNavigation()?.extras.state?.["user"];
          console.log(this.data)
        }else{
          this.router.navigate(["/login"]);
        }
      });
    }
  /**
     * Metodo limpíar recorre un objeto y se define el 
     * valor de su propiedad en ""
     */
  limpiar(){
    for (var [key, value] of Object.entries(this.datos)) {
      Object.defineProperty(this.datos,key,{value:""})
    }
  }
  /**
   * Metodo mostrar verifica que nombre y apellido no se encuentren vacíos
   * y muestra dichos valores en el alert
   */
  mostrar(){
    (this.datos.nombre!="" && this.datos.apellido!="") && 
    this.presentAlert("Usuario","Su nombre es "+this.datos.nombre+" "+this.datos.apellido)||
    this.presentAlert("Datos Requeridos","Nombre y Apellido");
  }

  async presentAlert(titulo:string,message:string) {
    const alert = await this.alertController.create({
      header: titulo,      
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
