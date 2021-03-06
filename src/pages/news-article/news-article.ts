import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the NewsArticlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-news-article',
  templateUrl: 'news-article.html',
})
export class NewsArticlePage {
  public article: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.article = this.navParams.data
  }

  ionViewDidLoad() {
  }

}
