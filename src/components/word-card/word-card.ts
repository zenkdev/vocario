import { Component, Input } from '@angular/core';
import { Word } from '../../models';

/**
 * Generated class for the WordCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'word-card',
  templateUrl: 'word-card.html'
})
export class WordCardComponent {
  @Input()
  word: Word;

  header:string = "New word";

  constructor() {}
}
