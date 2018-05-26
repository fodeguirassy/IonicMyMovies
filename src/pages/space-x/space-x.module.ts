import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpaceXPage } from './space-x';

@NgModule({
  declarations: [
    SpaceXPage,
  ],
  imports: [
    IonicPageModule.forChild(SpaceXPage),
  ],
})
export class SpaceXPageModule {}
