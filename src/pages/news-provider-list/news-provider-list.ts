import {Component} from '@angular/core';
import {LoadingController, NavController, NavParams} from 'ionic-angular';

import {NewsListPage} from "../news-list/news-list";

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
  public sources: any [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public loader: LoadingController) {
  }

  ionViewDidLoad() {
    // Make the call to v2/sources...
    let loader = this.loader.create({
      spinner: 'dots'
    });
    loader.present();
    fetch('https://newsapi.org/v2/sources?apiKey=a8aea7d76f7d46bab28420df3be23ddc')
      .then((response) => response.json())
      .then((data) => {
        this.sources = data.sources;
        loader.dismiss();
      })
  }

  goToArticles(name) {
    this.navCtrl.push(NewsListPage, {
      name
    });
  }

}
