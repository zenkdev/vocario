import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ItemSliding, Refresher } from '@ionic/angular';

import { Dictionary } from '../../models';
import { DictionaryService } from '../../services/dictionary.service';

@Component({
  selector: 'page-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePage implements OnInit {
  queryText = '';
  segment = 'all';
  dictionaries: Dictionary[];

  public loading: HTMLIonLoadingElement;

  constructor(
    public router: Router,
    public loadingCtrl: LoadingController,
    private dictionaryService: DictionaryService
  ) {}

  async ngOnInit() {
    try {
      this.dictionaries = await this.getDictionaries();
    } catch (error) {
      alert(error);
    } finally {
      if (this.loading) {
        await this.loading.dismiss();
        this.loading = null;
      }
    }
  }

  async getDictionaries(): Promise<any> {
    this.loading = await this.loadingCtrl.create();
    await this.loading.present();

    return new Promise((resolve, reject) => {
      this.dictionaryService.getDictionaries().subscribe(resolve, reject);
    });
  }

  async doRefresh(refresher: Refresher) {
    try {
      this.dictionaries = await this.getDictionaries();
    } catch (error) {
      alert(error);
    } finally {
      refresher.complete();
      if (this.loading) {
        await this.loading.dismiss();
        this.loading = null;
      }
    }
  }

  goToLearn(dictionaryData: Dictionary) {
    // go to the learn page
    // and pass in the dictionary data
    this.router.navigate(['/learn', { id: dictionaryData.id, title: dictionaryData.name }]);
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
