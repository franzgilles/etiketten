import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WinesPage } from './wines.page';
import { FivCenterModule } from '@fivethree/core';

const routes: Routes = [
  {
    path: '',
    component: WinesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FivCenterModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WinesPage]
})
export class WinesPageModule {}
