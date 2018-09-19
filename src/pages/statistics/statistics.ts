import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading, Refresher } from 'ionic-angular';

import { AuthProvider, DictionaryProvider } from '../../providers';
import { Word } from '../../models';

import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-statistics',
  templateUrl: 'statistics.html'
})
export class StatisticsPage {
  wordStats: Word[] = [];
  wordStatsCount: number = 0;

  public loading: Loading;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private authProvider: AuthProvider,
    private dictionaryProvider: DictionaryProvider
  ) {}

  ionViewCanEnter() {
    const subscription = this.authProvider.user.subscribe(user => {
      subscription.unsubscribe();
      return !!user;
    });
  }

  ionViewWillEnter() {
    this.getWordStats().subscribe(_ => {
      this.loading && this.loading.dismiss(() => (this.loading = null));
    });
  }

  getWordStats(): Observable<any> {
    this.loading = this.loadingCtrl.create();
    this.loading.present();

    const observable = this.dictionaryProvider.getWordStats();
    observable.subscribe(
      data => {
        this.wordStats = data;
        this.wordStatsCount = this.wordStats.length;
      },
      error => alert(error)
    );
    return observable;
  }

  doRefresh(refresher: Refresher) {
    this.getWordStats().subscribe(() => {
      refresher.complete();
      this.loading && this.loading.dismiss(() => (this.loading = null));
    });
  }

  expandItem(item) {
    // this.wordStats.map(listItem => {
    //   if (item == listItem) {
    //     listItem.expanded = !listItem.expanded;
    //   } else {
    //     listItem.expanded = false;
    //   }

    //   return listItem;
    // });
    item.expanded = !item.expanded;
  }
}
