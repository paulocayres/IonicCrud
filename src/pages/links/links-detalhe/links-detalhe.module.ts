import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LinksDetalhe } from './links-detalhe';

@NgModule({
  declarations: [
    LinksDetalhe,
  ],
  imports: [
    IonicPageModule.forChild(LinksDetalhe),
  ],
  exports: [
    LinksDetalhe
  ]
})
export class LinksDetalheModule {}
