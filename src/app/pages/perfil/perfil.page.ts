import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BdlocalService } from 'src/app/service/bdlocal.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage  {
  nombre!: string;
  numero!: number;
data: any;
  bdlocalservice: any;

  constructor(private router:Router) {}

  segmentChanged($event:any){
    console.log($event);
    let direccion=$event.detail.value;
    this.router.navigate(['perfil/'+direccion])
  }
  guardar(){
    console.log(this.nombre);
    console.log(this.numero);
    this.bdlocalservice.guardarContactos(this.nombre,this.numero);
  }

  

}
