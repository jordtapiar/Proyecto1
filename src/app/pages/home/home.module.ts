import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { Componente1Component } from 'src/app/components/edicionPerfil/componente1.component';
import { Componente2Component } from 'src/app/components/horario/componente2.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,Componente1Component,Componente2Component]
})
export class HomePageModule {}
