import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {LinksModal} from './links-modal';

@NgModule({
  declarations: [
    LinksModal,
  ],
  imports: [
    IonicPageModule.forChild(LinksModal),
  ],
  exports: [LinksModal]
})
export class LinksModalModule {
}
