import {Component} from '@angular/core';
import {LoadingController, ModalController, NavController, NavParams} from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public loader: LoadingController) {

  }

  ionViewDidLoad() {
    let loader = this.loader.create({
      spinner: 'dots'
    });
    loader.present();
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
