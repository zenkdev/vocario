import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, Loading } from 'ionic-angular';
import { DictionaryProvider, StatProvider } from '../../providers';
import { Dictionary, Word } from '../../models';
import { randomNumber } from './randomNumber';
import { WordCardComponent } from '../../components/word-card/word-card';
import { HomePage } from '../home/home';
import { error } from 'util';

@IonicPage()
@Component({
  selector: 'page-learn',
  templateUrl: 'learn.html'
})
export class LearnPage {
  dictionaryId: string;
  title: string;
  dictionary: Dictionary;
  word: Word;
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
    this.dictionaryProvider.getDictionary(this.dictionaryId).subscribe(
      dictionary => {
        this.dictionary = dictionary;
        this.changeWord();
      },
      error => console.error(error)
    );

    this.loading = this.loadingCtrl.create();
    this.loading.present();
  }

  changeWord() {
    if (!this.dictionary) {
      return this.navCtrl.setRoot(HomePage);
    }
    if (this.dictionary.totalWords) {
      const rnd = this.dictionary.totalWords > 1 ? randomNumber(0, this.dictionary.totalWords - 1) : 0;
      this.word = this.dictionary.words[rnd];
      this.wordCard.newWord(this.word);
    } else {
      this.wordCard.newWord(null);
    }
    this.loading && this.loading.dismiss(() => (this.loading = null));
  }

  onValidate(valid: boolean) {
    this.statProvider.updateStats(this.dictionary, this.word, valid).subscribe(
      newWordsLearned => {
        this.dictionary.wordsLearned = newWordsLearned;
        if (valid) {
          const toast = this.toastCtrl.create({
            message: `Words learned ${this.dictionary.wordsLearned} of ${this.dictionary.totalWords}.`,
            duration: 1000
          });
          toast.present();

          this.changeWord();
        }
      },
      error => {
        alert(error);
      }
    );
  }
}
