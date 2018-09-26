import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordCardEditComponent } from './word-card-edit.component';

describe('WordCardEditComponent', () => {
  let component: WordCardEditComponent;
  let fixture: ComponentFixture<WordCardEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordCardEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordCardEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
