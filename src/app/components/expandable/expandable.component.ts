import { Component, AfterViewInit, ViewChild, Input, Renderer, ElementRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-expandable',
  templateUrl: './expandable.component.html',
  styleUrls: ['./expandable.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExpandableComponent implements AfterViewInit {
  @ViewChild('expandWrapper', { read: ElementRef })
  expandWrapper;

  @Input()
  expanded: boolean;

  @Input()
  expandHeight: number;

  constructor(public renderer: Renderer) {}

  ngAfterViewInit() {
    this.renderer.setElementStyle(this.expandWrapper.nativeElement, 'height', this.expandHeight + 'px');
  }
}
