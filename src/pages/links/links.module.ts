import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';

import {LinksService} from '../../providers/links';

import {LinksPage} from './links';
import {LinksDetalheModule} from './links-detalhe/links-detalhe.module';
import {LinksModalModule} from './links-modal/links-modal.module';



@NgModule({
  declarations: [
    LinksPage,
  ],
  imports: [
    IonicPageModule.forChild(LinksPage), LinksDetalheModule, LinksModalModule
  ],
  exports: [
    LinksPage,
  ],
  providers: [LinksService],
})
export class LinksModule {
}
