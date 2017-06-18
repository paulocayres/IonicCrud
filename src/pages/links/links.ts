import {Component} from '@angular/core';
// import { NgClass } from '@angular/common';
import {ActionSheetController, AlertController, IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';

import {LinksService} from '../../providers/links';

import {LinksDetalhe} from './links-detalhe/links-detalhe';
import {LinksModal} from './links-modal/links-modal';



/**
 * Generated class for the Links page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-links',
  templateUrl: 'links.html'
  // styleUrls: ['links.scss']

})
export class LinksPage {
  links: any;
  // exclui: boolean;
  link: any;
  select: boolean = false;
  index: any;
  currentSelected: number = null;


  constructor(
      public navCtrl: NavController, public navParams: NavParams,
      public linksService: LinksService, public modalCtrl: ModalController,
      public actionSheet: ActionSheetController,
      public alertCtrl: AlertController) {
    this.links = linksService.getLinks();
    // this.exclui = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Links');
  }

  goPage(link, idx) {
    console.log('entrou no gopage')

        if (this.select == true && idx == this.currentSelected) {
      this.select = false;
      this.currentSelected = null;
    }
    else {
      this.navCtrl.push(
          LinksDetalhe, {
            index: this.links.indexOf(link),
            nome: link.nome,
            data: link.data,
            hora: link.hora,
            pais: link.pais,
            uf: link.uf,
            municipio: link.municipio,
            codpostal: link.codpostal
          }

      );
      this.select = false;
      this.currentSelected = null;
    }
  }
  insert() {
    let modal = this.modalCtrl.create(LinksModal);


    modal.onDidDismiss(
        (link) => {this.linksService.insert(link)

        });

    modal.present();
  }

  update(link) {
    let modal = this.modalCtrl.create(
        LinksModal, {parametro: link, index: this.links.indexOf(link)});

    modal.onDidDismiss((link) => {
      this.select = false;
      this.currentSelected = null;
      this.linksService.update(link, this.index);

    });

    modal.present();
  }


  exclui(link) {
    // console.log(link);
    this.showConfirm();
    // this.linksService.excluir(this.links.indexOf(link));
    // this.exclui = false;
    // this.select = false;
  }

  excluir(link) {
    console.log(link);
    // this.showConfirm();
    this.linksService.excluir(this.links.indexOf(link));
    // this.exclui = false;
    this.select = false;
    this.currentSelected = null;
  }

  botoes(link: any, idx: number) {
    // this.exclui = true;
    this.link = link;
    // this.showConfirm();
    this.select = true;
    this.currentSelected = idx;
  }

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Confirmação',
      message: 'Deseja Excluir?',
      buttons: [
        {
          text: 'Não',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Sim',
          handler: () => {
            console.log('Agree clicked');
            this.excluir(this.link);
          }
        }
      ]
    });
    confirm.present();
  }
}
