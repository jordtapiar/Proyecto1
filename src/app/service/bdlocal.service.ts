import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { IEdicion } from '../interfaces/i-edicion';

@Injectable({
  providedIn: 'root'
})
export class BdlocalService {

  edicion: IEdicion[]=[];
  private _storage: Storage | null=null;

  constructor(private storage: Storage,public toastController:ToastController) {
    this.Init();
    this.cargarContactos();
}
async Init(){
  const storage=await this.storage.create();
  this._storage=storage;
}
async cargarContactos() {
  const miEdicion=await this.storage.get('Edicion');
  if (miEdicion) {
    this.edicion=miEdicion;
  }
}

guardarContactos(nombre:string,numero:number){
  const existe=this.edicion.find(m=>m.intNumero===numero);
  if (!existe) {
    this.edicion.unshift({strNombre:nombre, intNumero:numero})//inserto en el top
    this._storage?.set('agenda',this.edicion);
    this.presentToast("Contacto Editado con EXITO!!");
  }else{
    this.presentToast("Contacto Ya editado anteriormente");
  }
}

quitarContactos(numero:number){
  const existe=this.edicion.find(m=>m.intNumero===numero);
  if (existe) {
    this.edicion=this.edicion.filter(c=>c.intNumero!==numero);
    this._storage?.set('agenda',this.edicion);
    this.presentToast("Se ha eliminado la edicion con EXITO!!");
  }else{
    this.presentToast("Ese N° NO Existe en la edicion");
  }
}

async borrarBD(){
  await this._storage?.clear();
  this.edicion=[];
  console.log(this.edicion.length);
  this.presentToast("Se ha eliminado la BD");
}

async presentToast(mensaje:string) {
  const toast = await this.toastController.create({
    message: mensaje,
    translucent:true,
    color:'medium',
    position: 'top',
    duration: 2000
  });
  toast.present();
}

}

