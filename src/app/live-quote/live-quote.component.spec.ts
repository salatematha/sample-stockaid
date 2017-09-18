import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveQuoteComponent } from './live-quote.component';

describe('LiveQuoteComponent', () => {
  let component: LiveQuoteComponent;
  let fixture: ComponentFixture<LiveQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
