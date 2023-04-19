import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('test on highlight directive', () => {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let titleEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HighlightDirective, AppComponent],
    });

    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    titleEl = fixture.debugElement.query(By.css('.my-title'));
  });

  it('onHover background must be yellow', () => {
    titleEl.triggerEventHandler('mouseover', null);
    fixture.detectChanges();
    expect(titleEl.nativeElement.style.backgroundColor).toBe('yellow');
  });
});
