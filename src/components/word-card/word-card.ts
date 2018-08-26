import { Component, Output, EventEmitter, Renderer, ElementRef, AfterViewChecked } from '@angular/core';
import { Word } from '../../models';
import { NavController } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';

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

  constructor(public navCtrl: NavController, private renderer: Renderer, private elementRef: ElementRef) {}

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
    const element = this.elementRef.nativeElement.querySelector('input');
    this.renderer.invokeElementMethod(element, 'focus', []);
  }

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
    if (!this.word) {
      return this.navCtrl.setRoot(HomePage);
    }

    if (!this.translationPlaceHolder) {
      this.word.count = this.word.count + 1;
      this.word.errors = this.word.errors + 1;
      this.translationPlaceHolder = this.word.translation;
      this.onValidate.emit(false);
    }
  }

  onSubmit() {
    if (!this.word) {
      return this.navCtrl.setRoot(HomePage);
    }

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
