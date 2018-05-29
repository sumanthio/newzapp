import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {ListPage} from '../pages/list/list';
import {NewsProviderListPage} from "../pages/news-provider-list/news-provider-list";

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {NewsListPage} from "../pages/news-list/news-list";
import {NewsArticlePage} from "../pages/news-article/news-article";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    NewsProviderListPage,
    NewsListPage,
    NewsArticlePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    NewsProviderListPage,
    NewsListPage,
    NewsArticlePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
