import {ErrorHandler, NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {HomePage} from '../pages/home/home';
import {LinksModule} from '../pages/links/links.module';

import {MyApp} from './app.component';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp), LinksModule, HttpModule],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  providers: [
    StatusBar, SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
