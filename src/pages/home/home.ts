import { Component, OnInit } from '@angular/core';
import { NavController, Refresher, ItemSliding } from 'ionic-angular';
import { Dictionary } from '../../models';
import { DictionaryProvider } from '../../providers/dictionary';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  queryText = '';
  segment = 'all';
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

  goToLearn(dictionaryData: Dictionary) {
    // go to the learn page
    // and pass in the dictionary data

    this.navCtrl.push('LearnPage', { dictionaryId: dictionaryData.id, title: dictionaryData.name });
  }

  addFavorite(slidingItem: ItemSliding, dictionaryData: Dictionary) {

    // if (this.user.hasFavorite(sessionData.name)) {
    //   // woops, they already favorited it! What shall we do!?
    //   // prompt them to remove it
    //   this.removeFavorite(slidingItem, sessionData, 'Favorite already added');
    // } else {
    //   // remember this session as a user favorite
    //   this.user.addFavorite(sessionData.name);

    //   // create an alert instance
    //   let alert = this.alertCtrl.create({
    //     title: 'Favorite Added',
    //     buttons: [{
    //       text: 'OK',
    //       handler: () => {
    //         // close the sliding item
    //         slidingItem.close();
    //       }
    //     }]
    //   });
    //   // now present the alert on top of all other content
    //   alert.present();
    // }

  }

  removeFavorite(slidingItem: ItemSliding, dictionaryData: Dictionary, title: string) {
    // let alert = this.alertCtrl.create({
    //   title: title,
    //   message: 'Would you like to remove this session from your favorites?',
    //   buttons: [
    //     {
    //       text: 'Cancel',
    //       handler: () => {
    //         // they clicked the cancel button, do not remove the session
    //         // close the sliding item and hide the option buttons
    //         slidingItem.close();
    //       }
    //     },
    //     {
    //       text: 'Remove',
    //       handler: () => {
    //         // they want to remove this session from their favorites
    //         this.user.removeFavorite(sessionData.name);
    //         this.updateSchedule();

    //         // close the sliding item and hide the option buttons
    //         slidingItem.close();
    //       }
    //     }
    //   ]
    // });
    // // now present the alert on top of all other content
    // alert.present();
  }

}
