import {Component} from '@angular/core';
import {ModalController, NavController, NavParams} from 'ionic-angular';
import {NewsArticlePage} from "../news-article/news-article";

/**
 * Generated class for the NewsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-news-list',
  templateUrl: 'news-list.html',
})
export class NewsListPage {

  public articles: any [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {

  }

  ionViewDidLoad() {
    // make the call to https://newsapi.org/v2/top-headlines?sources=bbc-news
    fetch(`https://newsapi.org/v2/top-headlines?sources=${this.navParams.get('name')}&apiKey=a8aea7d76f7d46bab28420df3be23ddc`)
      .then((response) => response.json())
      .then((data) => {
        this.articles = data.articles;
      })
  }

  goToArticle(article) {
    let articleModal = this.modalCtrl.create(NewsArticlePage, article);
    articleModal.present();
  }

}
