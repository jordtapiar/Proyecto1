import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OlvidastecontraPageRoutingModule } from './olvidastecontra-routing.module';

import { OlvidastecontraPage } from './olvidastecontra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OlvidastecontraPageRoutingModule
  ],
  declarations: [OlvidastecontraPage]
})
export class OlvidastecontraPageModule {}
