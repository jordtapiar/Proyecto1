import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {




  user = {
    usuario: "",
    clave: ""
  }

  field: string;
  constructor(
    public toastController: ToastController,
    public router: Router,
    private http: HttpClient,
    private userService: UserService
  ) { }



  ingresar() {
    if (this.validateModel(this.user)) {
      this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
        .subscribe(users => {
          console.log(users);
          
          const userFound = users.find(user => user.username === this.user.usuario && user.id === parseInt(this.user.clave));
          if (userFound) {
            this.userService.user = userFound;
            this.presentToast('top', 'Bienvenido ' + this.user.usuario);
            // Navegar a la siguiente página
            let navigationextras: NavigationExtras={
              state:{
                user: this.user //al state le asigno el modelo con clave y valor
              }
            }
            this.router.navigate(['/home'], navigationextras);
          } else {
            this.presentToast('top', 'Usuario o contraseña incorrectos');
          }
        });
    } else {
      this.presentToast('top', 'DATOS REQUERIDOS: ' + this.field, 1000)
    }
  }

  /**
   * validateModel sirve para validar que se ingrese algo en los
   * campos del html mediante su modelo
   */
  validateModel(model: any) {
    // Recorro todas las entradas que me entrega Object entries 
    //y obtengo su clave, valor
    for (var [key, value] of Object.entries(model)) {
      // Si un valor es "" se retornara false y se avisara de lo faltante
      if (value == "") {
        //indico campo faltante
        this.field = key
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
    duration?: number) {
    const toast = await this.toastController.create({
      message: message,
      duration: duration ? duration : 1500,
      position: position,
    });

    await toast.present();
  }
}
