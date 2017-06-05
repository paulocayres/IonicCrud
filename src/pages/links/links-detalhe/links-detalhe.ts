import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { LinksModal } from "../links-modal/links-modal";
import { LinksService } from "../../../providers/links";

/**
 * Generated class for the LinksDetalhe page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-links-detalhe',
  templateUrl: 'links-detalhe.html',
})
export class LinksDetalhe {

  link: any;
  index: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public linksService: LinksService



  ) {
    
    this.link = { nome : navParams.get('nome'),
     data : navParams.get('data'),
     hora : navParams.get('hora'),
     pais : navParams.get('pais'),
     uf : navParams.get('uf'),
     municipio : navParams.get('municipio'),
     codpostal : navParams.get('codpostal') };

     this.index = navParams.get('index');
     
     console.log("Construiu");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LinksDetalhe');
  }

  update(link){
    let modal = this.modalCtrl.create(LinksModal, {parametro: link, index: this.index});

    modal.onDidDismiss(
        (link) => {this.linksService.update(link,this.index)
    });

    modal.present();
  }

}
