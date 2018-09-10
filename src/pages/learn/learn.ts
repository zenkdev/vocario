import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, Loading } from 'ionic-angular';
import { DictionaryProvider, StatProvider } from '../../providers';
import { Dictionary } from '../../models';
import { randomNumber } from './randomNumber';
import { WordCardComponent } from '../../components/word-card/word-card';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-learn',
  templateUrl: 'learn.html'
})
export class LearnPage {
  dictionaryId: string;
  title: string;
  dictionary: Dictionary;
  public loading: Loading;

  @ViewChild('wordCard')
  wordCard: WordCardComponent;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private dictionaryProvider: DictionaryProvider,
    private statProvider: StatProvider
  ) {
    this.dictionaryId = this.navParams.data.dictionaryId;
    this.title = this.navParams.data.title || 'Learn';
  }

  ionViewWillEnter() {
    this.dictionaryProvider.getDictionary(this.dictionaryId).subscribe(dictionary => {
      this.dictionary = dictionary;
      this.statProvider.getWordsLearned(this.dictionaryId).subscribe(n => {
        this.dictionary.wordsLearned = n;
        this.changeWord();
      });
    });

    this.loading = this.loadingCtrl.create();
    this.loading.present();
  }

  changeWord() {
    if (!this.dictionary) {
      return this.navCtrl.setRoot(HomePage);
    }
    const words = this.dictionary.words;
    if (words && words.length) {
      const rnd = words.length > 1 ? randomNumber(0, words.length - 1) : 0;
      this.wordCard.newWord(words[rnd]);
    } else {
      this.wordCard.newWord(null);
    }

    this.loading && this.loading.dismiss(() => (this.loading = null));
  }

  onValidate(valid: boolean) {
    if (valid) {
      const n = this.dictionary.wordsLearned + 1;
      this.statProvider.setWordsLearned(this.dictionaryId, n).subscribe(() => {
        this.dictionary.wordsLearned = n;
        this.dictionaryProvider.updateDictionary(this.dictionary).subscribe(_ => {
          if (valid) {
            const toast = this.toastCtrl.create({
              message: `Words learned ${this.dictionary.wordsLearned} of ${this.dictionary.totalWords}.`,
              duration: 1000
            });
            toast.present();

            this.changeWord();
          }
        });
      });
    }
  }
}
