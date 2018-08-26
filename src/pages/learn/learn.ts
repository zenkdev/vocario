import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { DictionaryProvider } from '../../providers/dictionary';
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
  dictionaryId: number;
  title: string;
  dictionary: Dictionary;

  @ViewChild('wordCard')
  wordCard: WordCardComponent;

  getWordsLearned() {
    const wordsLearned = (this.dictionary && this.dictionary.wordsLearned) || 0;
    const totalWords = (this.dictionary && this.dictionary.words && this.dictionary.words.length) || 0;
    return `${wordsLearned} / ${totalWords}`;
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private dictionaryProvider: DictionaryProvider,
    public toastCtrl: ToastController
  ) {
    this.dictionaryId = +this.navParams.data.dictionaryId;
    this.title = this.navParams.data.title || 'Learn';
  }

  ionViewWillEnter() {
    this.dictionaryProvider.getDictionary(this.dictionaryId).subscribe(data => {
      this.dictionary = data;
      this.changeWord();
    });
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
  }

  onValidate(valid: boolean) {
    this.dictionaryProvider.updateDictionary(this.dictionary).subscribe(_ => {
      if (valid) {
        this.dictionary.wordsLearned = this.dictionary.words.filter(x => x.count > 0).length;
        const toast = this.toastCtrl.create({
          message: `Words learned ${this.dictionary.wordsLearned} of ${this.dictionary.words.length}.`,
          duration: 1000
        });
        toast.present();
        this.changeWord();
      }
    });
  }
}
