import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

import { WordCardEditComponent } from '../../components';
import { Dictionary, Word } from '../../models';
import { DictionaryService } from '../../services/dictionary.service';
import { randomNumber } from './randomNumber';

@Component({
  selector: 'page-learn',
  templateUrl: './learn.page.html',
  styleUrls: ['./learn.page.scss']
})
export class LearnPage implements OnInit {
  public title: string;
  public dictionary: Dictionary;
  public loading: HTMLIonLoadingElement;
  private id: string;
  private word: Word;

  @ViewChild('wordCard')
  wordCard: WordCardEditComponent;

  constructor(
    private route: ActivatedRoute,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private dictionaryService: DictionaryService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.title = this.route.snapshot.paramMap.get('title') || 'Learn';
  }

  async ngOnInit() {
    try {
      this.dictionary = await this.getDictionary(this.id);
      this.newWord();
    } catch (error) {
      alert(error);
    } finally {
      if (this.loading) {
        this.loading.dismiss(() => (this.loading = null));
      }
    }
  }

  async onValidate(valid: boolean) {
    try {
      await this.updateDictionaryFromWord(this.dictionary, this.word, valid);
      const justLearned = valid && this.word.count === this.word.errors;
      this.dictionary.wordsLearned += justLearned ? 1 : 0;
      if (this.dictionary.wordsLearned > this.dictionary.totalWords) {
        this.dictionary.wordsLearned = this.dictionary.totalWords;
      }
      this.word.count++;
      this.word.errors += valid ? 0 : 1;
      if (valid) {
        this.newWord();
        if (justLearned) {
          const toast = await this.toastCtrl.create({
            message: `Words learned ${this.dictionary.wordsLearned} of ${this.dictionary.totalWords}.`,
            duration: 1000
          });
          await toast.present();
        }
      }
    } catch (error) {
      alert(error);
    }
  }

  private async getDictionary(id: string): Promise<any> {
    this.loading = await this.loadingCtrl.create();
    await this.loading.present();

    return new Promise((resolve, reject) => {
      this.dictionaryService.getDictionary(id).subscribe(resolve, reject);
    });
  }

  private async updateDictionaryFromWord(dictionary: Dictionary, word: Word, valid: boolean): Promise<any> {
    return new Promise((resolve, reject) => {
      this.dictionaryService.updateDictionaryFromWord(dictionary, word, valid).subscribe(resolve, reject);
    });
  }

  private newWord() {
    if (this.dictionary && this.dictionary.totalWords) {
      const rnd = this.dictionary.totalWords > 1 ? randomNumber(0, this.dictionary.totalWords - 1) : 0;
      this.word = this.dictionary.words[rnd];
      this.wordCard.newWord(this.word);
    } else {
      this.wordCard.newWord(null);
    }
  }
}
