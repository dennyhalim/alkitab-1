import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListkitabPage } from './listkitab';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    ListkitabPage,
  ],
  imports: [
    IonicPageModule.forChild(ListkitabPage),PipesModule
  ],
})
export class ListkitabPageModule {}
