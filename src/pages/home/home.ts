import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {NewsProviderListPage} from "../news-provider-list/news-provider-list";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  next() {
    this.navCtrl.push(NewsProviderListPage);
  }

}
