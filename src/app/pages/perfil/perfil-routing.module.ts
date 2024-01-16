import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilPage } from './perfil.page';
import { Componente1Component } from 'src/app/components/componente1/componente1.component';
import { Componente2Component } from 'src/app/components/componente2/componente2.component';
import { Componente3Component } from 'src/app/components/componente3/componente3.component';

const routes: Routes = [
  {
    path: '',
    component: PerfilPage,
    children:[
      {
        path:'uno',
        component: Componente1Component
      },
      {
        path:'dos',
        component: Componente2Component
      },
      {
        path:'trrres',
        component: Componente3Component
      }
    ]
  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilPageRoutingModule {}
