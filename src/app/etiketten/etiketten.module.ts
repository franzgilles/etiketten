import { BottleComponent } from './../bottle/bottle.component';
import { FivCenterModule, FivIconModule } from '@fivethree/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EtikettenPage } from './etiketten.page';

const routes: Routes = [
  {
    path: '',
    component: EtikettenPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FivCenterModule,
    FivIconModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EtikettenPage, BottleComponent]
})
export class EtikettenPageModule { }
