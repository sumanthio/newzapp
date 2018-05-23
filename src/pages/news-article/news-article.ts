import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {NewsProvider} from "../../providers/news/news";

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private newsService: NewsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsArticlePage', this.newsService.getCurrentArticle());
  }

}
