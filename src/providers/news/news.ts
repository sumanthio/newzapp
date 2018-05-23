import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

/*
  Generated class for the NewsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewsProvider {

  article: object;

  constructor(public http: HttpClient) {
  }

  getNewsSources() {
  }

  getNewsArticles() {
  }

  setCurrentArticle(article) {
    this.article = article
  }

  getCurrentArticle() {
    return this.article;
  }

}
