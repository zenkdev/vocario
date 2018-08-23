import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DictionaryProvider } from '../../providers/dictionary';
import { Dictionary, Word } from '../../models';
import { randomNumber } from './randomNumber';

/**
 * Generated class for the LearnPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-learn',
  templateUrl: 'learn.html'
})
export class LearnPage {
  dictionaryId: number;
  title: string;
  dictionary: Dictionary;
  currentWord: Word;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private dictionaryProvider: DictionaryProvider
  ) {
    this.dictionaryId = +this.navParams.data.dictionaryId;
    this.title = this.navParams.data.title || 'Learn';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LearnPage');
  }

  ionViewWillEnter() {
    this.dictionaryProvider.getDictionary(this.dictionaryId).subscribe(data => {
      this.dictionary = data;
      this.changeWord();
    });
  }

  changeWord() {
    const words = this.dictionary && this.dictionary.words;
    if (words && words.length) {
      const rnd = words.length > 1 ? randomNumber(0, words.length - 1) : 0;
      this.currentWord = words[rnd];
    } else {
      this.currentWord = null;
    }
  }
}
