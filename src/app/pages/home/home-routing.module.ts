import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { Componente1Component } from 'src/app/components/edicionPerfil/componente1.component';
import { Componente2Component } from 'src/app/components/horario/componente2.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,

    children:[
      {
        path:'uno',
        component: Componente1Component
      },
      {
        path:'dos',
        component: Componente2Component
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
