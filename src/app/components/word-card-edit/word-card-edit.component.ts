import { Component, AfterViewChecked, Output, EventEmitter, ElementRef, Renderer } from '@angular/core';
import { Word } from '../../models';

@Component({
  selector: 'word-card-edit',
  templateUrl: './word-card-edit.component.html',
  styleUrls: ['./word-card-edit.component.scss']
})
export class WordCardEditComponent implements AfterViewChecked {
  @Output()
  validate = new EventEmitter<boolean>();

  word: Word;
  header = 'New word';
  userTranslation: string;
  translationPlaceHolder: string;

  constructor(public elementRef: ElementRef, public renderer: Renderer) {}

  ngAfterViewChecked() {
    const element = this.elementRef.nativeElement.querySelector('ion-input');
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
      this.validate.emit(false);
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
    this.validate.emit(valid);
  }

}
