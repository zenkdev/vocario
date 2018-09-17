import { NgModule } from '@angular/core';
import { WordCardComponent } from './word-card/word-card';
import { IonicModule } from 'ionic-angular';
import { ExpandableComponent } from './expandable/expandable';
@NgModule({
  declarations: [WordCardComponent,
    ExpandableComponent],
  imports: [IonicModule],
  exports: [WordCardComponent,
    ExpandableComponent]
})
export class ComponentsModule {}
