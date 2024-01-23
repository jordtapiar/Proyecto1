import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-codigo-qr',
  templateUrl: './codigo-qr.page.html',
  styleUrls: ['./codigo-qr.page.scss'],
})
export class CodigoQRPage implements OnInit {
  asistencias: any;
  constructor(
    private userService: UserService,
    private storageService: StorageService
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

}
