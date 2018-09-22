import { Component, Output, EventEmitter, ElementRef, AfterViewChecked, Renderer } from '@angular/core';
import { Word } from '../../models';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'word-card',
  templateUrl: 'word-card.html'
})
export class WordCardComponent implements AfterViewChecked {
  @Output()
  onValidate = new EventEmitter<boolean>();

  word: Word;
  header: string = 'New word';
  userTranslation: string;
  translationPlaceHolder: string;

  constructor(public navCtrl: NavController, public elementRef: ElementRef, public renderer: Renderer) {}

  // for future use
  ngAfterViewChecked() {
    const element = this.elementRef.nativeElement.querySelector('input');
    this.renderer.invokeElementMethod(element, 'focus', []);
  }

  newWord(word: Word) {
    this.word = word;
    if (this.word && this.word.count > 0) {
      this.header = 'Repeating';
    } else {
      this.header = 'New word';
    }
    this.userTranslation = '';
    this.translationPlaceHolder = '';
  }

  onHelpRequested() {
    if (!this.word) {
      return;
    }

    if (!this.translationPlaceHolder) {
      this.translationPlaceHolder = this.word.translation;
      this.onValidate.emit(false);
    }
  }

  onSubmit() {
    if (!this.word) {
      return;
    }

    const valid =
      this.word.translation &&
      this.userTranslation &&
      this.word.translation.trim().toLocaleLowerCase() === this.userTranslation.trim().toLocaleLowerCase();

    if (!valid) {
      this.translationPlaceHolder = this.word.translation;
      this.userTranslation = '';
    }
    this.onValidate.emit(valid);
  }
}
