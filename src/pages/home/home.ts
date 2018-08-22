import { Component, OnInit } from '@angular/core';
import { NavController, Refresher } from 'ionic-angular';
import { Dictionary } from '../../models';
import { DictionaryProvider } from '../../providers/dictionary';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  dictionaries: Dictionary[];

  constructor(public navCtrl: NavController, private dictionaryProvider: DictionaryProvider) {}

  ngOnInit() {
    this.getDictionaries();
  }

  getDictionaries(): void {
    this.dictionaryProvider.getDictionaries().subscribe(dictionaries => (this.dictionaries = dictionaries));
  }

  doRefresh(refresher: Refresher) {
    this.dictionaryProvider.getDictionaries().subscribe(dictionaries => (this.dictionaries = dictionaries));
    // this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe((data: any) => {
    //   this.shownSessions = data.shownSessions;
    //   this.groups = data.groups;

    //   // simulate a network request that would take longer
    //   // than just pulling from out local json file
    //   setTimeout(() => {
    //     refresher.complete();

    //     const toast = this.toastCtrl.create({
    //       message: 'Sessions have been updated.',
    //       duration: 3000
    //     });
    //     toast.present();
    //   }, 1000);
    // });
  }

}
