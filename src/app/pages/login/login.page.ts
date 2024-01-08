import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {
  /**
   * Se genera el modelo user con dos claves
   * cada clave tiene su valor inicial
   */
  user={
    usuario:"",
    clave:""
  }

  field:string;
  constructor(public toastController:ToastController, public router:Router) { }

  

  ingresar(){
    console.log(this.user);
    if (this.validateModel(this.user)) {
      this.presentToast('top','Bienvenido '+this.user.usuario);
      let navigationextras: NavigationExtras={
        state:{
          user: this.user //al state le asigno el modelo con clave y valor
        }
      }
      this.router.navigate(['/home'],navigationextras);
    }else{
      this.presentToast('middle','Falta: '+this.field, 5000)
    }
  }
  /**
   * validateModel sirve para validar que se ingrese algo en los
   * campos del html mediante su modelo
   */
  validateModel(model:any){
    // Recorro todas las entradas que me entrega Object entries 
    //y obtengo su clave, valor
    for(var [key, value] of Object.entries(model)){
      // Si un valor es "" se retornara false y se avisara de lo faltante
      if (value=="") {
        //indico campo faltante
        this.field=key
        return false;
      }      
    }
    return true;
  }

   /**
   * Muestra un toast al usuario
   * @param position Posición dónde se mostrará el mensaje
   * @param message Mensaje a presentar al usuario
   * @param duration Duración el toast, este es opcional
   */
  async presentToast(position: 'top' | 'middle' | 'bottom',
                     message: string,
                     duration?:number) {
    const toast = await this.toastController.create({
      message: message,
      duration: duration?duration:2500,
      position: position,
    });

    await toast.present();
  }
}
