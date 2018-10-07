import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LoadingController, Refresher } from '@ionic/angular';

import { Word } from '../../models';
import { DictionaryService } from '../../services/dictionary.service';

@Component({
  selector: 'page-statistics',
  templateUrl: './statistics.page.html',
  styleUrls: ['./statistics.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StatisticsPage implements OnInit {
  wordStats: Word[] = [];
  wordStatsCount = 0;
  // if itemExpandHeight is undefined, expanded will use autoheight
  // itemExpandHeight = 140;

  public loading: HTMLIonLoadingElement;

  constructor(private loadingCtrl: LoadingController, private dictionaryService: DictionaryService) {}

  async ngOnInit() {
    await this.loadData();
  }

  async loadData() {
    try {
      this.wordStats = await this.getStatistics();
      this.wordStats.sort((a, b) => {
        return b.errors - a.errors;
      });
      this.wordStatsCount = this.wordStats ? this.wordStats.length : 0;
    } catch (error) {
      alert(error);
    } finally {
      if (this.loading) {
        this.loading.dismiss(() => (this.loading = null));
      }
    }
  }

  async getStatistics(): Promise<any> {
    this.loading = await this.loadingCtrl.create();
    await this.loading.present();

    return new Promise((resolve, reject) => {
      this.dictionaryService.getStatistics().subscribe(resolve, reject);
    });
  }

  async doRefresh({ target: refresher }: { target: Refresher }) {
    await this.loadData();
    refresher.complete();
    if (this.loading) {
      await this.loading.dismiss();
      this.loading = null;
    }
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
