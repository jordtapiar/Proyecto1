import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilPage } from './perfil.page';
import { Componente1Component } from 'src/app/components/edicionPerfil/componente1.component';
import { Componente2Component } from 'src/app/components/horario/componente2.component';

const routes: Routes = [
  {
    path: '',
    component: PerfilPage,
    children:[
      {
        path:'editarPerfil',
        component: Componente1Component
      },
      {
        path:'horario',
        component: Componente2Component
      },
     
    ]
  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilPageRoutingModule {}
