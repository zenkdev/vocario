import { Component, Output, EventEmitter } from '@angular/core';
import { Word } from '../../models';

@Component({
  selector: 'word-card',
  templateUrl: 'word-card.html'
})
export class WordCardComponent {
  @Output()
  onValidate = new EventEmitter<boolean>();

  word: Word;
  header: string = 'New word';
  userTranslation: string;
  translationPlaceHolder: string;

  constructor() {}

  newWord(word: Word) {
    this.word = word;
    if (this.word && this.word.count) {
      this.header = 'Repeating';
    } else {
      this.header = 'New word';
    }
    this.userTranslation = '';
    this.translationPlaceHolder = '';
  }

  // invalidTranslationValidator(validTranslation: string): ValidatorFn {
  //   return (control: AbstractControl): { [key: string]: any } | null => {
  //     const invalid =
  //       !validTranslation ||
  //       !control.value ||
  //       validTranslation.toLocaleLowerCase() !== control.value.toLocaleLowerCase();
  //     return invalid ? { invalidTranslation: { value: control.value } } : null;
  //   };
  // }

  onHelpRequested() {
    if (this.word && !this.translationPlaceHolder) {
      this.word.count = this.word.count + 1;
      this.word.errors = this.word.errors + 1;
      this.translationPlaceHolder = this.word.translation;
    }
  }

  onSubmit() {
    if (this.word) {
      this.word.count = this.word.count + 1;
      const valid =
        this.word.translation &&
        this.userTranslation &&
        this.word.translation.toLocaleLowerCase() === this.userTranslation.toLocaleLowerCase();
      if (!valid) {
        this.word.errors = this.word.errors + 1;
        this.translationPlaceHolder = this.word.translation;
      }
      this.onValidate.emit(valid);
      this.userTranslation = '';
    }
  }
}
