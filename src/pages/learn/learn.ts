import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, Loading } from 'ionic-angular';
import { DictionaryProvider } from '../../providers';
import { Dictionary, Word } from '../../models';
import { randomNumber } from './randomNumber';
import { WordCardComponent } from '../../components/word-card/word-card';

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
    private dictionaryProvider: DictionaryProvider
  ) {
    this.dictionaryId = this.navParams.data.dictionaryId;
    this.title = this.navParams.data.title || 'Learn';
    console.log('constructor');
    this.loadData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad');
  }

  onValidate(valid: boolean) {
    console.log('onValidate', valid);
    this.dictionaryProvider.updateDictionaryFromWord(this.dictionary, this.word, valid).subscribe(
      _ => {
        this.dictionary.wordsLearned += valid && !this.word.count ? 1 : 0;
        if (this.dictionary.wordsLearned > this.dictionary.totalWords) {
          this.dictionary.wordsLearned = this.dictionary.totalWords;
        }
        this.word.count++;
        this.word.errors += valid ? 0 : 1;
        if (valid) {
          this.newWord();
          const toast = this.toastCtrl.create({
            message: `Words learned ${this.dictionary.wordsLearned} of ${this.dictionary.totalWords}.`,
            duration: 1000
          });
          toast.present();
        }
      },
      error => alert(error)
    );
  }

  private loadData() {
    console.log('loadData');
    this.dictionaryProvider.getDictionary(this.dictionaryId).subscribe(
      dictionary => {
        this.dictionary = dictionary;
        this.newWord();
      },
      error => {
        alert(error);
        this.loading && this.loading.dismiss(() => (this.loading = null));
      }
    );

    this.loading = this.loadingCtrl.create();
    this.loading.present();
  }

  private newWord() {
    console.log('newWord');
    if (this.dictionary && this.dictionary.totalWords) {
      const rnd = this.dictionary.totalWords > 1 ? randomNumber(0, this.dictionary.totalWords - 1) : 0;
      this.word = this.dictionary.words[rnd];
      this.wordCard.newWord(this.word);
    } else {
      this.wordCard.newWord(null);
    }
    this.loading && this.loading.dismiss(() => (this.loading = null));
  }
}
