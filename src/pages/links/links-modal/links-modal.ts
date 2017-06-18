import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the LinksModal page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-links-modal',
  templateUrl: 'links-modal.html',
})
export class LinksModal {
  link: any;
  index: any;

  constructor(
      public navCtrl: NavController, public navParams: NavParams,
      public viewCtrl: ViewController) {
    this.link = navParams.get('parametro') || {
      nome: '',
      data: '',
      hora: '',
      pais: '',
      uf: '',
      municipio: '',
      codpostal: ''
    };
    this.index = navParams.get('index');
    console.log(this.link);
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad LinksModal');
  }

  cancel() {
    this.viewCtrl.dismiss(this.link);
  }

  salvar() {
    this.viewCtrl.dismiss(this.link);
  }
}
