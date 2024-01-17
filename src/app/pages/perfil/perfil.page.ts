import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  nombre!: string;
  numero!: number;
data: any;
  bdlocalservice: any;

  items = [];

  ngOnInit() {
    for (let i = 1; i < 51; i++) {
      this.items.push();
    }
  }


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
