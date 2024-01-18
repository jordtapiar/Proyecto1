import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-olvidastecontra',
  templateUrl: './olvidastecontra.page.html',
  styleUrls: ['./olvidastecontra.page.scss'],
})
export class OlvidastecontraPage  {
alertButtons: any;


user={
  usuario:"",
  correo:""
}
  field: string;

  constructor(public toastController:ToastController, public router:Router) { }

  onReset(){
    console.log(this.user);
    if (this.validateModel(this.user)) {
      this.presentToast('middle','Se envio codigo, Verifique su correo '+this.user.usuario);
      let navigationextras: NavigationExtras={
        state:{
          user: this.user 
        }
      }
      this.router.navigate(['/login'],navigationextras);
    }else{
      this.presentToast('top','DATOS REQUERIDOS: '+this.field, 1000)
    }
  }
  validateModel(model:any){
    
    for(var [key, value] of Object.entries(model)){
      
      if (value=="") {
        
        this.field=key
        return false;
      }      
    }
    return true;
  }
  
  async presentToast(position: 'top' | 'middle' | 'bottom',
                     message: string,
                     duration?:number) {
    const toast = await this.toastController.create({
      message: message,
      duration: duration?duration:1500,
      position: position,
    });

    await toast.present();
  }
}

