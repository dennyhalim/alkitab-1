import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KitabdetailPage } from './kitabdetail';

@NgModule({
  declarations: [
    KitabdetailPage,
  ],
  imports: [
    IonicPageModule.forChild(KitabdetailPage),
  ],
})
export class KitabdetailPageModule {}
