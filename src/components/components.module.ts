import { NgModule } from '@angular/core';
import { WordCardComponent } from './word-card/word-card';
import { IonicModule } from 'ionic-angular';
@NgModule({
  declarations: [WordCardComponent],
  imports: [IonicModule],
  exports: [WordCardComponent]
})
export class ComponentsModule {}
