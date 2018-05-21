import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {NewsProviderListPage} from "../news-provider-list/news-provider-list";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public NewsProviderListPage: any = NewsProviderListPage;

  constructor(public navCtrl: NavController) {

  }

  next() {
    console.log("Yasss");
    this.navCtrl.push(NewsProviderListPage);

  }

}
