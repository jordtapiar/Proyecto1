import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';
import { BarcodeScanner } from
'@awesome-cordova-plugins/barcode-scanner/ngx';
import{EmailComposer} from 
'@awesome-cordova-plugins/email-composer/ngx';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { EmailComposerOptions } from '@awesome-cordova-plugins/email-composer';



@Component({
  selector: 'app-codigo-qr',
  templateUrl: './codigo-qr.page.html',
  styleUrls: ['./codigo-qr.page.scss'],
})
export class CodigoQRPage implements OnInit {
  asistencias: any;
  code: any;
  hasAccount: false;
  currentImage = null;
  imageData = null;
  constructor(
    private userService: UserService,
    private storageService: StorageService,
    private barcodeScanner: BarcodeScanner,
    private emailComposer: EmailComposer
    
    ) { }

  ngOnInit() {
    this.cargarAsistencias();
  }

  cargarAsistencias(){
    console.log("El usuario es: ", this.userService.user);
    this.asistencias = this.storageService.getItem('asistencias');
    if (this.asistencias) {
      // Si no hay asistencias, inicializa un arreglo vacío
      console.log("Las asistencias: ", this.asistencias);
      
    }
  }

  registrarAsistencia() {
    // Obtiene el usuario actual
    const usuarioActual = this.userService.user;
  
    // Genera la fecha y hora actual
    const fechaHoraActual = new Date();
  
    // Opción 1: Agregar fecha y hora directamente al objeto del usuario
    // usuarioActual.fechaHora = fechaHoraActual;
  
    // Opción 2: Crear un objeto de asistencia que incluya el usuario y la fecha/hora
    const registroAsistencia = {
      usuario: usuarioActual,
      fechaHora: fechaHoraActual
    };
  
    // Obtener el arreglo actual de asistencias del storage
    let asistencias = this.storageService.getItem('asistencias');
    if (!asistencias) {
      // Si no hay asistencias, inicializa un arreglo vacío
      asistencias = [];
    }
  
    // Agrega el registro de asistencia al arreglo
    asistencias.push(registroAsistencia);
  
    // Guarda el arreglo actualizado en el storage
    this.storageService.setItem('asistencias', asistencias);
  
    console.log('Asistencia registrada', asistencias);
    this.cargarAsistencias();
  }

  scannerQr(){
    this.barcodeScanner.scan().then((barcodeData: { text: any; }) => {
      this.code = barcodeData.text
    console.log('Barcode data', barcodeData);
    }).catch((err: any) => {
    console.log('Error', err);
    })
    }

    async checkAccount(){
      this.hasAccount = await this.emailComposer.hasAccount();
    }

    async captureImage(){
      const image = await Camera.getPhoto({
       quality: 90,
       allowEditing: false,
       resultType: CameraResultType.Base64,
       source: CameraSource.Camera, 
      });
    }
    async openEmail(){

      const email: EmailComposerOptions ={
        to: 'jordanotapia21@duocuc.cl',
        cc: 'leannaBret@duocuc.cl',
        attachments: ['base64:icon.png//iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6...}'],
        subject:'Mi Asistencia',
        body: 'Asistencia registrada y enviada',
      };
      await this.emailComposer.open(email);
    }
  }

  


