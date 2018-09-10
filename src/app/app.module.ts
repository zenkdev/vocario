import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { DictionaryProvider } from '../providers/dictionary';
import { InMemoryDataProvider } from '../providers/in-memory-data';
import { MessageProvider } from '../providers/message';
import { ComponentsModule } from '../components/components.module';
import { PipesModule } from '../pipes/pipes.module';

import { AuthProvider, ProfileProvider, StatProvider } from '../providers';

@NgModule({
  declarations: [MyApp, AboutPage, HomePage, TabsPage],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataProvider),
    ComponentsModule,
    PipesModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, AboutPage, HomePage, TabsPage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DictionaryProvider,
    MessageProvider,
    AuthProvider,
    ProfileProvider,
    StatProvider
  ]
})
export class AppModule {}
