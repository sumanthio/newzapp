import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewsProviderListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-news-provider-list',
  templateUrl: 'news-provider-list.html',
})
export class NewsProviderListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // Make the call to v2/sources...
    console.log('ionViewDidLoad NewsProviderListPage');
  }

}
